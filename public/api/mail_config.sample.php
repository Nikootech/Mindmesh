<?php
/**
 * MindMesh WorkHub - Secure Mail Configuration
 * 
 * =====================================================================
 * SECURITY NOTICE:
 * On cPanel servers, leaving 'smtp_pass' EMPTY is the SAFEST procedure.
 * Why? Because PHP sends directly through the local cPanel Exim server
 * authenticated by the server user itself. No password is required, so
 * NO ONE CAN EVER STEAL IT!
 * 
 * If you specifically require remote SMTP authentication over Port 465,
 * you can put the password here.
 * Direct web browser access to this file is strictly BLOCKED by .htaccess.
 * =====================================================================
 */

defined('MINDMESH_SECURE_EXEC') or die('Direct web access forbidden.');

return [
    'smtp_host'   => 'mail.mindmesh.co.in',
    'smtp_port'   => 465,
    'smtp_user'   => 'noreply@mindmesh.co.in',
    'smtp_pass'   => '', // Leave EMPTY for 100% password-free cPanel mail, or enter account password
    'admin_email' => 'paul@mindmesh.co.in',
    'admin_cc'    => 'sudhan@mindmesh.co.in',
];
