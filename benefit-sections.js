var benefits = [
  {
    title: "Universities & Tertiary",
    description: "Leaders accountable for curriculum reform, graduate employment outcomes, and institutional performance metrics in an evolving landscape.",
    iconPaths: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'
  },
  {
    title: "Private Sector",
    description: "Chief People Officers designing graduate programs, strengthening long-term retention, and planning for organizational capability.",
    iconPaths: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  },
  {
    title: "Public Sector",
    description: "Policy and workforce leaders overseeing education reform, labour market strategy, and nationwide AI-ready initiatives.",
    iconPaths: '<path d="M3 21h18"/><path d="M3 7l9-4 9 4"/><path d="M5 21V7"/><path d="M19 21V7"/>'
  }
];

var css = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');"
  + "* { box-sizing: border-box; margin: 0; padding: 0; }"
  + ".benefit-grid {"
  + "  display: grid;"
  + "  grid-template-columns: repeat(3, 1fr);"
  + "  gap: 3rem;"
  + "  padding: 4rem 2rem;"
  + "  max-width: 1400px;"
  + "  margin: 0 auto;"
  + "  font-family: 'Poppins', sans-serif;"
  + "}"
  + ".benefit-item {"
  + "  display: flex;"
  + "  flex-direction: column;"
  + "  align-items: flex-start;"
  + "  padding: 1rem;"
  + "  border-radius: 20px;"
  + "  background: transparent;"
  + "  transition: background 0.4s ease;"
  + "}"
  + ".benefit-item:hover {"
  + "  background: rgba(255, 255, 255, 0.2);"
  + "}"
  + ".icon-wrapper {"
  + "  width: 80px;"
  + "  height: 80px;"
  + "  display: flex;"
  + "  align-items: center;"
  + "  justify-content: center;"
  + "  margin-bottom: 2rem;"
  + "  border-radius: 20px;"
  + "  background: #ffffff;"
  + "  box-shadow: 0 10px 15px -3px rgba(17, 17, 68, 0.1);"
  + "  transition: background 0.5s ease, transform 0.5s ease;"
  + "  flex-shrink: 0;"
  + "}"
  + ".icon-wrapper svg {"
  + "  width: 40px;"
  + "  height: 40px;"
  + "  stroke: #111144;"
  + "  stroke-width: 2;"
  + "  fill: none;"
  + "  stroke-linecap: round;"
  + "  stroke-linejoin: round;"
  + "  transition: stroke 0.3s ease;"
  + "}"
  + ".benefit-item:hover .icon-wrapper {"
  + "  transform: scale(1.1) rotate(5deg);"
  + "  background: #111144;"
  + "}"
  + ".benefit-item:hover .icon-wrapper svg {"
  + "  stroke: #ffffff;"
  + "}"
  + ".accent-line {"
  + "  width: 40px;"
  + "  height: 4px;"
  + "  background: #f59e0b;"
  + "  margin-bottom: 1.5rem;"
  + "  border-radius: 2px;"
  + "  transition: width 0.4s ease, background 0.4s ease;"
  + "}"
  + ".benefit-item:hover .accent-line {"
  + "  width: 80px;"
  + "  background: #3b82f6;"
  + "}"
  + ".benefit-title {"
  + "  font-size: 1.5rem;"
  + "  font-weight: 700;"
  + "  color: #111144;"
  + "  margin-bottom: 1rem;"
  + "  letter-spacing: -0.02em;"
  + "  line-height: 1.3;"
  + "  text-shadow: 0 1px 2px rgba(255,255,255,0.5);"
  + "}"
  + ".benefit-description {"
  + "  font-size: 1.05rem;"
  + "  line-height: 1.8;"
  + "  font-weight: 500;"
  + "  color: #000000;"
  + "}"
  + "@media (max-width: 1024px) {"
  + "  .benefit-grid { grid-template-columns: repeat(2, 1fr); }"
  + "}"
  + "@media (max-width: 640px) {"
  + "  .benefit-grid { grid-template-columns: 1fr; gap: 2.5rem; padding: 2rem 1.25rem; }"
  + "  .benefit-title { font-size: 1.25rem; }"
  + "  .benefit-description { font-size: 0.95rem; }"
  + "}";

class BenefitSections extends HTMLElement {
  connectedCallback() {
    var shadow = this.attachShadow({ mode: "open" });

    var style = document.createElement("style");
    style.textContent = css;

    var container = document.createElement("div");
    container.className = "benefit-grid";

    benefits.forEach(function(b) {
      container.innerHTML += ""
        + "<div class='benefit-item' tabindex='0'>"
        +   "<div class='icon-wrapper'>"
        +     "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>"
        +       b.iconPaths
        +     "</svg>"
        +   "</div>"
        +   "<div class='accent-line'></div>"
        +   "<h3 class='benefit-title'>" + b.title + "</h3>"
        +   "<p class='benefit-description'>" + b.description + "</p>"
        + "</div>";
    });

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define("benefit-sections", BenefitSections);
