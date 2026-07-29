from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parent
TMP = ROOT / "tmp" / "brand-clean"
ASSETS = ROOT / "public" / "assets"


def solid_rect(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], color: tuple[int, int, int]) -> None:
    draw.rectangle(box, fill=color)


def blur_rect(image: Image.Image, box: tuple[int, int, int, int], radius: int = 24) -> None:
    crop = image.crop(box).filter(ImageFilter.GaussianBlur(radius))
    image.paste(crop, box)


def open_rgb(source: Path) -> Image.Image:
    image = Image.open(source)
    if getattr(image, "n_frames", 1) > 1:
        image.seek(0)
    return ImageOps.exif_transpose(image).convert("RGB")


def save_webp(image: Image.Image, destination: Path) -> None:
    image.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    image.save(destination, "WEBP", quality=88, method=6)


def tpo_line_wide() -> None:
    image = open_rgb(TMP / "src-tpo-line-wide.jpg")
    image = image.crop((0, 340, 2600, 2660))
    save_webp(image, ASSETS / "production-tpo-line-redacted.webp")


def pvc_line() -> None:
    image = open_rgb(TMP / "src-pvc-line.jpg")
    image = image.crop((2480, 450, 5100, 2140))
    save_webp(image, ASSETS / "production-pvc-line-redacted.webp")


def production_hall() -> None:
    image = open_rgb(TMP / "src-production-hall.png")
    draw = ImageDraw.Draw(image)
    solid_rect(draw, (760, 565, 1045, 635), (27, 88, 156))
    solid_rect(draw, (1195, 640, 1750, 730), (28, 88, 158))
    solid_rect(draw, (1625, 560, 2015, 640), (27, 88, 156))
    save_webp(image, ASSETS / "production-hall-redacted.webp")


def machine_detail() -> None:
    image = open_rgb(TMP / "src-machine-detail.png")
    image = image.crop((0, 0, 2050, 1440))
    save_webp(image, ASSETS / "production-machine-detail-redacted.webp")


def factory_aerial() -> None:
    image = open_rgb(TMP / "src-factory-aerial.png")
    blur_rect(image, (590, 1000, 920, 1055), 18)
    blur_rect(image, (980, 1332, 1370, 1385), 20)
    save_webp(image, ASSETS / "factory-aerial-redacted.webp")


def storage_tanks() -> None:
    image = open_rgb(TMP / "src-storage-tanks.jpg")
    draw = ImageDraw.Draw(image)
    solid_rect(draw, (1965, 1880, 2865, 2078), (39, 112, 185))
    solid_rect(draw, (2830, 1770, 3820, 2022), (38, 112, 185))
    solid_rect(draw, (915, 1880, 1805, 2030), (40, 111, 183))
    save_webp(image, ASSETS / "factory-storage-tanks-redacted.webp")


def tps_line() -> None:
    image = open_rgb(TMP / "src-tps-line.jpg")
    draw = ImageDraw.Draw(image)
    solid_rect(draw, (2040, 1180, 2815, 1690), (21, 102, 190))
    solid_rect(draw, (330, 0, 2860, 365), (86, 64, 142))
    save_webp(image, ASSETS / "production-tps-line-redacted.webp")


def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)
    for task in (
        tpo_line_wide,
        pvc_line,
        production_hall,
        machine_detail,
        factory_aerial,
        storage_tanks,
        tps_line,
    ):
        task()
        print(task.__name__)


if __name__ == "__main__":
    main()
