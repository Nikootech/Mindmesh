import os
import re

pkgs = set()
for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith(('.js', '.jsx')):
            with open(os.path.join(root, f), 'r', encoding='utf-8') as fp:
                for line in fp:
                    for m in re.findall(r"from\s+['\"]([^'\"]+)['\"]", line):
                        if not m.startswith('.'):
                            pkgs.add(m)

print("Found imports:")
for p in sorted(pkgs):
    print(" -", p)
