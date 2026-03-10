const ICONS = {
  ai_roles: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="main-stroke" d="M32 12c-11 0-20 9-20 20s9 20 20 20M32 12c11 0 20 9 20 20" stroke="#111144" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M44 24v16M48 28v8M40 28v8" stroke="#3d8bff" stroke-width="2.5" stroke-linecap="round"/>
      <circle class="accent-fill" cx="32" cy="32" r="6" fill="#f98513"/>
    </svg>`,

  skills: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle class="main-stroke" cx="32" cy="32" r="22" stroke="#111144" stroke-width="3" fill="none"/>
      <path d="M32 18l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#f98513" class="accent-fill"/>
      <path d="M32 10V6M32 58v-4M54 32h4M6 32h4" stroke="#3d8bff" stroke-width="2"/>
    </svg>`,

  labs: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="main-stroke" d="M18 20l14-8 14 8v16l-14 8-14-8V20z" stroke="#111144" stroke-width="3" fill="none"/>
      <path d="M32 12v16M18 20l14 8M46 20l-14 8" stroke="#3d8bff" stroke-width="2"/>
      <circle class="accent-fill" cx="32" cy="42" r="7" fill="#f98513"/>
    </svg>`,

  market: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="main-stroke" d="M44 44l12 12" stroke="#111144" stroke-width="5" stroke-linecap="round"/>
      <circle class="main-stroke" cx="28" cy="28" r="20" stroke="#111144" stroke-width="3" fill="none"/>
      <path d="M18 34l6-8 8 6 10-12" stroke="#f98513" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  recruitment: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle class="main-stroke" cx="32" cy="32" r="22" stroke="#111144" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
      <path d="M32 20a6 6 0 100 12 6 6 0 000-12zM20 44c0-6 6-8 12-8s12 2 12 8" stroke="#3d8bff" stroke-width="3" fill="none"/>
      <path d="M32 6v6M32 52v6M58 32h-6M6 32h6" stroke="#f98513" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

  industry: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="main-stroke" d="M32 10a22 22 0 11-15.5 37.5" stroke="#111144" stroke-width="3" fill="none"/>
      <path d="M10 38l6.5 9.5L26 41" stroke="#f98513" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="24" y="24" width="16" height="16" rx="2" fill="#3d8bff"/>
    </svg>`,

  policy: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="main-stroke" d="M10 54h44M14 54V28M50 54V28M32 54V28" stroke="#111144" stroke-width="3" stroke-linecap="round"/>
      <path d="M10 28l22-14 22 14H10z" fill="#f98513" class="accent-fill"/>
      <path d="M14 22h36" stroke="#3d8bff" stroke-width="2"/>
    </svg>`,

  roadmap: `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path class="main-stroke" d="M10 54h12V42h12V30h12V18h12" stroke="#111144" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M46 8l10 5-10 5V8z" fill="#f98513" class="accent-fill"/>
      <circle cx="10" cy="54" r="4" fill="#3d8bff"/>
    </svg>`
};

const STEPS = [
  { title: "AI-Enabled Roles",           icon: ICONS.ai_roles,    desc: "Practical strategies for designing entry-level roles and graduate programs that thrive alongside AI." },
  { title: "Future-Ready Skills",         icon: ICONS.skills,      desc: "Clear understanding of the core skills, digital literacy, and AI fluency graduates need for future-ready careers." },
  { title: "Collaborative Design Labs",   icon: ICONS.labs,        desc: "Hands-on experience in Design Labs, contributing to prototypes and solutions for employability, recruitment, and skills development." },
  { title: "Graduate Market Insights",    icon: ICONS.market,      desc: "Insights into current graduate readiness gaps, labour market trends, and how AI is reshaping early-career pathways." },
  { title: "Skills-Based Recruitment",    icon: ICONS.recruitment, desc: "Approaches to skills-based hiring, capability signalling, and fair, inclusive AI-enabled recruitment." },
  { title: "Cross-Industry Skills",       icon: ICONS.industry,    desc: "Methods to map, recognise, and deploy graduate skills across industries and roles to boost workforce mobility and impact." },
  { title: "Policy & Reform",             icon: ICONS.policy,      desc: "Awareness of national policy shifts, education reforms, and workforce initiatives affecting graduate employability." },
  { title: "Implementation Roadmaps",     icon: ICONS.roadmap,     desc: "Tangible frameworks and roadmaps for implementing scalable solutions within institutions, organisations, and programs." }
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

  :host {
    display: block;
    --brand-navy: #111144;
    --brand-orange: #f98513;
    --brand-blue: #3d8bff;
    --card-width: clamp(300px, 30vw, 450px);
    --card-gap: clamp(20px, 4vw, 50px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .wrapper {
    width: 100%;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--brand-navy);
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 40px 0;
    overflow-x: hidden;
  }

  .journey-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px 0;
  }

  .journey-track {
    display: flex;
    align-items: stretch;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    padding-left: 10%;
  }

  .step-item {
    width: var(--card-width);
    margin-right: var(--card-gap);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    transition: opacity 0.5s ease;
  }

  .icon-wrap {
    width: 90px;
    height: 90px;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    box-shadow: 0 15px 30px rgba(17, 17, 68, 0.08);
    z-index: 10;
    padding: 18px;
    border: 1px solid rgba(17, 17, 68, 0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .icon-wrap svg {
    width: 100%;
    height: 100%;
  }

  .card {
    background: transparent;
    padding: 10px 10px 20px 25px;
    transition: all 0.5s ease;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-left: 3px solid rgba(17, 17, 68, 0.1);
  }

  .step-item:hover .card {
    border-left: 3px solid var(--brand-orange);
    transform: translateX(10px);
  }

  .step-item:hover .icon-wrap {
    transform: translateY(-10px) scale(1.05);
    background: var(--brand-navy);
    box-shadow: 0 20px 40px rgba(17, 17, 68, 0.2);
  }

  .step-item:hover .icon-wrap svg .main-stroke { stroke: #ffffff; }
  .step-item:hover .icon-wrap svg .accent-fill { fill: #ffffff; }

  .heading {
    font-size: clamp(1.4rem, 2vw, 1.75rem);
    font-weight: 800;
    margin-bottom: 12px;
    line-height: 1.2;
    color: var(--brand-navy);
    text-shadow: 0 1px 2px rgba(255,255,255,0.8);
  }

  .description {
    font-size: clamp(1rem, 1.1vw, 1.15rem);
    line-height: 1.6;
    color: #333;
    font-weight: 500;
  }

  .nav-controls {
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .nav-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2.5px solid var(--brand-navy);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--brand-navy);
  }

  .nav-btn:hover:not(:disabled) {
    background: var(--brand-navy);
    color: #fff;
    transform: scale(1.1);
  }

  .nav-btn:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }

  .dot-indicator {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: rgba(17, 17, 68, 0.15);
    cursor: pointer;
    transition: width 0.4s, background 0.4s;
  }

  .dot.active {
    width: 40px;
    background: var(--brand-orange);
  }

  @media (max-width: 768px) {
    .journey-track { padding-left: 5%; }
    .step-item { width: 85vw; }
    .card { border-left-width: 4px; }
  }
`;

class GraduateJourney extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = CSS;

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    // Journey container + track
    const journeyContainer = document.createElement("div");
    journeyContainer.className = "journey-container";

    const track = document.createElement("div");
    track.className = "journey-track";

    STEPS.forEach(({ title, icon, desc }) => {
      const item = document.createElement("div");
      item.className = "step-item";

      const iconWrap = document.createElement("div");
      iconWrap.className = "icon-wrap";
      iconWrap.innerHTML = icon;

      const card = document.createElement("div");
      card.className = "card";

      const heading = document.createElement("h3");
      heading.className = "heading";
      heading.textContent = title;

      const description = document.createElement("p");
      description.className = "description";
      description.textContent = desc;

      card.appendChild(heading);
      card.appendChild(description);
      item.appendChild(iconWrap);
      item.appendChild(card);
      track.appendChild(item);
    });

    journeyContainer.appendChild(track);

    // Nav controls
    const navControls = document.createElement("div");
    navControls.className = "nav-controls";

    const prevBtn = document.createElement("button");
    prevBtn.className = "nav-btn";
    prevBtn.setAttribute("aria-label", "Previous");
    prevBtn.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="3" fill="none"><path d="M15 18l-6-6 6-6"/></svg>`;

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dot-indicator";

    const nextBtn = document.createElement("button");
    nextBtn.className = "nav-btn";
    nextBtn.setAttribute("aria-label", "Next");
    nextBtn.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="3" fill="none"><path d="M9 18l6-6-6-6"/></svg>`;

    // Dots
    const dots = STEPS.map((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
      return dot;
    });

    navControls.appendChild(prevBtn);
    navControls.appendChild(dotsContainer);
    navControls.appendChild(nextBtn);

    wrapper.appendChild(journeyContainer);
    wrapper.appendChild(navControls);

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    // Slider logic
    let currentIndex = 0;

    function updateSlider() {
      const firstItem = track.querySelector(".step-item");
      if (!firstItem) return;
      const cardFullWidth = firstItem.offsetWidth + parseInt(getComputedStyle(firstItem).marginRight);
      const containerWidth = journeyContainer.offsetWidth;
      const initialPadding = containerWidth * 0.1;
      track.style.transform = `translateX(${initialPadding - currentIndex * cardFullWidth}px)`;

      dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === STEPS.length - 1;
    }

    function goToSlide(i) {
      currentIndex = i;
      updateSlider();
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < STEPS.length - 1) { currentIndex++; updateSlider(); }
    });
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) { currentIndex--; updateSlider(); }
    });

    window.addEventListener("resize", updateSlider);

    // Wait for fonts/layout before initial position
    requestAnimationFrame(() => updateSlider());
  }
}

customElements.define("graduate-journey", GraduateJourney);
