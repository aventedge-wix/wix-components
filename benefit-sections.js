(function () {

const ICONS = {

  university: `<svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#111144" stroke-width="2" class="s"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="#111144" stroke-width="2" class="s"/>
  </svg>`,

  private: `<svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" stroke="#111144" stroke-width="2" class="s"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="#111144" stroke-width="2" class="s"/>
  </svg>`,

  public: `<svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 21h18" stroke="#111144" stroke-width="2" class="s"/>
    <path d="M3 7l9-4 9 4" stroke="#111144" stroke-width="2" class="s"/>
    <path d="M5 21V7M19 21V7" stroke="#111144" stroke-width="2" class="s"/>
  </svg>`

};

const BENEFITS = [
  {
    icon: ICONS.university,
    title: "Universities & Tertiary",
    desc: "Leaders accountable for curriculum reform, graduate employment outcomes, and institutional performance metrics in an evolving landscape."
  },
  {
    icon: ICONS.private,
    title: "Private Sector",
    desc: "Chief People Officers designing graduate programs, strengthening long-term retention, and planning for organizational capability."
  },
  {
    icon: ICONS.public,
    title: "Public Sector",
    desc: "Policy and workforce leaders overseeing education reform, labour market strategy, and nationwide AI-ready initiatives."
  }
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  .wrapper {
    font-family: 'Poppins', sans-serif;
    padding: 40px 20px;
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .item {
    position: relative;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 20px;
    transition: background 0.4s ease;
  }

  .item:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(17, 17, 68, 0.1);
    transition: background 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    flex-shrink: 0;
  }

  .item:hover .icon {
    transform: scale(1.1) rotate(5deg);
    background: #111144;
  }

  /* Icon strokes flip to white on hover */
  .item:hover .icon svg .s {
    stroke: #ffffff;
  }

  .accent {
    width: 40px;
    height: 4px;
    background: #f59e0b;
    border-radius: 2px;
    margin-bottom: 1.5rem;
    transition: width 0.4s ease, background 0.4s ease;
  }

  .item:hover .accent {
    width: 80px;
    background: #3b82f6;
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    color: #111144;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
    line-height: 1.3;
  }

  .desc {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    color: #000000;
  }

  @media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .grid { grid-template-columns: 1fr; gap: 2rem; }
    .wrapper { padding: 20px 16px; }
  }
`;

class BenefitSections extends HTMLElement {

  connectedCallback() {

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = CSS;

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const grid = document.createElement("div");
    grid.className = "grid";

    BENEFITS.forEach(b => {

      const item = document.createElement("div");
      item.className = "item";

      const icon = document.createElement("div");
      icon.className = "icon";
      icon.innerHTML = b.icon;

      const accent = document.createElement("div");
      accent.className = "accent";

      const title = document.createElement("div");
      title.className = "title";
      title.textContent = b.title;

      const desc = document.createElement("div");
      desc.className = "desc";
      desc.textContent = b.desc;

      item.appendChild(icon);
      item.appendChild(accent);
      item.appendChild(title);
      item.appendChild(desc);

      grid.appendChild(item);

    });

    wrapper.appendChild(grid);

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

  }

}

if (!customElements.get("benefit-sections")) {
  customElements.define("benefit-sections", BenefitSections);
}

})();
