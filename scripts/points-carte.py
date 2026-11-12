"""Génère src/lib/mapPoints.js : un point par chantier autour de chaque ville de
CITY_DATA, en évitant l'eau (Loire, Maine, lacs…).

Les positions sont fictives (aucune adresse client) : tirage pseudo-aléatoire
déterministe dans un rayon `spread` km, plus dense au centre. Chaque point est
vérifié sur la tuile OpenStreetMap (zoom 14) : s'il tombe sur la couleur de
l'eau, il est écarté. Les tuiles sont mises en cache dans /tmp.

Usage : python3 scripts/points-carte.py   (à relancer si CITY_DATA change)
"""
import json, math, os, re, subprocess, time
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = '/tmp/voltory-osm-tiles'
Z = 14
WATER = (170, 211, 223)  # #aad3df, couleur de l'eau du style OSM standard

# CITY_DATA lu dans data.js (source unique de vérité)
src = open(os.path.join(ROOT, 'src/lib/data.js'), encoding='utf8').read()
block = src[src.index('export const CITY_DATA'):]
block = block[:block.index('\n]\n')]
cities = []
for obj in re.findall(r'\{(.*?)\n  \}', block, re.S):
    def f(k, default=None):
        m = re.search(rf"\b{k}:\s*([^,\n]+)", obj)
        return m.group(1).strip().strip("'\"") if m else default
    cities.append({'name': f('name'), 'lat': float(f('lat')), 'lng': float(f('lng')),
                   'spread': float(f('spread', 2)), 'projects': int(f('projects'))})

def tile(x, y):
    os.makedirs(CACHE, exist_ok=True)
    p = f'{CACHE}/{Z}-{x}-{y}.png'
    if not os.path.exists(p):
        tmp = p + '.part'
        subprocess.run(['curl', '-sfL', '-A', 'VoltorySiteBuild/1.0 (generation unique des points de carte)',
                        '-o', tmp, f'https://tile.openstreetmap.org/{Z}/{x}/{y}.png'], check=True)
        os.replace(tmp, p)  # pas de fichier partiel dans le cache si curl échoue
        time.sleep(0.25)
    return Image.open(p).convert('RGB')

def is_water(lat, lng):
    n = 2 ** Z
    fx = (lng + 180) / 360 * n
    fy = (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * n
    x, y = int(fx), int(fy)
    im = tile(x, y)
    px, py = int((fx - x) * 256), int((fy - y) * 256)
    hits = 0
    for dx in (-3, 0, 3):
        for dy in (-3, 0, 3):
            r, g, b = im.getpixel((min(255, max(0, px + dx)), min(255, max(0, py + dy))))
            if abs(r - WATER[0]) + abs(g - WATER[1]) + abs(b - WATER[2]) < 30:
                hits += 1
    return hits >= 2

def rng(seed):
    h = 2166136261
    for ch in seed:
        h = ((h ^ ord(ch)) * 16777619) & 0xFFFFFFFF
    while True:  # xorshift32
        h ^= (h << 13) & 0xFFFFFFFF; h ^= h >> 17; h ^= (h << 5) & 0xFFFFFFFF
        yield h / 4294967296

out = {}
for c in cities:
    r = rng(c['name'])
    kmlat = 1 / 111
    kmlng = 1 / (111 * math.cos(math.radians(c['lat'])))
    pts, rejected, crowded, tries = [], 0, 0, 0
    min_km = 0.06  # 60 m minimum entre deux points : pas de points superposés
    while len(pts) < c['projects']:
        tries += 1
        if tries > c['projects'] * 50:
            raise SystemExit(f"{c['name']} : impossible de placer {c['projects']} points (augmenter spread ?)")
        d = (c.get('spread') or 2) * next(r) ** 0.75
        a = next(r) * 2 * math.pi
        lat = c['lat'] + d * math.sin(a) * kmlat
        lng = c['lng'] + d * math.cos(a) * kmlng
        if any(math.hypot((lat - p[0]) / kmlat, (lng - p[1]) / kmlng) < min_km for p in pts):
            crowded += 1
            continue
        if is_water(lat, lng):
            rejected += 1
            continue
        pts.append([round(lat, 5), round(lng, 5)])
    out[c['name']] = pts
    print(f"{c['name']}: {len(pts)} points ({rejected} écartés dans l'eau, {crowded} trop proches)")

js = ('/* Généré par scripts/points-carte.py — ne pas modifier à la main.\n'
      '   Un point par chantier, positions fictives (aucune adresse client), hors de l\'eau. */\n'
      'export const MAP_POINTS = {\n' +
      ''.join(f"  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v)},\n" for k, v in out.items()) + '}\n')
open(os.path.join(ROOT, 'src/lib/mapPoints.js'), 'w').write(js)
