// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    heading: "AI Governance: The compliance shift.",
    body: "Explore the workplace risks reshaping organisations in 2026 and beyond, from AI governance to evolving compliance expectations.",
    speakers: [
      { city: "Brisbane",  colorClass: "city-brisbane",  name: "Shannon Chapman", title: "Partner",  org: "Lander &amp; Rogers" },
      { city: "Melbourne", colorClass: "city-melbourne", name: "Emma Purdue",      title: "Partner",  org: "Lander &amp; Rogers" },
      { city: "Sydney",    colorClass: "city-sydney",    name: "Wendy Fauvel",     title: "Partner",  org: "Lander &amp; Rogers" },
    ],
    image: "https://static.wixstatic.com/media/958742_ab82e68493984ff8b592b4324bce7d1e~mv2.jpg",
  },
  {
    heading: "Workplace Surveillance: Privacy and trust.",
    body: "Gain practical strategies for managing AI-driven decision making, workplace surveillance and employee privacy concerns.",
    speakers: [
      { city: "Brisbane",  colorClass: "city-brisbane",  name: "Gemma Sharp",    title: "Special Counsel",                    org: "Cooper Grace Ward" },
      { city: "Melbourne", colorClass: "city-melbourne", name: "Dale McQualter", title: "Partner",                            org: "Maddocks" },
      { city: "Sydney",    colorClass: "city-sydney",    name: "Olivia Hillier", title: "Partner, Employment Safety and People", org: "Maddocks" },
    ],
    image: "https://static.wixstatic.com/media/958742_f767c154f8f04d9f97a253257b078716~mv2.jpg",
  },
  {
    heading: "Modern Liabilities: Safety, flexibility, and cannabis.",
    body: "Understand how organisations are responding to psychosocial safety obligations, flexible work tensions and medicinal cannabis issues in the workplace.",
    speakers: [
      { city: "Perth Exclusive (Medical Cannabis)", colorClass: "city-perth",      name: "Dr Robert McCartney", title: "Occupational and Environmental Physician", org: "Resile" },
      { city: "Brisbane",                           colorClass: "city-brisbane",  name: "Tamara Lutvey",       title: "Partner",                                org: "Ashurst" },
      { city: "Melbourne",                          colorClass: "city-melbourne", name: "Peter McNulty",       title: "Partner",                                org: "Ashurst",
        extra: { name: "Alicia Crossley", title: "Senior Associate", org: "Ashurst" } },
      { city: "Sydney",                             colorClass: "city-sydney",    name: "Julie Mills",         title: "Partner",                                org: "Ashurst" },
    ],
    image: "https://static.wixstatic.com/media/958742_6aa9ca29d488462eb739d53acf4b83d0~mv2.jpg",
  },
  {
    heading: "Crisis Management: Conduct, performance, and investigations.",
    body: "Take part in practical, scenario-led discussions focused on performance management, investigations and employee conduct.",
    speakers: [
      { city: "Melbourne", colorClass: "city-melbourne", name: "David Dilger",   title: "Director &amp; Co-Founder", org: "Edge Legal" },
      { city: "Sydney",    colorClass: "city-sydney",    name: "Rod Collinson",  title: "Co-Founder",               org: "Edge Legal" },
      { city: "Perth",     colorClass: "city-perth",     name: "Kate Walawski",  title: "Partner",                  org: "Dentons" },
    ],
    image: "https://static.wixstatic.com/media/958742_19ed39754d334d0180fc062ce8fb44b5~mv2.jpg",
  },
  {
    heading: "HR Strategy: Real case studies and outcomes.",
    body: "Learn through real workplace case studies and expert-led sessions designed to provide actionable outcomes for HR leaders. Gain practical perspectives from regulators and leading workplace experts including Fair Work Commission, Workplace Gender Equality Agency, Dentons, Clayton Utz, Ashurst and Maddocks.",
    speakers: [],
    image: "https://static.wixstatic.com/media/958742_c3f4ff1e228f49818844878751aa8130~mv2.jpg",
  },
];

// ─── Styles ──────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :host {
    display: block;
    width: 100%;
  }

  .features-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }

  .features-card {
    width: 100%;
    max-width: 1440px;
    display: flex;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 4px 36px rgba(30, 44, 60, 0.09);
  }

  /* ── Left panel ── */
  .features-left {
    width: 45%;
    background: #172e56;
    padding: 45px;
    color: #fff;
  }

  .features-title {
    font-family: 'Assistant', Arial, sans-serif;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 35px;
    color: #ffffff;
  }

  .feature-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 18px 0;
    cursor: pointer;
  }

  .feature-heading {
    display: flex;
    align-items: center;
    font-family: 'Assistant', Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }

  .arrow {
    color: #31a5d6;
    font-size: 24px;
    font-weight: 700;
    margin-right: 18px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .feature-item.active .arrow {
    transform: rotate(90deg);
  }

  .feature-content {
    display: none;
    padding: 14px 0 5px 42px;
    font-family: 'Assistant', Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.9);
  }

  .feature-item.active .feature-content {
    display: block;
    animation: slide 0.3s ease;
  }

  @keyframes slide {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Speaker block ── */
  .speaker-block {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.35;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 8px;
  }

  .featuring-label {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #31a5d6;
    display: block;
    margin-bottom: 4px;
    font-weight: 700;
  }

  .speaker-location-group {
    margin-bottom: 4px;
  }

  .speaker-location-group:last-child {
    margin-bottom: 0;
  }

  .city-brisbane  { color: #ff4d52; font-weight: 700; }
  .city-melbourne { color: #ff5096; font-weight: 700; }
  .city-sydney    { color: #ff9326; font-weight: 700; }
  .city-perth     { color: #52a36d; font-weight: 700; }

  .speaker-name  { font-weight: 700; color: #ffffff; }
  .speaker-title { font-weight: 400; color: rgba(255, 255, 255, 0.75); }
  .speaker-org   { font-weight: 700; color: #ffffff; }

  /* ── Right panel ── */
  .features-right {
    width: 55%;
    position: relative;
  }

  .feature-image {
    width: 100%;
    height: 100%;
    min-height: 550px;
    object-fit: cover;
    object-position: center;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  .feature-image.active {
    display: block;
    position: relative;
    animation: fade 0.9s ease;
  }

  .feature-image.active.instant-load {
    animation: none;
  }

  @keyframes fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @media (max-width: 900px) {
    .features-card {
      flex-direction: column;
    }

    .features-left,
    .features-right {
      width: 100%;
    }

    .feature-image {
      min-height: 350px;
    }
  }
`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildSpeakerHTML(speakers) {
  if (!speakers || speakers.length === 0) return "";

  const rows = speakers.map((s) => {
    let inner = `<span class="${s.colorClass}">${s.city}:</span> `
      + `<span class="speaker-name">${s.name}</span>, `
      + `<span class="speaker-title">${s.title}</span>, `
      + `<span class="speaker-org">${s.org}</span>`;

    if (s.extra) {
      inner += ` &amp; <span class="speaker-name">${s.extra.name}</span>, `
        + `<span class="speaker-title">${s.extra.title}</span>, `
        + `<span class="speaker-org">${s.extra.org}</span>`;
    }

    return `<div class="speaker-location-group">${inner}</div>`;
  }).join("");

  return `
    <div class="speaker-block">
      <span class="featuring-label">Featuring:</span>
      ${rows}
    </div>
  `;
}

function buildHTML() {
  const items = FEATURES.map((f, i) => `
    <div class="feature-item${i === 0 ? " active" : ""}" data-index="${i}">
      <div class="feature-heading">
        <span class="arrow">&#8250;</span>
        ${f.heading}
      </div>
      <div class="feature-content">
        ${f.body}
        ${buildSpeakerHTML(f.speakers)}
      </div>
    </div>
  `).join("");

  const images = FEATURES.map((f, i) => `
    <img
      class="feature-image${i === 0 ? " active instant-load" : ""}"
      src="${f.image}"
      alt=""
      loading="${i === 0 ? "eager" : "lazy"}"
    >
  `).join("");

  return `
    <div class="features-container">
      <div class="features-card">
        <div class="features-left">
          <div class="features-title">What's New and Different</div>
          ${items}
        </div>
        <div class="features-right">
          ${images}
        </div>
      </div>
    </div>
  `;
}

// ─── Custom Element ───────────────────────────────────────────────────────────

class FeaturesAccordion extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = CSS;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = buildHTML();

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    this._bindEvents(shadow);
  }

  _bindEvents(shadow) {
    const featureItems = shadow.querySelectorAll(".feature-item");
    const featureImages = shadow.querySelectorAll(".feature-image");

    featureItems.forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.dataset.index, 10);

        featureItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");

        featureImages.forEach((img) => {
          img.classList.remove("active", "instant-load");
        });
        featureImages[index].classList.add("active");
      });
    });
  }
}

customElements.define("features-accordion", FeaturesAccordion);
