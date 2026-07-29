import { InquiryForm } from "./InquiryForm";

const Arrow = () => <span aria-hidden="true">↗</span>;

const complianceItems = [
  {
    title: "Weathering & ageing",
    text: "Accelerated weathering and heat-ageing documentation.",
    image: "/assets/doc-weathering.jpg",
  },
  {
    title: "Reaction to fire",
    text: "Test reports for the confirmed membrane and classification basis.",
    image: "/assets/doc-fire-performance.jpg",
  },
  {
    title: "Wind-uplift performance",
    text: "Laboratory test data for relevant product and system configurations.",
    image: "/assets/doc-wind-uplift.jpg",
  },
  {
    title: "Root penetration",
    text: "Available documentation for applicable PVC configurations.",
    image: "/assets/doc-root-resistance.jpg",
  },
];

const accessoryItems = [
  {
    number: "01",
    title: "Corners & flashings",
    text: "Prefabricated internal and external corners, pipe flashings and custom roof details.",
    image: "/assets/accessories_corners_pipes.png",
  },
  {
    number: "02",
    title: "Drains & outlets",
    text: "Gravity roof drains, side outlets and compatible waterproofing details.",
    image: "/assets/accessories_drains.png",
  },
  {
    number: "03",
    title: "Fixing hardware",
    text: "Screws, plates, caps, termination bars, welding cord and supporting components.",
    image: "/assets/accessories_hardware.png",
  },
];

const installationClips = [
  {
    number: "02",
    title: "Membrane positioning",
    source: "/media/project-installation-02.mp4",
    poster: "/assets/field-rollout.webp",
  },
  {
    number: "03",
    title: "Large-area installation",
    source: "/media/project-installation-03.mp4",
    poster: "/assets/field-roof-scale.webp",
  },
  {
    number: "04",
    title: "Mechanical fastening",
    source: "/media/project-installation-04.mp4",
    poster: "/assets/field-mechanical-fixing.webp",
  },
  {
    number: "05",
    title: "Hot-air welding",
    source: "/media/project-installation-05.mp4",
    poster: "/assets/field-welding-wide.webp",
  },
  {
    number: "06",
    title: "Detail completion",
    source: "/media/project-installation-06.mp4",
    poster: "/assets/field-hot-air-detail.webp",
  },
];

const installationGallery = [
  {
    title: "Roof-wide membrane layout",
    image: "/assets/field-roof-scale.webp",
    className: "project-tile-wide",
  },
  {
    title: "Insulation and fixing pattern",
    image: "/assets/field-insulation-layout.webp",
    className: "project-tile-standard",
  },
  {
    title: "Fastener plate detail",
    image: "/assets/field-fastener-detail.webp",
    className: "project-tile-standard",
  },
  {
    title: "Membrane rollout",
    image: "/assets/field-rollout.webp",
    className: "project-tile-portrait",
  },
  {
    title: "Mechanical fixing detail",
    image: "/assets/field-mechanical-fixing.webp",
    className: "project-tile-standard",
  },
  {
    title: "Hot-air seam welding",
    image: "/assets/field-welding-wide.webp",
    className: "project-tile-wide",
  },
  {
    title: "Completed roof detailing",
    image: "/assets/field-welding-detail.webp",
    className: "project-tile-standard",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TECTASEAL home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>TECTASEAL</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#systems">Systems</a>
          <a href="#components">Components</a>
          <a href="#projects">Projects</a>
          <a href="#manufacturing">Manufacturing</a>
          <a href="#documents">Documentation</a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/8618105236093"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp sales <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PVC & TPO SINGLE-PLY ROOFING SYSTEMS</p>
          <h1>
            Project-ready roofing,
            <span>from membrane to final detail.</span>
          </h1>
          <p className="hero-lead">
            TECTASEAL coordinates membranes, prefabricated details, drains,
            fasteners and product-specific documentation in one export-ready
            roofing package.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#systems">
              Explore systems <Arrow />
            </a>
            <a className="button button-ghost" href="#contact">
              Start a project
            </a>
          </div>
          <div className="hero-metrics" aria-label="Commercial basis">
            <div>
              <strong>17+</strong>
              <span>years&apos; manufacturing experience</span>
            </div>
            <div>
              <strong>1.2 / 1.5 mm</strong>
              <span>common quotation basis</span>
            </div>
            <div>
              <strong>~10 days</strong>
              <span>indicative production after confirmation</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/assets/production-line-main.webp"
            alt="Membrane production equipment at the selected manufacturing partner"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-visual-shade" />
          <div className="hero-tag hero-tag-top">SYSTEM SUPPLY</div>
          <div className="hero-tag hero-tag-bottom">
            <span>Reference MOQ</span>
            <strong>5,000 m² · negotiable</strong>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Service scope">
        <span>BRAND-LED SPECIFICATION</span>
        <span>CONTRACT MANUFACTURING</span>
        <span>LOT-LEVEL QUALITY COORDINATION</span>
        <span>EXPORT DELIVERY SUPPORT</span>
      </section>

      <section className="section systems" id="systems">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE SYSTEM STARTS HERE</p>
            <h2>Two membrane platforms. One coordinated roof.</h2>
          </div>
          <p>
            Select the membrane around the installation method, reinforcement,
            exposure and project documentation—not thickness alone.
          </p>
        </div>

        <div className="system-grid">
          <article className="system-card system-card-pvc">
            <div className="system-copy">
              <span className="system-index">01 / PVC</span>
              <h3>PVC membrane systems</h3>
              <p>
                Hot-air-welded PVC configurations for exposed, mechanically
                fastened, adhered and specialist detailing applications.
              </p>
              <ul>
                <li>Polyester-reinforced options</li>
                <li>Glass-fibre and homogeneous configurations</li>
                <li>Fleece-backed products by application</li>
              </ul>
              <a href="#contact">
                Discuss a PVC project <Arrow />
              </a>
            </div>
            <div className="system-image white-image">
              <img
                src="/assets/pvc_types.png"
                alt="Actual PVC membrane configuration imagery supplied by the production partner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="system-card system-card-tpo">
            <div className="system-copy">
              <span className="system-index">02 / TPO</span>
              <h3>TPO membrane systems</h3>
              <p>
                Reinforced thermoplastic roofing membranes for lightweight,
                heat-welded and reflective single-ply roof assemblies.
              </p>
              <ul>
                <li>1.2 mm and 1.5 mm quotation options</li>
                <li>Hot-air-welded seam technology</li>
                <li>Compatible prefabricated details</li>
              </ul>
              <a href="#contact">
                Discuss a TPO project <Arrow />
              </a>
            </div>
            <div className="system-image tpo-image">
              <img
                src="/assets/tpo-production-line.webp"
                alt="Clear production-line view at the selected manufacturing partner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="section complete-system" id="components">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow">COMPLETE SYSTEM SUPPLY</p>
            <h2>The details that keep projects moving.</h2>
          </div>
          <p>
            Consolidate membrane and compatible accessories in one supply plan
            to reduce fragmented purchasing, urgent replacements and site
            delays.
          </p>
        </div>
        <div className="accessory-grid">
          {accessoryItems.map((item) => (
            <article className="accessory-card" key={item.number}>
              <div className="accessory-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="catalog-link">
          <p>
            Need a complete accessory schedule for a project or stocking order?
          </p>
          <a
            href="/downloads/TECTASEAL_Accessories_Catalog.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download accessories catalog <Arrow />
          </a>
        </div>
      </section>

      <section className="section manufacturing" id="manufacturing">
        <div className="manufacturing-gallery">
          <img
            className="gallery-main"
            src="/assets/production-line-main.webp"
            alt="Wide view of membrane production equipment"
            loading="lazy"
            decoding="async"
          />
          <img
            className="gallery-secondary"
            src="/assets/production-line-secondary.webp"
            alt="Membrane production line operating area"
            loading="lazy"
            decoding="async"
          />
          <div className="gallery-label">
            <span>MANUFACTURING PARTNERSHIP</span>
            <strong>Actual production source imagery</strong>
          </div>
        </div>
        <div className="manufacturing-copy">
          <p className="eyebrow">HOW TECTASEAL WORKS</p>
          <h2>A brand-led supply model with manufacturing depth.</h2>
          <p className="large-copy">
            TECTASEAL is the brand owner and customer-facing roofing system
            provider. Products are contract-manufactured through a long-term
            partnership with a specialist PVC and TPO producer with more than
            17 years of manufacturing experience.
          </p>
          <div className="process-list">
            <div>
              <span>01</span>
              <p>
                <strong>Specification matching</strong>
                Product construction, thickness, reinforcement, colour and roll
                format aligned to the project.
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Quality coordination</strong>
                TECTASEAL-approved requirements, order checks and document
                matching for the confirmed SKU.
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Commercial delivery</strong>
                Branded packaging, consolidated accessories, export
                documentation and after-sales communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section production-flow" aria-labelledby="production-flow-title">
        <div className="production-flow-intro">
          <p className="eyebrow">PRODUCTION TO DISPATCH</p>
          <h2 id="production-flow-title">
            Manufacturing depth, carried through to export loading.
          </h2>
          <p>
            Real production and dispatch imagery from the selected manufacturing
            and fulfilment workflow.
          </p>
        </div>
        <div className="production-flow-grid">
          <article className="production-flow-card production-flow-card-wide">
            <img
              src="/assets/production-line-wide.webp"
              alt="Wide membrane production line"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>01 / PRODUCTION</span>
              <h3>Continuous membrane line</h3>
              <p>Industrial equipment for controlled roll production.</p>
            </div>
          </article>
          <article className="production-flow-card">
            <img
              src="/assets/production-material-handling.webp"
              alt="Raw-material handling and processing equipment"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>02 / HANDLING</span>
              <h3>Material preparation</h3>
              <p>Dedicated handling equipment supports repeatable processing.</p>
            </div>
          </article>
          <article className="production-flow-card">
            <img
              src="/assets/logistics-pallet-loading.webp"
              alt="Wrapped membrane rolls secured on pallets inside a container"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>03 / LOAD PLAN</span>
              <h3>Protected pallet loading</h3>
              <p>Wrapped rolls are palletised and secured for export handling.</p>
            </div>
          </article>
          <article className="production-flow-card production-flow-card-wide">
            <img
              src="/assets/logistics-container-loading.webp"
              alt="Container being loaded with wrapped membrane rolls"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>04 / DISPATCH</span>
              <h3>Container-ready shipment</h3>
              <p>Consolidated membrane and accessory orders prepared for dispatch.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section field-work" id="projects">
        <div className="section-heading field-heading">
          <div>
            <p className="eyebrow">FIELD INSTALLATIONS</p>
            <h2>Real roofs. Real installation sequences.</h2>
          </div>
          <p>
            Selected customer-site footage showing insulation layout, membrane
            positioning, mechanical fastening and hot-air seam work on
            large-area single-ply roofs.
          </p>
        </div>

        <div className="field-feature">
          <figure className="field-feature-video">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/assets/field-overview.webp"
              aria-label="Customer-site roofing installation video"
            >
              <source
                src="/media/project-installation-main.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
            <figcaption>
              <span className="video-status">
                <i aria-hidden="true" />
                CUSTOMER-SITE FOOTAGE
              </span>
              <strong>01 / Full installation overview</strong>
            </figcaption>
          </figure>

          <aside className="field-feature-copy">
            <span>ROOFING SYSTEM IN PRACTICE</span>
            <h3>From substrate preparation to welded field seams.</h3>
            <p>
              The sequence demonstrates the coordination required across
              insulation, fixing layout, membrane alignment and heat-welded
              detailing.
            </p>
            <ol>
              <li>
                <span>01</span>
                Insulation and fixing pattern
              </li>
              <li>
                <span>02</span>
                Membrane positioning and fastening
              </li>
              <li>
                <span>03</span>
                Hot-air welding and detail completion
              </li>
            </ol>
          </aside>
        </div>

        <div className="clip-rail" aria-label="Additional installation videos">
          {installationClips.map((clip) => (
            <figure className="clip-card" key={clip.number}>
              <div className="clip-video">
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={clip.poster}
                  aria-label={`${clip.title} installation video`}
                >
                  <source src={clip.source} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <figcaption>
                <span>{clip.number}</span>
                <strong>{clip.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="project-gallery" aria-label="Installation image gallery">
          {installationGallery.map((item, index) => (
            <figure
              className={`project-tile ${item.className}`}
              key={item.image}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section documents" id="documents">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MANUFACTURING & COMPLIANCE DOCUMENTATION</p>
            <h2>Evidence matched to the product you actually order.</h2>
          </div>
          <p>
            Public previews are redacted to protect commercially sensitive
            production-partner information. Applicable complete documents are
            shared for the confirmed product, manufacturing site and roof
            configuration during technical review.
          </p>
        </div>
        <div className="document-grid">
          {complianceItems.map((item) => (
            <article className="document-card" key={item.title}>
              <div className="document-preview">
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
                <div className="document-lock">
                  <span aria-hidden="true">●</span>
                  REDACTED PREVIEW
                </div>
              </div>
              <div className="document-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>Configuration-specific</span>
              </div>
            </article>
          ))}
        </div>
        <div className="document-actions">
          <a className="button button-primary" href="#contact">
            Request a document pack <Arrow />
          </a>
          <a
            className="text-link"
            href="/downloads/TECTASEAL_Roofing_System_Overview.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download system overview <Arrow />
          </a>
        </div>
      </section>

      <section className="section value-section">
        <div className="value-intro">
          <p className="eyebrow">BUILT AROUND COMMERCIAL REALITY</p>
          <h2>Reduce landed system cost—not just membrane price.</h2>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>Like-for-like comparison</h3>
            <p>
              Compare the exact membrane construction, roll format, test basis
              and delivery term before comparing price.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Consolidated ordering</h3>
            <p>
              Combine membrane, drains, flashings and mechanical fixings to
              reduce separate freight and purchasing work.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Project-specific support</h3>
            <p>
              Build the quotation around application, destination and
              documentation requirements rather than a generic product list.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">START WITH THE PROJECT BRIEF</p>
          <h2>Send the roof. We&apos;ll structure the supply.</h2>
          <p>
            Share the membrane type, installation method, thickness, quantity
            and delivery destination. We will respond with the points needed
            for a configuration-specific quotation.
          </p>
          <div className="contact-direct">
            <span>DIRECT COMMERCIAL CONTACT</span>
            <div className="contact-links">
              <a href="mailto:export@tectaseal.com">
                <small>Email</small>
                export@tectaseal.com <Arrow />
              </a>
              <a
                href="https://wa.me/8618105236093"
                target="_blank"
                rel="noreferrer"
              >
                <small>WhatsApp</small>
                +86 181 0523 6093 <Arrow />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61592341354509"
                target="_blank"
                rel="noreferrer"
              >
                <small>Facebook</small>
                Follow TECTASEAL <Arrow />
              </a>
            </div>
          </div>
        </div>
        <InquiryForm />
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark small" aria-hidden="true">
            <span />
          </span>
          <strong>TECTASEAL</strong>
        </div>
        <p>
          PVC & TPO single-ply roofing systems · B2B project and distribution
          supply
        </p>
        <p className="footer-note">
          Product availability, performance and documentation are
          configuration-specific and subject to technical confirmation.
        </p>
        <div className="footer-contact">
          <a href="https://wa.me/8618105236093">WhatsApp</a>
          <a href="mailto:export@tectaseal.com">Email</a>
          <a href="https://www.facebook.com/profile.php?id=61592341354509">
            Facebook
          </a>
        </div>
      </footer>
    </main>
  );
}
