// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    heading: "Practical workforce, compliance and organisational risks heading into 2027",
    body: "Stay ahead of sweeping legislative changes - including the Employment Relations Amendment Act 2026 and upcoming compliance challenges. This session focuses on identifying where your organisation is most exposed and what to prioritize right now.",
    image: "https://static.wixstatic.com/media/958742_ab82e68493984ff8b592b4324bce7d1e~mv2.jpg",
    speakerBlocks: [
      {
        label: "Featuring Key Insights From:",
        speakers: [
          { city: "National Keynote", colorClass: "city-nz-national", name: "Peter Fuiava",           title: "Authority Member",                           org: "Employment Relations Authority" },
          { city: "National Keynote", colorClass: "city-nz-national", name: "Professor Gail Pacheco", title: "Equal Employment Opportunities Commissioner", org: "Te K\u0101hui Tika Tangata Human Rights Commission" },
          { city: "Auckland",         colorClass: "city-nz-akl",      name: "Simon Lapthorne",        title: "Partner",                                    org: "Kiely Thompson Caisley" },
          { city: "Wellington",       colorClass: "city-nz-wlg",      name: "Chloe Luscombe",         title: "Partner",                                    org: "Dundas Street" },
        ],
      },
    ],
    subSessions: [],
  },
  {
    heading: "Interactive discussions, workplace case studies and scenario-led learning",
    body: "Engage in hands-on, real-world case studies designed to help you resolve complex operational vulnerabilities and reduce strict legal exposure.",
    image: "https://static.wixstatic.com/media/958742_f767c154f8f04d9f97a253257b078716~mv2.jpg",
    speakerBlocks: [],
    subSessions: [
      {
        topic: "The Gig Economy, Contractors &amp; The New Gateway Test:",
        speakers: [
          { city: "Auckland",   colorClass: "city-nz-akl", name: "Daniel Erikson", title: "Partner", org: "Tompkins Wake" },
          { city: "Wellington", colorClass: "city-nz-wlg", name: "Jordan Boyle",   title: "Partner", org: "Dyhrberg Drayton Employment Law" },
        ],
      },
      {
        topic: "Absenteeism, Medical Incapacity &amp; ACC Claims:",
        speakers: [
          { city: "Auckland",   colorClass: "city-nz-akl", name: "Emma Peterson", title: "Partner",          org: "Russell McVeagh" },
          { city: "Wellington", colorClass: "city-nz-wlg", name: "Maddy Lister",  title: "Senior Associate", org: "Russell McVeagh" },
        ],
      },
      {
        topic: "Workplace Health &amp; Safety: Drugs and Alcohol Risks:",
        speakers: [
          { city: "Auckland",   colorClass: "city-nz-akl", name: "Ashley-Jayne (AJ) Lodge", title: "Partner", org: "Anderson Lloyd" },
          { city: "Wellington", colorClass: "city-nz-wlg", name: "James Cowan",              title: "Partner", org: "Anderson Lloyd" },
        ],
      },
    ],
  },
  {
    heading: "Explores key issues including contractor risk, medical incapacity, AI, privacy, drugs and alcohol, and bullying complaints",
    body: "Choose your track and walk away with a tailored toolkit to navigate evolving corporate responsibilities.",
    image: "https://static.wixstatic.com/media/958742_6aa9ca29d488462eb739d53acf4b83d0~mv2.jpg",
    speakerBlocks: [],
    subSessions: [
      {
        topic: "Track A: AI, Employment &amp; Privacy Risk",
        topicNote: "(Recruitment discrimination, employee monitoring, and AI policy frameworks)",
        speakers: [
          { city: "Auckland",   colorClass: "city-nz-akl", name: "Laura Scampion", title: "Country Managing Partner", org: "DLA Piper" },
          { city: "Wellington", colorClass: "city-nz-wlg", name: "Carl Blake",      title: "Partner",                 org: "DLA Piper" },
        ],
      },
      {
        topic: "Track B: Bullying &amp; Harassment \u2013 Prevention &amp; Complaint Processes",
        topicNote: "(Reviewing policies, workplace survey triggers, and procedural fairness)",
        speakers: [
          { city: "Auckland",   colorClass: "city-nz-akl", name: "Alastair Espie", title: "Partner", org: "Duncan Cotterill" },
          { city: "Wellington", colorClass: "city-nz-wlg", name: "Kirsty Wallace", title: "Partner", org: "Duncan Cotterill" },
        ],
      },
    ],
  },
  {
    heading: "Provides practical strategies to manage complex people issues and reduce organisational risk",
    body: "Unpack the legal intricacies of senior employee management, exit risks, and embedding measurable fairness into organizational decision-making.",
    image: "https://static.wixstatic.com/media/958742_19ed39754d334d0180fc062ce8fb44b5~mv2.jpg",
    speakerBlocks: [
      {
        label: "Featuring:",
        speakers: [
          { city: "National Keynote", colorClass: "city-nz-national", name: "Professor Gail Pacheco", title: "Equal Employment Opportunities Commissioner", org: "Te K\u0101hui Tika Tangata Human Rights Commission" },
          { city: "Auckland",         colorClass: "city-nz-akl",      name: "Helen Pryde",            title: "Partner",                                    org: "Buddle Findlay" },
          { city: "Wellington",       colorClass: "city-nz-wlg",      name: "Emma Von Veh",           title: "Partner",                                    org: "Buddle Findlay" },
        ],
      },
    ],
    subSessions: [],
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
    font-size: 16px;
    font-weight: 400;
    line-height: 1.45;
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

  /* ── Sub-sessions ── */
  .sub-session-topic {
    margin-top: 15px;
    font-weight: 700;
    color: #ffffff;
    font-size: 16px;
  }

  .sub-session-note {
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.75);
  }

  /* ── Speaker block ── */
  .speaker-block {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.4;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 8px;
    margin-bottom: 15px;
  }

  .speaker-block:last-child {
    margin-bottom: 0;
  }

  .featuring-label {
    font-size: 13px;
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

  .city-nz-national { color: #ff9326; font-weight: 700; }
  .city-nz-akl      { color: #43a047; font-weight: 700; }
  .city-nz-wlg      { color: #f37023; font-weight: 700; }

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

function buildSpeakerRows(speakers) {
  return speakers.map((s) =>
    `<div class="speaker-location-group">
      <span class="${s.colorClass}">${s.city}:</span>
      <span class="speaker-name">${s.name}</span>,
      <span class="speaker-title">${s.title}</span>,
      <span class="speaker-org">${s.org}</span>
    </div>`
  ).join("");
}

function buildSpeakerBlock(block) {
  const label = block.label
    ? `<span class="featuring-label">${block.label}</span>`
    : "";
  return `<div class="speaker-block">${label}${buildSpeakerRows(block.speakers)}</div>`;
}

function buildSubSession(sub) {
  const note = sub.topicNote
    ? ` <span class="sub-session-note">${sub.topicNote}</span>`
    : "";
  return `
    <div class="sub-session-topic">${sub.topic}${note}</div>
    <div class="speaker-block">${buildSpeakerRows(sub.speakers)}</div>
  `;
}

function buildHTML() {
  const items = FEATURES.map((f, i) => {
    const topBlocks   = f.speakerBlocks.map(buildSpeakerBlock).join("");
    const subSessions = f.subSessions.map(buildSubSession).join("");

    return `
      <div class="feature-item${i === 0 ? " active" : ""}" data-index="${i}">
        <div class="feature-heading">
          <span class="arrow">&#8250;</span>
          ${f.heading}
        </div>
        <div class="feature-content">
          ${f.body}
          ${topBlocks}
          ${subSessions}
        </div>
      </div>
    `;
  }).join("");

  const images = FEATURES.map((f, i) =>
    `<img
      class="feature-image${i === 0 ? " active instant-load" : ""}"
      src="${f.image}"
      alt=""
      loading="${i === 0 ? "eager" : "lazy"}"
    >`
  ).join("");

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

class FeaturesAccordionNz2 extends HTMLElement {
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
    const featureItems  = shadow.querySelectorAll(".feature-item");
    const featureImages = shadow.querySelectorAll(".feature-image");

    featureItems.forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.dataset.index, 10);

        featureItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");

        featureImages.forEach((img) => img.classList.remove("active", "instant-load"));

        if (featureImages[index]) {
          featureImages[index].classList.add("active");
        }
      });
    });
  }
}

customElements.define("features-accordion-nz-2", FeaturesAccordionNz2);
