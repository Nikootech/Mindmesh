<?php
/**
 * MindMesh WorkHub - Hardened Dual Email Dispatcher
 * Features:
 * - Zero-Password default option (Safe against password theft on cPanel)
 * - Protected external/local configuration loader
 * - Anti-Header-Injection sanitization
 * - Anti-bot honeypot detection
 * - IP rate-limiting
 * - Dual notification (Admin lead + Client auto-reply)
 */

define('MINDMESH_SECURE_EXEC', true);

// Suppress raw error leakage to client
ini_set('display_errors', '0');
error_reporting(0);

// Validate and set strict CORS headers (Reject unauthorized external websites)
$allowedOrigins = [
    'https://mindmesh.co.in',
    'https://www.mindmesh.co.in',
    'http://localhost:4028',
    'http://localhost:5173',
    'http://127.0.0.1:4028',
    'http://127.0.0.1:5173'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://mindmesh.co.in");
}

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// 1. Payloads size limit (Prevent denial-of-service / buffer overflow, Max 50KB)
$contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int)$_SERVER['CONTENT_LENGTH'] : 0;
if ($contentLength > 51200) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'Payload too large']);
    exit;
}

// 2. IP Rate Limiting (Max 5 submissions per 15 minutes per IP)
$clientIp = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$sanitizedIp = preg_replace('/[^0-9a-fA-F:\.]/', '', $clientIp);
$rateLimitFile = sys_get_temp_dir() . '/mm_rate_' . md5($sanitizedIp) . '.json';
$rateData = ['count' => 0, 'first_time' => time()];

if (file_exists($rateLimitFile)) {
    $existing = json_decode(@file_get_contents($rateLimitFile), true);
    if ($existing && (time() - $existing['first_time'] < 900)) {
        $rateData = $existing;
    }
}

if ($rateData['count'] >= 5) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Too many requests. Please wait a few minutes before submitting again or call us directly.'
    ]);
    exit;
}

// 3. Load Credentials from Secure Location
// Priority 1: One directory ABOVE public_html (Completely unreachable from web)
// Priority 2: Inside api directory (Protected by .htaccess)
// Priority 3: Fall back to password-free cPanel defaults
$config = [
    'smtp_host'   => 'mail.mindmesh.co.in',
    'smtp_port'   => 465,
    'smtp_user'   => 'noreply@mindmesh.co.in',
    'smtp_pass'   => getenv('SMTP_PASS') ?: '',
    'admin_email' => 'paul@mindmesh.co.in',
    'admin_cc'    => 'sudhan@mindmesh.co.in'
];

$outsideConfig = dirname(__DIR__, 2) . '/mail_config.php';
$insideConfig  = __DIR__ . '/mail_config.php';

if (file_exists($outsideConfig)) {
    $loaded = include $outsideConfig;
    if (is_array($loaded)) $config = array_merge($config, $loaded);
} elseif (file_exists($insideConfig)) {
    $loaded = include $insideConfig;
    if (is_array($loaded)) $config = array_merge($config, $loaded);
}

// 4. Parse & Sanitize Input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true) ?: $_POST;

if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No data provided']);
    exit;
}

// Honeypot check (Bots automatically fill hidden fields)
if (!empty($data['website']) || !empty($data['b_check']) || !empty($data['extra_info'])) {
    // Pretend success so bots don't adapt, but don't send anything
    echo json_encode(['success' => true, 'message' => 'Submission processed']);
    exit;
}

function clean_header($str) {
    // Remove carriage returns & line feeds to prevent Header Injection
    return preg_replace('/[\r\n]+/', '', trim($str));
}

$rawName  = $data['name'] ?? 'Prospective Client';
$rawEmail = $data['email'] ?? '';

$name     = htmlspecialchars(substr(clean_header($rawName), 0, 100));
$email    = filter_var(clean_header($rawEmail), FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'A valid email address is required']);
    exit;
}

$phone       = htmlspecialchars(substr(clean_header($data['phone'] ?? 'Not provided'), 0, 30));
$company     = htmlspecialchars(substr(clean_header($data['company'] ?? 'Not provided'), 0, 100));
$projectType = htmlspecialchars(substr(clean_header($data['projectType'] ?? ($data['project_type'] ?? 'General Consultation')), 0, 80));
$budget      = htmlspecialchars(substr(clean_header($data['budget'] ?? 'Not specified'), 0, 80));
$timeline    = htmlspecialchars(substr(clean_header($data['timeline'] ?? 'Not specified'), 0, 80));
$estimate    = htmlspecialchars(substr(clean_header($data['estimate'] ?? 'Custom estimate requested'), 0, 100));
$description = nl2br(htmlspecialchars(substr(trim($data['description'] ?? 'None provided'), 0, 3000)));
$dateStr     = date('d M Y, h:i A') . ' IST';

// 5. Secure Mail Sending Functions
function send_smtp_ssl_secure($to, $subject, $htmlBody, $replyTo = null, $cc = null, $config = []) {
    $host = $config['smtp_host'] ?? 'mail.mindmesh.co.in';
    $port = $config['smtp_port'] ?? 465;
    $user = $config['smtp_user'] ?? 'noreply@mindmesh.co.in';
    $pass = $config['smtp_pass'] ?? '';

    // If password is not configured, fall back to password-free cPanel mail()
    if (empty($pass)) {
        return send_php_mail_secure($to, $subject, $htmlBody, $replyTo, $cc, $user);
    }

    $socket = @fsockopen("ssl://{$host}", $port, $errno, $errstr, 8);
    if (!$socket) {
        return send_php_mail_secure($to, $subject, $htmlBody, $replyTo, $cc, $user);
    }

    $read = function() use ($socket) {
        $res = '';
        while ($str = fgets($socket, 515)) {
            $res .= $str;
            if (substr($str, 3, 1) === ' ') break;
        }
        return $res;
    };

    $write = function($cmd) use ($socket) {
        fputs($socket, $cmd . "\r\n");
    };

    $read();
    $write("EHLO " . gethostname());
    $read();

    $write("AUTH LOGIN");
    $read();
    $write(base64_encode($user));
    $read();
    $write(base64_encode($pass));
    $authRes = $read();

    if (strpos($authRes, '235') === false) {
        fclose($socket);
        return send_php_mail_secure($to, $subject, $htmlBody, $replyTo, $cc, $user);
    }

    $write("MAIL FROM: <{$user}>");
    $read();
    $write("RCPT TO: <{$to}>");
    $read();

    if ($cc) {
        $write("RCPT TO: <{$cc}>");
        $read();
    }

    $write("DATA");
    $read();

    $headers = [
        "From: MindMesh WorkHub <{$user}>",
        "To: {$to}",
        "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8",
        "Date: " . date(DATE_RFC2822)
    ];
    if ($replyTo) $headers[] = "Reply-To: {$replyTo}";
    if ($cc) $headers[] = "Cc: {$cc}";

    $msg = implode("\r\n", $headers) . "\r\n\r\n" . $htmlBody . "\r\n.";
    $write($msg);
    $sendRes = $read();

    $write("QUIT");
    fclose($socket);

    return strpos($sendRes, '250') !== false;
}

function send_php_mail_secure($to, $subject, $htmlBody, $replyTo = null, $cc = null, $fromEmail = 'noreply@mindmesh.co.in') {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: MindMesh WorkHub <{$fromEmail}>\r\n";
    if ($replyTo) $headers .= "Reply-To: {$replyTo}\r\n";
    if ($cc) $headers .= "Cc: {$cc}\r\n";

    return @mail($to, $subject, $htmlBody, $headers);
}

// -------------------------------------------------------------
// Dispatch 1: Admin Notification (to paul@mindmesh.co.in + CC)
// -------------------------------------------------------------
$adminSubject = "⚡ New Consultation Lead: {$name} ({$projectType})";
$adminHtml = "
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #0284c7; padding: 24px; color: #ffffff; text-align: center; }
    .content { padding: 24px; color: #1e293b; font-size: 14px; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
    td.label { font-weight: 600; width: 34%; color: #475569; background: #f8fafc; }
    .footer { background: #f8fafc; padding: 14px; text-align: center; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2 style='margin:0;'>MindMesh WorkHub</h2>
      <p style='margin:6px 0 0 0; opacity:0.9;'>New Client Consultation Request</p>
    </div>
    <div class='content'>
      <p>A new prospective client has completed the consultation form on <strong>mindmesh.co.in</strong>.</p>
      <table>
        <tr><td class='label'>Client Name</td><td><strong>{$name}</strong></td></tr>
        <tr><td class='label'>Email Address</td><td><a href='mailto:{$email}'>{$email}</a></td></tr>
        <tr><td class='label'>Phone Number</td><td><a href='tel:{$phone}'>{$phone}</a></td></tr>
        <tr><td class='label'>Company</td><td>{$company}</td></tr>
        <tr><td class='label'>Project Type</td><td>{$projectType}</td></tr>
        <tr><td class='label'>Budget Range</td><td>{$budget}</td></tr>
        <tr><td class='label'>Target Timeline</td><td>{$timeline}</td></tr>
        <tr><td class='label'>Estimated Range</td><td><strong>{$estimate}</strong></td></tr>
        <tr><td class='label'>Project Details</td><td>{$description}</td></tr>
        <tr><td class='label'>Submitted On</td><td>{$dateStr}</td></tr>
      </table>
    </div>
    <div class='footer'>
      Direct reply to this email responds directly to the client ({$email})
    </div>
  </div>
</body>
</html>
";

$adminSent = send_smtp_ssl_secure(
    $config['admin_email'],
    $adminSubject,
    $adminHtml,
    $email,
    $config['admin_cc'],
    $config
);

// -------------------------------------------------------------
// Dispatch 2: Client Auto-Reply (to $email)
// -------------------------------------------------------------
$clientSubject = "Thanks for reaching out to MindMesh WorkHub!";
$clientHtml = "
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #0284c7; padding: 28px 24px; color: #ffffff; text-align: center; }
    .content { padding: 28px 24px; color: #334155; line-height: 1.6; font-size: 15px; }
    .box { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 16px; margin: 18px 0; }
    .footer { background: #f1f5f9; padding: 18px; text-align: center; font-size: 13px; color: #64748b; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2 style='margin:0;'>MindMesh WorkHub</h2>
      <p style='margin:6px 0 0 0; opacity:0.9;'>Thank You For Reaching Out</p>
    </div>
    <div class='content'>
      <p>Dear <strong>{$name}</strong>,</p>
      
      <p>Thank you for reaching out to <strong>MindMesh WorkHub</strong>. We have received your project inquiry for <strong>{$projectType}</strong>.</p>
      
      <p>Our engineering leads are reviewing your requirements and <strong>we will reach out to you shortly</strong> (typically within 2 business hours) to discuss the project architecture and next steps.</p>
      
      <div class='box'>
        <strong style='color:#0369a1;'>Your Inquiry Summary:</strong><br/>
        • <strong>Project:</strong> {$projectType}<br/>
        • <strong>Timeline:</strong> {$timeline}<br/>
        • <strong>Budget:</strong> {$budget}
      </div>
      
      <p>If you have any urgent requirements or additional project details, you can reply directly to this email or reach us at <a href='mailto:contact@mindmesh.co.in'>contact@mindmesh.co.in</a> or <a href='tel:+918884867171'>+91 88848 67171</a>.</p>
      
      <p style='margin-top: 24px;'>
        Warm regards,<br/>
        <strong>The MindMesh WorkHub Team</strong>
      </p>
    </div>
    <div class='footer'>
      &copy; " . date('Y') . " MindMesh WorkHub • Bengaluru, Karnataka, India
    </div>
  </div>
</body>
</html>
";

$clientSent = send_smtp_ssl_secure(
    $email,
    $clientSubject,
    $clientHtml,
    'contact@mindmesh.co.in',
    null,
    $config
);

// Update rate limiter count
$rateData['count']++;
@file_put_contents($rateLimitFile, json_encode($rateData));

echo json_encode([
    'success' => true,
    'admin_notified' => $adminSent,
    'client_notified' => $clientSent,
    'message' => 'Thank you for reaching out to MindMesh! We have received your inquiry and our team will reach out shortly.'
]);
