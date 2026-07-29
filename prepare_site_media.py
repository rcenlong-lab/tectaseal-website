from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(r"C:\Users\17209\Documents\Codex\2026-07-26\referenced-chatgpt-conversation-this-is-untrusted\tectaseal-site")
ASSETS = ROOT / "public" / "assets"

SOURCES = {
    "tpo-production-line.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\af220f96338107dfdc1aa4f73dfb19bb.png"
    ),
    "production-line-main.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\94cbe772d69a1fd0d0e262c2149cb15f.png"
    ),
    "production-line-secondary.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\3af32a52b17828b5cc714a44cdf96659.jpg"
    ),
    "production-line-wide.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\bf459e11b2fc250603b6f46c90dbecc5.jpg"
    ),
    "production-material-handling.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\8bf2797872f94de983c82d41b74b4949.jpg"
    ),
    "logistics-container-loading.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\46fd73d6d4553b1f934902a4e8beefaf.jpg"
    ),
    "logistics-pallet-loading.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\4b1a13072cdc83a2a60664e895d973fa.jpg"
    ),
    "field-overview.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\fbbf47d476dd1f0a2e9edad55d773e50.jpg"
    ),
    "field-rollout.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\43339c61587360a1f673ff511566e67c.jpg"
    ),
    "field-roof-scale.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\4b8a479fa667557ef7f1272805bf5323.jpg"
    ),
    "field-mechanical-fixing.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\bd0daa14b9736fca010bd5e8035b934a\26375c5e3fb9bcd64001fc99e0388df5.jpg"
    ),
    "field-welding-wide.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\bd0daa14b9736fca010bd5e8035b934a\c358fb01b3db33f502e93c4165f49e19.jpg"
    ),
    "field-welding-detail.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\22eb333991054c36e8c50c96e5ee7be7.jpg"
    ),
    "field-insulation-layout.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\02bedfbf25a179a5ba69e6fd0ed8fea6.jpg"
    ),
    "field-fastener-detail.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\15fc0aa2f8ebdd3c9fa7e72d043d26ba.jpg"
    ),
    "field-hot-air-detail.webp": Path(
        r"D:\微信\xwechat_files\wxid_anijpvaqyfvm12_0a98\temp\RWTemp\2026-07\21f64c92d3972100bdf2e283065329b0.jpg"
    ),
}


def save_webp(source: Path, destination: Path) -> None:
    if not source.exists():
        raise FileNotFoundError(source)

    with Image.open(source) as image:
        image.seek(0)
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=88, method=6)


def main() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)
    for filename, source in SOURCES.items():
        destination = ASSETS / filename
        save_webp(source, destination)
        print(f"{filename}: {destination.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
