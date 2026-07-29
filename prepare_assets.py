from pathlib import Path
from shutil import copy2

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter
from pypdf import PdfReader


SITE = Path(__file__).resolve().parent
SOURCE = SITE.parent / "work" / "source_extracts"
SOURCE_PDF = SITE.parent / "tmp" / "pdfs" / "source-advantages.pdf"
OUTPUTS = SITE.parent / "outputs" / "FINAL_SEND_TO_CUSTOMER"
ASSETS = SITE / "public" / "assets"
DOCS = SITE / "public" / "downloads"

ASSETS.mkdir(parents=True, exist_ok=True)
DOCS.mkdir(parents=True, exist_ok=True)


def cover_crop(image: Image.Image, width: int, height: int) -> Image.Image:
    ratio = max(width / image.width, height / image.height)
    resized = image.resize(
        (round(image.width * ratio), round(image.height * ratio)),
        Image.Resampling.LANCZOS,
    )
    left = max(0, (resized.width - width) // 2)
    top = max(0, (resized.height - height) // 2)
    return resized.crop((left, top, left + width, top + height))


def save_photo(source: Path, target: Path, crop=None, size=(1400, 900)):
    image = Image.open(source).convert("RGB")
    if crop:
        image = image.crop(crop)
    image = cover_crop(image, *size)
    image = ImageEnhance.Contrast(image).enhance(1.04)
    image = ImageEnhance.Color(image).enhance(0.96)
    image.save(target, quality=88, optimize=True)


def extract_pdf_image(page_number: int, image_name: str) -> Image.Image:
    reader = PdfReader(SOURCE_PDF)
    for embedded in reader.pages[page_number - 1].images:
        if embedded.name == image_name:
            return embedded.image.convert("RGB")
    raise FileNotFoundError(
        f"Embedded image {image_name} was not found on PDF page {page_number}"
    )


def save_embedded_photo(
    page_number: int,
    image_name: str,
    target: Path,
    *,
    rotate: int = 0,
    upscale_to=None,
):
    image = extract_pdf_image(page_number, image_name)
    if rotate:
        image = image.rotate(rotate, expand=True)
    if upscale_to:
        image = image.resize(upscale_to, Image.Resampling.LANCZOS)
        image = image.filter(ImageFilter.UnsharpMask(radius=1.1, percent=115, threshold=3))
    image = ImageEnhance.Contrast(image).enhance(1.035)
    image = ImageEnhance.Color(image).enhance(0.97)
    image.save(target, quality=92, optimize=True, progressive=True)


def save_document_preview(source: Path, target: Path, crop=None):
    image = Image.open(source).convert("RGB")
    if crop:
        image = image.crop(crop)
    image.thumbnail((1100, 650), Image.Resampling.LANCZOS)
    image = image.filter(ImageFilter.GaussianBlur(3.8))
    image = ImageEnhance.Contrast(image).enhance(0.9)
    overlay = Image.new("RGBA", image.size, (2, 39, 75, 76))
    image = Image.alpha_composite(image.convert("RGBA"), overlay)
    draw = ImageDraw.Draw(image)
    band_height = max(18, image.height // 12)
    draw.rectangle(
        (0, 0, image.width, band_height),
        fill=(235, 241, 246, 255),
    )
    image.convert("RGB").save(target, quality=82, optimize=True)


# Actual production imagery extracted directly from the source PDF rather
# than enlarged from page screenshots. This preserves the available detail.
save_embedded_photo(10, "IM100.jpg", ASSETS / "factory-pvc.jpg")
save_embedded_photo(10, "IM106.jpg", ASSETS / "factory-line.jpg")
save_embedded_photo(
    20,
    "IM233.jpg",
    ASSETS / "factory-tpo.jpg",
    upscale_to=(1280, 720),
)

# Product and system imagery already cleaned of the former brochure header.
for name in (
    "pvc_types.png",
    "accessories_full.png",
    "accessories_corners_pipes.png",
    "accessories_drains.png",
    "accessories_hardware.png",
    "tpo_features.png",
    "pvc_features.png",
):
    copy2(SOURCE / name, ASSETS / name)

# Redacted previews only. Identifying text is deliberately unreadable; full
# product-specific documents are supplied during a technical review.
save_document_preview(
    SOURCE / "pvc_root_test.png",
    ASSETS / "doc-root-resistance.jpg",
    crop=(30, 82, 1118, 492),
)
save_document_preview(
    SOURCE / "tpo_fire.png",
    ASSETS / "doc-fire-performance.jpg",
)
save_document_preview(
    SOURCE / "tpo_weathering.png",
    ASSETS / "doc-weathering.jpg",
)
save_document_preview(
    SOURCE / "tpo_wind.png",
    ASSETS / "doc-wind-uplift.jpg",
    crop=(75, 120, 1068, 500),
)

# Compact raster brand mark for the browser icon.
icon = Image.new("RGBA", (192, 192), (255, 255, 255, 0))
draw = ImageDraw.Draw(icon)
draw.polygon([(96, 12), (180, 96), (96, 180), (12, 96)], fill="#0874C9")
draw.line([(56, 92), (86, 122), (139, 67)], fill="white", width=15, joint="curve")
icon.save(ASSETS / "tectaseal-mark.png")

copy2(
    OUTPUTS / "TECTASEAL_TPO_PVC_Roofing_System_Overview_Brand_Clean_Blue_Edition.pdf",
    DOCS / "TECTASEAL_Roofing_System_Overview.pdf",
)
copy2(
    OUTPUTS / "TECTASEAL_Accessories_and_Drain_Outlets_Catalog_Brand_Clean_Blue_Edition.pdf",
    DOCS / "TECTASEAL_Accessories_Catalog.pdf",
)

print(f"Prepared {len(list(ASSETS.iterdir()))} image assets and {len(list(DOCS.iterdir()))} downloads")
