const BENEFITS = [
  {
    title: "Universities & Tertiary",
    description: "Leaders accountable for curriculum reform, graduate employment outcomes, and institutional performance metrics in an evolving landscape.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>`
  },
  {
    title: "Private Sector",
    description: "Chief People Officers designing graduate programs, strengthening long-term retention, and planning for organizational capability.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>`
  },
  {
    title: "Public Sector",
    description: "Policy and workforce leaders overseeing education reform, labour market strategy, and nationwide AI-ready initiatives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 21h18"/>
      <path d="M3 7l9-4 9 4"/>
      <path d="M5 21V7"/>
      <path d="M19 21V7"/>
    </svg>`
  }
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :host {
    display: block;
    --color-primary: #111144;
    --color-secondary: #3b82f6;
    --color-accent: #f59e0b;
    --text-main: #000000;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .outer {
    font-family: 'Poppins', sans-serif;
    background: transparent;
    overflow-x: hidden;
    max-width: 1400px;
    margin: 0 auto;
  }

  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding: 4rem 2rem;
  }

  .benefit-item {
    position: relative;
    background: transparent;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 20px;
    cursor: default;
  }

  .benefit-item:hover {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
  }

  .icon-wrapper {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(17, 17, 68, 0.1);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .benefit-icon {
    width: 40px;
    height: 40px;
    stroke: var(--color-primary);
    stroke-width: 2;
    transition: stroke 0.3s ease;
    fill: none;
  }

  .benefit-item:hover .icon-wrapper {
    transform: scale(1.1) rotate(5deg);
    background: var(--color-primary);
  }

  .benefit-item:hover .benefit-icon {
    stroke: #ffffff;
  }

  .benefit-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  }

  .benefit-description {
    font-size: 1.05rem;
    line-height: 1.8;
    font-weight: 500;
    color: var(--text-main);
    opacity: 0.9;
  }

  .accent-line {
    width: 40px;
    height: 4px;
    background: var(--color-accent);
    margin-bottom: 1.5rem;
    border-radius: 2px;
    transition: width 0.4s ease, background 0.4s ease;
  }

  .benefit-item:hover .accent-line {
    width: 80px;
    background: var(--color-secondary);
  }

  @media (max-width: 640px) {
    .benefit-grid {
      gap: 4rem;
      padding: 3rem 1.5rem;
    }
  }
`;

class BenefitSections extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = CSS;

    const outer = document.createElement("div");
    outer.className = "outer";

    const grid = document.createElement("div");
    grid.className = "benefit-grid";

    BENEFITS.forEach(({ title, description, icon }) => {
      const item = document.createElement("div");
      item.className = "benefit-item";
      item.setAttribute("tabindex", "0");

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "icon-wrapper";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      // Parse the icon SVG string to extract inner paths and apply class
      const temp = document.createElement("div");
      temp.innerHTML = icon;
      const sourceSvg = temp.querySelector("svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
      svg.className = "benefit-icon";
      svg.innerHTML = sourceSvg.innerHTML;

      iconWrapper.appendChild(svg);

      const accentLine = document.createElement("div");
      accentLine.className = "accent-line";

      const titleEl = document.createElement("h3");
      titleEl.className = "benefit-title";
      titleEl.textContent = title;

      const descEl = document.createElement("p");
      descEl.className = "benefit-description";
      descEl.textContent = description;

      item.appendChild(iconWrapper);
      item.appendChild(accentLine);
      item.appendChild(titleEl);
      item.appendChild(descEl);
      grid.appendChild(item);
    });

    outer.appendChild(grid);
    shadow.appendChild(style);
    shadow.appendChild(outer);
  }
}

customElements.define("benefit-sections", BenefitSections);
