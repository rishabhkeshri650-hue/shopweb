"""Build the branded QR code for shreekeshrisynthetics.vercel.app.

Outputs (brand/):
  qr-square.png   1600x1600  clean QR + logo, for print / WhatsApp / stickers
  qr-poster.png   1400x2000  counter card with the shop details
Run:  python brand/make-qr.py
"""

import os
import qrcode
from PIL import Image, ImageDraw, ImageFilter, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
URL = "https://shreekeshrisynthetics.vercel.app"

CREAM = (250, 247, 241, 255)
INK = (11, 10, 8, 255)
MAROON = (58, 10, 19, 255)
GOLD = (154, 123, 63, 255)
GOLD_L = (201, 169, 106, 255)
MUTE = (122, 114, 101, 255)

F_SERIF = os.path.join(HERE, "fonts", "Playfair.ttf")
F_ITALIC = os.path.join(HERE, "fonts", "Playfair-Italic.ttf")
F_UI = "C:/Windows/Fonts/segoeui.ttf"
F_UI_SB = "C:/Windows/Fonts/seguisb.ttf"


def serif(size, weight=500):
    f = ImageFont.truetype(F_SERIF, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def italic(size, weight=400):
    f = ImageFont.truetype(F_ITALIC, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def tracked(draw, xy, text, font, fill, tracking=0, anchor="mm"):
    """Draw text with letter-spacing, honouring a centre / left anchor."""
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + tracking * max(0, len(text) - 1)
    x, y = xy
    if anchor[0] == "m":
        x -= total / 2
    elif anchor[0] == "r":
        x -= total
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill, anchor="l" + anchor[1])
        x += w + tracking
    return total


def logo_disc(size):
    """The supplied logo, cropped to its gold ring and masked to a circle."""
    src = Image.open(os.path.join(ROOT, "public", "images", "logo.jpg")).convert("RGB")
    inset = int(src.width * 0.012)
    sq = src.crop((inset, inset, src.width - inset, src.height - inset))
    sq = sq.resize((size * 4, size * 4), Image.LANCZOS)

    mask = Image.new("L", (size * 4, size * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size * 4 - 1, size * 4 - 1), fill=255)
    mask = mask.resize((size, size), Image.LANCZOS)

    disc = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    disc.paste(sq.resize((size, size), Image.LANCZOS), (0, 0), mask)
    return disc


def build_qr(px, dark=(27, 11, 14, 255)):
    """QR with high error correction, so the centre logo cannot break it."""
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=1, border=4)
    qr.add_data(URL)
    qr.make(fit=True)
    matrix = qr.get_matrix()
    n = len(matrix)
    module = px / n
    img = Image.new("RGBA", (px, px), (255, 255, 255, 255))
    d = ImageDraw.Draw(img)
    for y, row in enumerate(matrix):
        for x, on in enumerate(row):
            if on:
                x0, y0 = x * module, y * module
                d.rectangle([x0, y0, x0 + module + 0.6, y0 + module + 0.6], fill=dark)
    return img


def place_logo(qr_img, ratio=0.235, ring=True):
    """White safe-zone disc + gold ring + the logo, dead centre."""
    side = qr_img.width
    d_size = int(side * ratio)
    pad = int(d_size * 0.085)
    plate = d_size + pad * 2
    cx = cy = side // 2

    out = qr_img.copy()
    d = ImageDraw.Draw(out)
    d.ellipse([cx - plate // 2, cy - plate // 2, cx + plate // 2, cy + plate // 2], fill=(255, 255, 255, 255))
    if ring:
        d.ellipse(
            [cx - plate // 2, cy - plate // 2, cx + plate // 2, cy + plate // 2],
            outline=GOLD_L,
            width=max(3, plate // 60),
        )
    disc = logo_disc(d_size)
    out.alpha_composite(disc, (cx - d_size // 2, cy - d_size // 2))
    return out


# ---------------------------------------------------------------- square
def make_square(path, framed=True):
    S = 1600
    qr = build_qr(S - 160)
    qr = place_logo(qr, ratio=0.235)

    if framed:
        canvas = Image.new("RGBA", (S, S), CREAM)
        d = ImageDraw.Draw(canvas)
        d.rectangle([34, 34, S - 34, S - 34], outline=(201, 169, 106, 90), width=2)
        canvas.alpha_composite(qr, (80, 80))
        canvas.convert("RGB").save(path, quality=95, optimize=True)
    else:
        canvas = Image.new("RGBA", (S, S), (255, 255, 255, 0))
        canvas.alpha_composite(qr, (80, 80))
        canvas.save(path, optimize=True)
    print("saved", path)


# ---------------------------------------------------------------- poster
def make_poster(path):
    W, H = 1400, 2000
    canvas = Image.new("RGBA", (W, H), CREAM)
    d = ImageDraw.Draw(canvas)

    # border
    d.rectangle([44, 44, W - 44, H - 44], outline=(201, 169, 106, 110), width=2)
    d.rectangle([58, 58, W - 58, H - 58], outline=(201, 169, 106, 45), width=1)

    # logo
    disc = logo_disc(250)
    canvas.alpha_composite(disc, (W // 2 - 125, 116))
    d.ellipse([W // 2 - 134, 107, W // 2 + 134, 375], outline=(201, 169, 106, 120), width=2)

    # name
    tracked(d, (W // 2, 432), "SHREE KESHRI", serif(52, 600), INK, tracking=9)
    tracked(d, (W // 2, 500), "SYNTHETICS", serif(30, 500), GOLD, tracking=13)

    # divider
    y = 556
    d.line([W // 2 - 150, y, W // 2 - 22, y], fill=(201, 169, 106, 160), width=1)
    d.line([W // 2 + 22, y, W // 2 + 150, y], fill=(201, 169, 106, 160), width=1)
    d.polygon([(W // 2, y - 5), (W // 2 + 5, y), (W // 2, y + 5), (W // 2 - 5, y)], fill=GOLD_L)

    # headline
    d.text((W // 2, 640), "Scan to step inside", font=italic(64, 500), fill=MAROON, anchor="mm")
    tracked(d, (W // 2, 706), "THE WHOLE COLLECTION, IN YOUR POCKET", ImageFont.truetype(F_UI, 20), MUTE, tracking=5)

    # QR card with a soft shadow
    card = 900
    x0 = (W - card) // 2
    y0 = 780
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle(
        [x0 + 10, y0 + 18, x0 + card - 10, y0 + card + 8], radius=26, fill=(11, 10, 8, 46)
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(22))
    canvas.alpha_composite(shadow)

    d.rounded_rectangle([x0, y0, x0 + card, y0 + card], radius=24, fill=(255, 255, 255, 255))
    d.rounded_rectangle([x0, y0, x0 + card, y0 + card], radius=24, outline=(226, 215, 195, 255), width=2)

    qr = build_qr(card - 96)
    qr = place_logo(qr, ratio=0.23)
    canvas.alpha_composite(qr, (x0 + 48, y0 + 48))

    # url
    tracked(d, (W // 2, y0 + card + 74), "SHREEKESHRISYNTHETICS.VERCEL.APP", ImageFont.truetype(F_UI_SB, 23), INK, tracking=3)

    # footer
    fy = 1850
    d.line([120, fy - 46, W - 120, fy - 46], fill=(226, 215, 195, 255), width=1)
    d.text((W // 2, fy), "High School Road, Simri Bakhtiyarpur", font=serif(26, 400), fill=INK, anchor="mm")
    tracked(d, (W // 2, fy + 42), "SAHARSA DISTRICT, BIHAR  ·  +91 75628 86262", ImageFont.truetype(F_UI, 18), MUTE, tracking=3)

    canvas.convert("RGB").save(path, quality=95, optimize=True)
    print("saved", path)


if __name__ == "__main__":
    sq = os.path.join(HERE, "qr-square.png")
    po = os.path.join(HERE, "qr-poster.png")
    tr = os.path.join(HERE, "qr-transparent.png")
    make_square(sq)
    make_poster(po)
    make_square(tr, framed=False)

    # verify every file still decodes — at full size and shrunk, like a phone
    import zxingcpp

    for p in (sq, po, tr):
        img = Image.open(p).convert("RGB")
        ok = []
        for scale in (1.0, 0.5, 0.3):
            small = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
            res = zxingcpp.read_barcodes(small)
            ok.append(f"{int(scale * 100)}%: {'ok' if res and res[0].text == URL else 'FAIL'}")
        print(os.path.basename(p), "|", ", ".join(ok))
