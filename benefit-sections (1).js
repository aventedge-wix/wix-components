(function () {

const ICONS = {

  university: `<svg viewBox="0 0 64 64">
    <path d="M10 28l22-14 22 14H10z" fill="#f98513"/>
    <path d="M14 54V28M50 54V28M32 54V28" stroke="#111144" stroke-width="3" stroke-linecap="round"/>
    <path d="M10 54h44" stroke="#111144" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  private: `<svg viewBox="0 0 64 64">
    <rect x="8" y="22" width="48" height="34" rx="3" stroke="#111144" stroke-width="3" fill="none"/>
    <path d="M24 56V38h16v18" stroke="#111144" stroke-width="3" fill="none"/>
    <path d="M8 34h48" stroke="#f98513" stroke-width="3"/>
  </svg>`,

  public: `<svg viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="22" stroke="#111144" stroke-width="3" fill="none"/>
    <path d="M32 10v44M10 32h44" stroke="#111144" stroke-width="2"/>
    <path d="M14 18c5 4 10 6 18 6s13-2 18-6M14 46c5-4 10-6 18-6s13 2 18 6" stroke="#f98513" stroke-width="2.5" fill="none"/>
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
  .wrapper {
    font-family: sans-serif;
    padding: 40px 20px;
    width: 100%;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 8px 32px rgba(17, 17, 68, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.95);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .item:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(17, 17, 68, 0.18);
  }
  .icon {
    width: 72px;
    height: 72px;
    background: #fff;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease, transform 0.3s ease;
    flex-shrink: 0;
  }
  .icon svg {
    width: 44px;
    height: 44px;
  }
  .item:hover .icon {
    background: #111144;
    transform: scale(1.1) rotate(5deg);
  }
  .accent {
    width: 40px;
    height: 4px;
    background: #f98513;
    border-radius: 2px;
    margin-bottom: 16px;
    transition: width 0.4s ease, background 0.4s ease;
  }
  .item:hover .accent {
    width: 72px;
    background: #3b82f6;
  }
  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #111144;
    line-height: 1.3;
  }
  .desc {
    font-size: 15px;
    line-height: 1.8;
    color: #333333;
  }
  @media (max-width: 1024px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .grid { grid-template-columns: 1fr; gap: 20px; }
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
