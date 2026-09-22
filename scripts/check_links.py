#!/usr/bin/env python3
"""Check internal links, images, and basic page structure in dist/ after `npm run build`."""
import collections
import glob
import os
import re
import sys

DIST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist")
pages = glob.glob(DIST + "/**/*.html", recursive=True)
files = {os.path.relpath(os.path.join(r, f), DIST) for r, _, fs in os.walk(DIST) for f in fs}


def exists(path: str) -> bool:
    p = path.split("#")[0].split("?")[0].lstrip("/")
    return p == "" or p in files or p.rstrip("/") + "/index.html" in files


broken = collections.Counter()
issues = []
for pg in pages:
    s = open(pg, encoding="utf-8").read()
    rel = os.path.relpath(pg, DIST)
    for m in re.finditer(r'(?:href|src)="([^"]+)"', s):
        u = m.group(1)
        if u.startswith(("http", "mailto:", "#", "data:")):
            continue
        if not exists(u):
            broken[(rel, u)] += 1
    if len(re.findall(r"<h1", s)) != 1:
        issues.append((rel, "h1 count != 1"))
    for im in re.finditer(r"<img[^>]*>", s):
        if 'alt="' not in im.group(0):
            issues.append((rel, "img without alt"))

print(f"{len(pages)} pages, {len(files)} files")
for k in broken:
    print("BROKEN", *k)
for i in issues:
    print("ISSUE", *i)
sys.exit(1 if broken or issues else 0)
