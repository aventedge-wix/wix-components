// ─── Custom Element ───────────────────────────────────────────────────────────

class WorkshopOsint extends HTMLElement {

  // ─── Data ──────────────────────────────────────────────────────────────────

  static SPEAKER = {
    photo: 'https://static.wixstatic.com/media/958742_749dd8bc72b54b4aad621ff2d59eb836~mv2.avif',
    name: 'Gavin Whalebone',
    title: 'Principal Intelligence Analyst',
    org: 'NSW Independent Commission Against Corruption',
  };

  static LEARN_ITEMS = [
    'How OSINT enables intelligence-led regulation, including risk assessment, prioritisation, and operational targeting.',
    'Techniques to pivot from a single identifier to build a multi-source intelligence profile.',
    'Methods for exploiting digital archives, open datasets, and Australian public records in regulatory analysis.',
    'How to apply structured verification and corroboration techniques to improve reliability and defensibility.',
    'The legal and ethical parameters governing OSINT in Australian regulatory environments.',
    'How to leverage AI-assisted workflows to enhance collection, analysis, and reporting while maintaining oversight.',
    'Practical understanding of the surface, deep, and dark web, and their relevance to regulatory intelligence.',
  ];

  static TAKEAWAYS = [
    { icon: '🛠️', text: 'A repeatable OSINT workflow suitable for regulatory and investigative settings.' },
    { icon: '🤖', text: 'Practical techniques for building defensible, data-driven intelligence products.' },
    { icon: '⚖️', text: 'Clear guidance on ethical, lawful, and proportionate collection practices.' },
    { icon: '📋', text: 'A curated spreadsheet of 100+ verified OSINT tools and resources, mapped to specific use cases.' },
    { icon: '📝', text: 'Ready-to-use prompt frameworks and structured reporting templates for immediate operational application.' },
  ];

  static CHECK_SVG = `<svg viewBox="0 0 10 10" fill="none"><polyline points="2,5 4.5,7.5 8,3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  static CSS = `
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Thin.woff2') format('woff2'); font-weight: 100; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-ExtraLight.woff2') format('woff2'); font-weight: 200; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Light.woff2') format('woff2'); font-weight: 300; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Regular.woff2') format('woff2'); font-weight: 400; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Medium.woff2') format('woff2'); font-weight: 500; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-DemiBold.woff2') format('woff2'); font-weight: 600; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-ExtraBold.woff2') format('woff2'); font-weight: 800; }
    @font-face { font-family: 'TT Commons'; src: url('https://cdn.jsdelivr.net/gh/oskie-meers/fonts@v1.0.0/TTCommons-Black.woff2') format('woff2'); font-weight: 900; }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :host {
      display: block;
      font-family: 'TT Commons', sans-serif;
    }

    .workshop-section {
      background: #f4f6f8;
      padding: 72px 24px;
      color: #1a2e44;
    }

    .workshop-inner {
      max-width: 1080px;
      margin: 0 auto;
    }

    .workshop-label {
      display: inline-block;
      background: #00a3b4;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 6px 16px;
      border-radius: 2px;
      margin-bottom: 20px;
    }

    .workshop-title {
      font-family: 'TT Commons', sans-serif;
      font-size: clamp(22px, 3.5vw, 36px);
      font-weight: 700;
      color: #0d2b45;
      line-height: 1.3;
      max-width: 780px;
      margin-bottom: 8px;
    }

    .workshop-meta {
      font-size: clamp(15px, 1.4vw, 18px);
      color: #00a3b4;
      font-weight: 600;
      margin-bottom: 40px;
      letter-spacing: 0.3px;
    }

    .workshop-card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 24px rgba(13,43,69,0.10);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .workshop-left {
      padding: 48px 52px;
      border-bottom: 1px solid #e8edf2;
    }

    .workshop-right {
      padding: 48px 52px;
      background: #0d2b45;
      color: #fff;
    }

    .section-heading {
      font-family: 'TT Commons', sans-serif;
      font-size: clamp(11px, 1vw, 13px);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #00a3b4;
      margin-bottom: 16px;
    }

    .workshop-right .section-heading {
      color: #00d4e8;
    }

    .workshop-overview {
      font-size: clamp(16px, 1.5vw, 19px);
      line-height: 1.75;
      color: #3d5166;
      margin-bottom: 32px;
    }

    .speaker-block {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 24px;
      background: #f0f6f8;
      border-left: 4px solid #00a3b4;
      border-radius: 6px;
      margin-top: 4px;
    }

    .speaker-photo {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      border: 3px solid #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }

    .speaker-info { flex: 1; }

    .speaker-role {
      font-size: clamp(10px, 0.9vw, 12px);
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #00a3b4;
      margin-bottom: 4px;
    }

    .speaker-name {
      font-family: 'TT Commons', sans-serif;
      font-size: clamp(17px, 1.5vw, 21px);
      font-weight: 700;
      color: #0d2b45;
      margin-bottom: 4px;
    }

    .speaker-title {
      font-size: clamp(13px, 1.2vw, 16px);
      color: #3d5166;
      line-height: 1.5;
    }

    .speaker-org {
      font-weight: 700;
      color: #0d2b45;
    }

    .learn-list {
      list-style: none;
      margin-bottom: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 32px;
    }

    .learn-list li {
      display: flex;
      gap: 14px;
      align-items: flex-start;
      font-size: clamp(16px, 1.5vw, 19px);
      line-height: 1.65;
      color: #b8cfe0;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }

    .learn-list li:last-child { border-bottom: none; }

    .learn-icon {
      width: 20px;
      height: 20px;
      background: #00a3b4;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .learn-icon svg { width: 10px; height: 10px; }

    .takeaways-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .takeaway-card {
      background: rgba(0,163,180,0.12);
      border: 1px solid rgba(0,163,180,0.25);
      border-radius: 6px;
      padding: 16px;
    }

    .takeaway-card p {
      font-size: clamp(15px, 1.35vw, 18px);
      line-height: 1.55;
      color: #b8cfe0;
    }

    .takeaway-icon {
      font-size: 18px;
      margin-bottom: 8px;
      display: block;
    }

    @media (max-width: 760px) {
      .workshop-left  { padding: 36px 28px; }
      .workshop-right { padding: 36px 28px; }
      .learn-list     { grid-template-columns: 1fr; }
      .takeaways-grid { grid-template-columns: 1fr; }
    }
  `;

  // ─── Render ─────────────────────────────────────────────────────────────────

  connectedCallback() {
    const { SPEAKER, LEARN_ITEMS, TAKEAWAYS, CHECK_SVG, CSS } = WorkshopOsint;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>${CSS}</style>

      <section class="workshop-section">
        <div class="workshop-inner">

          <span class="workshop-label">Post-Summit Workshop</span>
          <h2 class="workshop-title">Next Generation Open Source Intelligence for Regulators: Leveraging Public Data to Strengthen Intelligence-Led Decision Making</h2>
          <p class="workshop-meta">9:00 AM – 12:00 PM &nbsp;·&nbsp; Half-Day Workshop</p>

          <div class="workshop-card">

            <div class="workshop-left">
              <p class="section-heading">Workshop Overview</p>
              <p class="workshop-overview">
                As regulators continue to adopt intelligence-led and data-driven operating models, the ability to systematically collect, validate, and interpret publicly available information has become a core capability.
                <br><br>
                Modern Open Source Intelligence (OSINT) has evolved well beyond ad hoc online searches. It now underpins risk identification, strategic intelligence, operational targeting, and evidence-based regulatory decision making.
                <br><br>
                This workshop presents a contemporary and defensible OSINT framework tailored to regulatory, compliance, and integrity environments. It focuses on how open data, digital identifiers, and publicly accessible records can be transformed into structured intelligence outputs that support prioritisation, investigations, and proactive regulatory action.
                <br><br>
                Participants will be introduced to a disciplined approach to OSINT that emphasises triangulation across digital identifiers (email, username, phone), verification and corroboration of sources, separation of fact from analytical judgement, and structured reporting scripts for large language models to amplify and automate OSINT collection and analysis.
                <br><br>
                In a digital environment shaped by paywalls, platform restrictions, and increased detection of online activity, the workshop also addresses how to adapt collection methods to remain lawful, ethical, and discreet.
                <br><br>
                You will leave with practical tradecraft, AI-powered workflows, and a curated suite of tools that can be immediately applied within government and regulatory contexts.
              </p>

              <p class="section-heading">Workshop Leader</p>
              <div class="speaker-block">
                <img src="${SPEAKER.photo}" alt="${SPEAKER.name}" class="speaker-photo" />
                <div class="speaker-info">
                  <p class="speaker-role">Workshop Leader</p>
                  <p class="speaker-name">${SPEAKER.name}</p>
                  <p class="speaker-title">
                    ${SPEAKER.title}<br>
                    <span class="speaker-org">${SPEAKER.org}</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="workshop-right">
              <p class="section-heading">Attend &amp; Learn</p>
              <ul class="learn-list">
                ${LEARN_ITEMS.map(item => `
                  <li>
                    <span class="learn-icon">${CHECK_SVG}</span>
                    ${item}
                  </li>
                `).join('')}
              </ul>

              <p class="section-heading">Key Takeaways</p>
              <div class="takeaways-grid">
                ${TAKEAWAYS.map(t => `
                  <div class="takeaway-card">
                    <span class="takeaway-icon">${t.icon}</span>
                    <p>${t.text}</p>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('workshop-osint', WorkshopOsint);
