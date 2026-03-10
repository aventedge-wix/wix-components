const OUTCOMES = [
  {
    text: "The design labs are a cross-sector collaboration where delegates become active problem-solvers."
  },
  {
    text: "Over two days, you'll work alongside employers, universities, and policymakers to prototype practical solutions that strengthen graduate employability in an AI-transformed economy."
  },
  {
    text: "Define critical employability problems and map essential partner resources."
  },
  {
    text: "Design actionable interventions ready for real-world implementation."
  }
];

const IMAGE_SRC = "https://static.wixstatic.com/media/958742_cb4574a2f6ea46efbe356229a64b76b6~mv2.jpeg";
const IMAGE_ALT = "Summit delegates collaborating";
const HEADING = "More than just a summit";
const SUB_HEADING = "Design the next generation of graduates through hands-on labs.";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

  :host {
    display: block;
    --brand-navy: #162442;
    --brand-orange: #f98513;
    --brand-blue: #3d8bff;
    --paper-bg: #f4f1ec;
    --border-radius-main: 20px;
    --h-size: clamp(26px, 4vw, 33px);
    --sub-h-size: clamp(16px, 2vw, 18px);
    --content-size: clamp(15px, 1.8vw, 17px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .page-wrapper {
    font-family: 'Poppins', sans-serif;
    background-color: var(--paper-bg);
    color: var(--brand-navy);
    line-height: 1.6;
    padding: clamp(20px, 5vw, 60px) 20px;
    width: 100%;
  }

  .split-container {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    background-color: #ffffff;
    border-radius: var(--border-radius-main);
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    min-height: 580px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .text-pane {
    padding: clamp(40px, 6vw, 80px) clamp(30px, 5vw, 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-size: var(--h-size);
    font-weight: 700;
    color: var(--brand-navy);
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .sub-heading {
    font-size: var(--sub-h-size);
    font-weight: 700;
    color: var(--brand-navy);
    margin-bottom: 24px;
    line-height: 1.4;
  }

  .outcomes-list {
    list-style: none;
    margin-top: 10px;
  }

  .outcome-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 20px;
    font-size: var(--content-size);
    font-weight: 500;
    color: #333;
  }

  .check-icon {
    flex-shrink: 0;
    margin-top: 4px;
    width: 22px;
    height: 22px;
    background-color: var(--brand-orange);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check-icon svg {
    width: 14px;
    height: 14px;
    stroke: #fff;
    stroke-width: 4;
    fill: none;
  }

  .image-pane {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .image-pane::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1px;
    width: 120px;
    height: 100%;
    background: #ffffff;
    clip-path: polygon(0 0, 100% 0, 0% 100%);
    z-index: 2;
  }

  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1024px) {
    .split-container {
      grid-template-columns: 1fr;
      min-height: auto;
    }
    .image-pane {
      height: 450px;
      order: -1;
    }
    .image-pane::before {
      width: 100%;
      height: 60px;
      top: auto;
      bottom: -1px;
      left: 0;
      clip-path: polygon(0 100%, 100% 100%, 100% 0);
    }
  }

  @media (max-width: 640px) {
    .image-pane {
      height: 300px;
    }
    .text-pane {
      padding: 40px 25px;
    }
  }
`;

const CHECK_SVG = `
  <svg viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
`;

class SummitOutcomes extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = CSS;

    const wrapper = document.createElement("div");
    wrapper.className = "page-wrapper";

    const container = document.createElement("div");
    container.className = "split-container";

    // --- Text Pane ---
    const textPane = document.createElement("section");
    textPane.className = "text-pane";

    const heading = document.createElement("h2");
    heading.textContent = HEADING;

    const subHeading = document.createElement("p");
    subHeading.className = "sub-heading";
    subHeading.textContent = SUB_HEADING;

    const list = document.createElement("ul");
    list.className = "outcomes-list";

    OUTCOMES.forEach(({ text }) => {
      const item = document.createElement("li");
      item.className = "outcome-item";

      const icon = document.createElement("div");
      icon.className = "check-icon";
      icon.innerHTML = CHECK_SVG;

      const span = document.createElement("span");
      span.textContent = text;

      item.appendChild(icon);
      item.appendChild(span);
      list.appendChild(item);
    });

    textPane.appendChild(heading);
    textPane.appendChild(subHeading);
    textPane.appendChild(list);

    // --- Image Pane ---
    const imagePane = document.createElement("section");
    imagePane.className = "image-pane";

    const img = document.createElement("img");
    img.src = IMAGE_SRC;
    img.alt = IMAGE_ALT;
    img.className = "main-image";

    imagePane.appendChild(img);

    container.appendChild(textPane);
    container.appendChild(imagePane);
    wrapper.appendChild(container);

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define("summit-outcomes", SummitOutcomes);
