import os
import zipfile
import re

zip_path = 'cpanel_dist_latest.zip'
if os.path.exists(zip_path):
    os.remove(zip_path)

# 1. Clean up dist/index.html to ensure 0 CLS and optimal preloads
with open('dist/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Ensure standard clean stylesheet link + preload hint for 0 CLS
css_match = re.search(r'href="(/assets/index-[^"]+\.css)"', html_content)
css_path = css_match.group(1) if css_match else '/assets/index-AT5TI_an.css'

js_match = re.search(r'src="(/assets/index-[^"]+\.js)"', html_content)
js_path = js_match.group(1) if js_match else '/assets/index-CPQ4DnlR.js'

# Remove any previous stylesheet, preload, or modulepreload tags from html_content
clean_html = re.sub(r'<link rel="preload" as="style" href="[^"]+">\s*', '', html_content)
clean_html = re.sub(r'<link rel="stylesheet"[^>]*>\s*', '', clean_html)
clean_html = re.sub(r'<noscript><link rel="stylesheet"[^>]*></noscript>\s*', '', clean_html)
clean_html = re.sub(r'<link rel="modulepreload"[^>]*>\s*', '', clean_html)

# Insert clean standard stylesheet + modulepreload
critical_tags = f'''  <link rel="preload" as="style" href="{css_path}">
  <link rel="stylesheet" href="{css_path}">
  <link rel="modulepreload" href="{js_path}">
'''

clean_html = clean_html.replace('</head>', f'{critical_tags}</head>')

# Ensure clean body and empty root to prevent any layout shift or hydration mismatch
clean_html = re.sub(r'<body>.*?</body>', '<body>\n  <noscript>You need to enable JavaScript to run this app.</noscript>\n  <div id="root"></div>\n</body>', clean_html, flags=re.DOTALL)

with open('dist/index.html', 'w', encoding='utf-8') as f:
    f.write(clean_html)

# 2. Package everything into cpanel_dist_latest.zip
with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    # Root files
    for fname in ['.htaccess', 'ai-catalog.json', 'robots.txt', 'sitemap.xml', 'manifest.json', 'llms.txt', 'llms-full.txt', 'mindmesh-logo.png', 'mindmesh-logo.jpg', 'mindmesh-logo.webp', 'favicon.ico', 'favicon.jpg', 'favicon.png', 'vite.svg', '_redirects']:
        src = os.path.join('public', fname)
        if os.path.exists(src):
            zipf.write(src, fname)

    # index.html from dist
    zipf.write(os.path.join('dist', 'index.html'), 'index.html')

    # .well-known/ai-catalog.json
    well_known_file = os.path.join('public', '.well-known', 'ai-catalog.json')
    if os.path.exists(well_known_file):
        zipf.write(well_known_file, '.well-known/ai-catalog.json')

    # API folder
    api_dir = os.path.join('public', 'api')
    if os.path.exists(api_dir):
        for root, dirs, files in os.walk(api_dir):
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, 'public')
                zipf.write(full_p, rel_p.replace('\\', '/'))

    # Assets from dist/assets (only current active assets)
    active_assets = [
        'index-AT5TI_an.css',
        'index-BkMOLsDy.js',
        'index-CG62_nGN.js',
        'index-Ate11Ji3.js',
        'index-BiCZ2Ykl.js',
        'index-CndlwyKX.js',
        'index-Ddzd4tVp.js',
        'index-BfTD-r97.js',
        'PrivacyPolicy-M7uYWp0P.js',
        'TermsOfService-GkVYypp1.js',
        'CookiePolicy-CG2M2lnP.js',
        'Select-DFpmWJZQ.js',
        'leadService-DMI5wAq4.js',
        'Input-CrhH0FAM.js',
        'NotFound--sfAGBlW.js',
        'supabaseClient-C9sOavkw.js',
    ]
    assets_dir = os.path.join('dist', 'assets')
    for fname in active_assets:
        full_p = os.path.join(assets_dir, fname)
        if os.path.exists(full_p):
            zipf.write(full_p, f'assets/{fname}')
            print('Included active asset:', fname)

    # Any assets subfolders (like images)
    assets_img_dir = os.path.join(assets_dir, 'images')
    if os.path.exists(assets_img_dir):
        for root, dirs, files in os.walk(assets_img_dir):
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, 'dist')
                zipf.write(full_p, rel_p.replace('\\', '/'))

    # Images
    images_dir = os.path.join('public', 'images')
    if os.path.exists(images_dir):
        for root, dirs, files in os.walk(images_dir):
            for file in files:
                full_p = os.path.join(root, file)
                rel_p = os.path.relpath(full_p, 'public')
                zipf.write(full_p, rel_p.replace('\\', '/'))

print('Optimized Zip created successfully! Size:', os.path.getsize(zip_path))
