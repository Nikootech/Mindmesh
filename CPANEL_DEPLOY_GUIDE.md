# MindMesh WorkHub - cPanel Deployment Guide

## 📦 Deployment Archive
- **File Name**: `cpanel_dist_latest.zip` (located in the project root directory: `E:\backup\mindmesh\cpanel_dist_latest.zip`)
- **Size**: ~11.8 MB
- **Target Folder in cPanel**: `/public_html` (or your domain root)

---

## 🚀 Quick 3-Step Deployment Instructions

### Step 1: Upload to cPanel
1. Log in to your **cPanel** account (e.g. `https://mindmesh.co.in:2083` or your host portal).
2. Open **File Manager** and navigate into `public_html/`.
3. Click the **Upload** button in the top toolbar.
4. Select `cpanel_dist_latest.zip` from your computer and wait for the upload bar to turn green (100%).

### Step 2: Extract in `public_html/`
1. Go back to `public_html/` in File Manager.
2. Right-click `cpanel_dist_latest.zip` $\rightarrow$ click **Extract** $\rightarrow$ confirm extraction to `/public_html`.
3. (Optional) Delete `cpanel_dist_latest.zip` from `public_html/` to keep storage clean.

### Step 3: Verify & Configure Mailer (1 minute)
1. Ensure `.htaccess` is present in `/public_html` (Enable *"Show Hidden Files (dotfiles)"* in File Manager Settings if not visible).
2. In `public_html/api/`, you will find `contact.php` and `mail_config.sample.php`.
   - Rename or copy `mail_config.sample.php` to `mail_config.php` if you wish to configure dedicated SMTP mail sending:
   ```php
   <?php
   return [
       'smtp_host' => 'mail.mindmesh.co.in',
       'smtp_port' => 465,
       'smtp_secure' => 'ssl',
       'smtp_user' => 'noreply@mindmesh.co.in',
       'smtp_pass' => 'YOUR_EMAIL_PASSWORD',
       'admin_email' => 'paul@mindmesh.co.in',
       'admin_cc' => 'sudhan@mindmesh.co.in'
   ];
   ```
   *(Note: Standard PHP `mail()` is already enabled as fallback out of the box).*

---

## 🔒 Built-in Security & Optimizations Included
- ✅ **SPA Routing (`.htaccess`)**: Seamless React Router SPA client routing for `/about-universe`, `/services-overview`, `/solutions-gallery`, `/contact-consultation`, etc.
- ✅ **Anti-Theft Domain Lock**: Unauthorized mirrors and clones will automatically redirect to `https://mindmesh.co.in`.
- ✅ **Stripped Production Maps**: No `.map` sourcemaps exposed in production.
- ✅ **Direct Mailer (`api/contact.php`)**: Rate limited, honeypot protected, and restricted CORS.
- ✅ **SEO & AI Discovery**: `robots.txt`, `sitemap.xml`, and `llms.txt` included.
