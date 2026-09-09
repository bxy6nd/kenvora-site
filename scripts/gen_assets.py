"""Génère les assets de marque Kenvora : favicon/icônes + image OG.
Usage: python3 scripts/gen_assets.py
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = "/mnt/skills/examples/canvas-design/canvas-fonts"
BOLD = os.path.join(FONT_DIR, "InstrumentSans-Bold.ttf")
REG = os.path.join(FONT_DIR, "InstrumentSans-Regular.ttf")

BG = (7, 17, 31)
BG_SOFT = (11, 22, 40)
BLUE = (79, 124, 255)
VIOLET = (124, 92, 255)
WHITE = (245, 247, 250)
MUTED = (154, 170, 192)

OUT_PUBLIC = os.path.join(ROOT, "public")
os.makedirs(OUT_PUBLIC, exist_ok=True)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def diagonal_gradient(size, c1, c2):
    w, h = size
    img = Image.new("RGB", size, c1)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = (x / w + y / h) / 2
            px[x, y] = lerp(c1, c2, t)
    return img


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, size[0], size[1]], radius=radius, fill=255)
    return mask


def make_mark(size=512, radius_ratio=0.23):
    """Le mark logo : carré arrondi dégradé bleu/violet + glyphe 'K' stylisé (chevrons)."""
    img = diagonal_gradient((size, size), BLUE, VIOLET)
    mask = rounded_mask((size, size), int(size * radius_ratio))
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(img, (0, 0), mask)

    draw = ImageDraw.Draw(canvas)
    s = size
    lw = max(2, int(s * 0.072))
    col = (255, 255, 255, 245)

    def cap(p):
        r = lw / 2
        draw.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=col)

    # Glyphe "K" géométrique monoligne, centré dans le carré.
    stem_x = s * 0.36
    top_y, bottom_y = s * 0.27, s * 0.73
    apex = (stem_x, s * 0.5)
    upper = (s * 0.68, s * 0.27)
    lower = (s * 0.70, s * 0.73)

    draw.line([(stem_x, top_y), (stem_x, bottom_y)], fill=col, width=lw, joint="curve")
    draw.line([apex, upper], fill=col, width=lw, joint="curve")
    draw.line([apex, lower], fill=col, width=lw, joint="curve")
    for p in [(stem_x, top_y), (stem_x, bottom_y), apex, upper, lower]:
        cap(p)
    return canvas


def save_ico(png_path, ico_path, sizes=(16, 24, 32, 48, 64, 128, 256)):
    img = Image.open(png_path).convert("RGBA")
    img.save(ico_path, sizes=[(s, s) for s in sizes])


def make_og_image():
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), BG)
    # fond dégradé radial doux (glow) en haut à gauche + grille légère
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy, r = w * 0.28, h * 0.18, 520
    for i in range(r, 0, -4):
        t = 1 - i / r
        alpha = int(70 * (t ** 1.8))
        col = lerp(BLUE, VIOLET, 0.3)
        gd.ellipse([cx - i, cy - i, cx + i, cy + i], fill=col + (alpha,))
    glow = glow.filter(ImageFilter.GaussianBlur(40))
    img.paste(Image.alpha_composite(Image.new("RGBA", (w, h), BG + (255,)), glow).convert("RGB"), (0, 0))

    draw = ImageDraw.Draw(img)
    # grille très subtile
    step = 48
    for x in range(0, w, step):
        draw.line([(x, 0), (x, h)], fill=(255, 255, 255, 6))
    for y in range(0, h, step):
        draw.line([(0, y), (w, y)], fill=(255, 255, 255, 6))

    # mark (logo réel fourni par Antoine, recadré dans brand-assets/icon-flat.png)
    real_mark_path = os.path.join(ROOT, "brand-assets", "icon-flat.png")
    if os.path.exists(real_mark_path):
        mark = Image.open(real_mark_path).convert("RGB").resize((96, 96), Image.LANCZOS)
        mark_mask = rounded_mask((96, 96), int(96 * 0.2))
        img.paste(mark, (100, 100), mark_mask)
    else:
        mark = make_mark(size=96, radius_ratio=0.23)
        img.paste(mark, (100, 100), mark)

    f_word = ImageFont.truetype(BOLD, 46)
    draw.text((210, 112), "Kenvora", font=f_word, fill=WHITE)

    f_title = ImageFont.truetype(BOLD, 62)
    lines = ["Transformez votre trafic", "en prospects. Automatisez le reste."]
    y = 260
    for line in lines:
        draw.text((100, y), line, font=f_title, fill=WHITE)
        y += 76

    f_sub = ImageFont.truetype(REG, 30)
    draw.text((100, y + 18), "AI Acquisition & Sales Automation", font=f_sub, fill=MUTED)

    img.save(os.path.join(OUT_PUBLIC, "og-image.png"), quality=95)
    print("OG image écrite")


def main():
    mark_512 = make_mark(512)
    mark_512.save(os.path.join(OUT_PUBLIC, "icon-512.png"))

    mark_180 = make_mark(180)
    bg180 = Image.new("RGBA", (180, 180), BG + (255,))
    bg180.paste(mark_180, (0, 0), mark_180)
    bg180.convert("RGB").save(os.path.join(OUT_PUBLIC, "apple-touch-icon.png"))

    mark_32 = make_mark(64)
    mark_32.save(os.path.join(OUT_PUBLIC, "_favicon_src.png"))
    save_ico(os.path.join(OUT_PUBLIC, "_favicon_src.png"), os.path.join(OUT_PUBLIC, "favicon.ico"))
    os.remove(os.path.join(OUT_PUBLIC, "_favicon_src.png"))

    make_og_image()
    print("Assets générés dans /public")


if __name__ == "__main__":
    main()
