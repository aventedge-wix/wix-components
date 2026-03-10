(function () {

const BENEFITS = [
  {
    title: "Universities & Tertiary",
    desc: "Leaders accountable for curriculum reform, graduate employment outcomes, and institutional performance metrics in an evolving landscape.",
    iconPaths: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'
  },
  {
    title: "Private Sector",
    desc: "Chief People Officers designing graduate programs, strengthening long-term retention, and planning for organizational capability.",
    iconPaths: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  },
  {
    title: "Public Sector",
    desc: "Policy and workforce leaders overseeing education reform, labour market strategy, and nationwide AI-ready initiatives.",
    iconPaths: '<path d="M3 21h18"/><path d="M3 7l9-4 9 4"/><path d="M5 21V7"/><path d="M19 21V7"/>'
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
  .item:hover .icon {
    background: #111144;
    transform: scale(1.1) rotate(5deg);
  }
  .icon svg {
    width: 36px;
    height: 36px;
    stroke: #111144;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke 0.3s ease;
  }
  .item:hover .icon svg {
    stroke: #ffffff;
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

      const svg = document.createElement("svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.innerHTML = b.iconPaths;
      icon.appendChild(svg);

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
