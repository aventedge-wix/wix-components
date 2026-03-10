const STEPS = [
  { title: "AI-Enabled Roles",         icon: "ai_roles",    desc: "Practical strategies for designing entry-level roles and graduate programs that thrive alongside AI." },
  { title: "Future-Ready Skills",       icon: "skills",      desc: "Clear understanding of the core skills, digital literacy, and AI fluency graduates need for future-ready careers." },
  { title: "Collaborative Design Labs", icon: "labs",        desc: "Hands-on experience in Design Labs, contributing to prototypes and solutions for employability, recruitment, and skills development." },
  { title: "Graduate Market Insights",  icon: "market",      desc: "Insights into current graduate readiness gaps, labour market trends, and how AI is reshaping early-career pathways." },
  { title: "Skills-Based Recruitment",  icon: "recruitment", desc: "Approaches to skills-based hiring, capability signalling, and fair, inclusive AI-enabled recruitment." },
  { title: "Cross-Industry Skills",     icon: "industry",    desc: "Methods to map, recognise, and deploy graduate skills across industries and roles to boost workforce mobility and impact." },
  { title: "Policy & Reform",           icon: "policy",      desc: "Awareness of national policy shifts, education reforms, and workforce initiatives affecting graduate employability." },
  { title: "Implementation Roadmaps",   icon: "roadmap",     desc: "Tangible frameworks and roadmaps for implementing scalable solutions within institutions, organisations, and programs." }
];

const ICONS = {
  ai_roles:    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 12c-11 0-20 9-20 20s9 20 20 20M32 12c11 0 20 9 20 20" stroke="#111144" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M44 24v16M48 28v8M40 28v8" stroke="#3d8bff" stroke-width="2.5" stroke-linecap="round"/><circle cx="32" cy="32" r="6" fill="#f98513"/></svg>`,
  skills:      `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="22" stroke="#111144" stroke-width="3" fill="none"/><path d="M32 18l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#f98513"/><path d="M32 10V6M32 58v-4M54 32h4M6 32h4" stroke="#3d8bff" stroke-width="2"/></svg>`,
  labs:        `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M18 20l14-8 14 8v16l-14 8-14-8V20z" stroke="#111144" stroke-width="3" fill="none"/><path d="M32 12v16M18 20l14 8M46 20l-14 8" stroke="#3d8bff" stroke-width="2"/><circle cx="32" cy="42" r="7" fill="#f98513"/></svg>`,
  market:      `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M44 44l12 12" stroke="#111144" stroke-width="5" stroke-linecap="round"/><circle cx="28" cy="28" r="20" stroke="#111144" stroke-width="3" fill="none"/><path d="M18 34l6-8 8 6 10-12" stroke="#f98513" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  recruitment: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="22" stroke="#111144" stroke-width="2" stroke-dasharray="4 4" fill="none"/><path d="M32 20a6 6 0 100 12 6 6 0 000-12zM20 44c0-6 6-8 12-8s12 2 12 8" stroke="#3d8bff" stroke-width="3" fill="none"/><path d="M32 6v6M32 52v6M58 32h-6M6 32h6" stroke="#f98513" stroke-width="3" stroke-linecap="round"/></svg>`,
  industry:    `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 10a22 22 0 11-15.5 37.5" stroke="#111144" stroke-width="3" fill="none"/><path d="M10 38l6.5 9.5L26 41" stroke="#f98513" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="24" y="24" width="16" height="16" rx="2" fill="#3d8bff"/></svg>`,
  policy:      `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M10 54h44M14 54V28M50 54V28M32 54V28" stroke="#111144" stroke-width="3" stroke-linecap="round"/><path d="M10 28l22-14 22 14H10z" fill="#f98513"/><path d="M14 22h36" stroke="#3d8bff" stroke-width="2"/></svg>`,
  roadmap:     `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M10 54h12V42h12V30h12V18h12" stroke="#111144" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M46 8l10 5-10 5V8z" fill="#f98513"/><circle cx="10" cy="54" r="4" fill="#3d8bff"/></svg>`
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .wrapper {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #111144;
    padding: 40px 0 30px;
    width: 100%;
  }

  .journey-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .journey-track {
    display: flex;
    align-items: stretch;
    transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .step-item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding-right: 24px;
    width: 380px;
  }

  .icon-wrap {
    width: 80px;
    height: 80px;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    box-shadow: 0 15px 30px rgba(17, 17, 68, 0.08);
    padding: 18px;
    border: 1px solid rgba(17, 17, 68, 0.05);
    transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
  }

  .icon-wrap svg { width: 100%; height: 100%; }

  .step-item:hover .icon-wrap {
    transform: translateY(-10px) scale(1.05);
    background: #111144;
    box-shadow: 0 20px 40px rgba(17, 17, 68, 0.2);
  }

  .card {
    background: transparent;
    padding: 10px 10px 20px 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-left: 3px solid rgba(17, 17, 68, 0.1);
    transition: transform 0.5s ease, border-color 0.5s ease;
  }

  .step-item:hover .card {
    border-left-color: #f98513;
    transform: translateX(10px);
  }

  .heading {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 12px;
    line-height: 1.2;
    color: #111144;
  }

  .description {
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    font-weight: 500;
  }

  .nav-controls {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 16px;
  }

  .nav-btn {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 2.5px solid #111144;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    color: #111144;
    -webkit-tap-highlight-color: transparent;
  }

  .nav-btn:hover:not([disabled]) { background: #111144; color: #fff; transform: scale(1.1); }
  .nav-btn[disabled] { opacity: 0.15; cursor: not-allowed; }

  .dot-indicator {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: rgba(17, 17, 68, 0.15);
    cursor: pointer;
    transition: width 0.4s ease, background 0.4s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .dot.active { width: 32px; background: #f98513; }

  @media (max-width: 768px) {
    .step-item { width: 85vw; }
    .heading { font-size: 19px; }
    .description { font-size: 14px; }
  }
`;

class GraduateJourney extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = css;

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    // Journey track
    const journeyContainer = document.createElement("div");
    journeyContainer.className = "journey-container";

    const track = document.createElement("div");
    track.className = "journey-track";

    STEPS.forEach((s) => {
      track.innerHTML += `
        <div class="step-item">
          <div class="icon-wrap">${ICONS[s.icon]}</div>
          <div class="card">
            <h3 class="heading">${s.title}</h3>
            <p class="description">${s.desc}</p>
          </div>
        </div>`;
    });

    journeyContainer.appendChild(track);

    // Nav controls
    const nav = document.createElement("div");
    nav.className = "nav-controls";
    nav.innerHTML = `
      <button class="nav-btn" id="prevBtn" aria-label="Previous">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="3" fill="none"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <div class="dot-indicator" id="dots"></div>
      <button class="nav-btn" id="nextBtn" aria-label="Next">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="3" fill="none"><path d="M9 18l6-6-6-6"/></svg>
      </button>`;

    wrapper.appendChild(journeyContainer);
    wrapper.appendChild(nav);
    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    // Dots
    const dotsContainer = shadow.getElementById("dots");
    const prevBtn = shadow.getElementById("prevBtn");
    const nextBtn = shadow.getElementById("nextBtn");
    let currentIndex = 0;

    const dots = STEPS.map((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
      return dot;
    });

    function updateSlider() {
      const containerW = journeyContainer.offsetWidth;
      const cardW = Math.min(Math.max(containerW * 0.85, 280), 450);
      const fullW = cardW + 24;
      const leadPad = containerW * 0.05;

      track.querySelectorAll(".step-item").forEach(el => {
        el.style.width = cardW + "px";
      });

      track.style.transform = `translateX(${leadPad - currentIndex * fullW}px)`;
      dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === STEPS.length - 1;
    }

    function goToSlide(i) { currentIndex = i; updateSlider(); }

    nextBtn.addEventListener("click", () => { if (currentIndex < STEPS.length - 1) { currentIndex++; updateSlider(); } });
    prevBtn.addEventListener("click", () => { if (currentIndex > 0) { currentIndex--; updateSlider(); } });

    new ResizeObserver(() => updateSlider()).observe(journeyContainer);
    requestAnimationFrame(() => updateSlider());
  }
}

customElements.define("graduate-journey", GraduateJourney);
