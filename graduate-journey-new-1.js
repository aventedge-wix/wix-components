(function () {

const GRADUATE_ICONS = {

  /* AI-Enabled Roles: robot/AI chip with human silhouette — AI + human working together */
  ai_roles: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="14" width="28" height="26" rx="4" stroke="#111144" stroke-width="3" fill="none"/>
    <path d="M26 14v-4M38 14v-4" stroke="#111144" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="26" cy="26" r="3" fill="#f98513"/>
    <circle cx="38" cy="26" r="3" fill="#f98513"/>
    <path d="M27 34s2 3 5 3 5-3 5-3" stroke="#111144" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M14 28v8M50 28v8" stroke="#111144" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M22 40l-4 10h28l-4-10" stroke="#111144" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  /* Future-Ready Skills: graduation cap with lightning bolt — education meets modern readiness */
  skills: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 26l20-10 20 10-20 10z" stroke="#111144" stroke-width="3" stroke-linejoin="round" fill="none"/>
    <path d="M22 31v12c0 0 4 5 10 5s10-5 10-5V31" stroke="#111144" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M52 26v10" stroke="#111144" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M36 18l-4 8h6l-4 8" stroke="#f98513" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  /* Collaborative Design Labs: two hands shaking / interlocking gears — building together */
  labs: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="28" r="10" stroke="#111144" stroke-width="3" fill="none"/>
    <circle cx="40" cy="28" r="10" stroke="#f98513" stroke-width="3" fill="none"/>
    <path d="M24 18v-6M24 44v-6M14 28H8M40 28h-6" stroke="#111144" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 18v-6M50 28h6M40 44v-6" stroke="#f98513" stroke-width="2" stroke-linecap="round"/>
    <circle cx="24" cy="28" r="3" fill="#111144"/>
    <circle cx="40" cy="28" r="3" fill="#f98513"/>
  </svg>`,

  /* Graduate Market Insights: magnifying glass over bar chart — researching market data */
  market: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 44l12 12" stroke="#111144" stroke-width="4" stroke-linecap="round"/>
    <circle cx="28" cy="28" r="18" stroke="#111144" stroke-width="3" fill="none"/>
    <rect x="18" y="32" width="5" height="8" fill="#f98513"/>
    <rect x="26" y="24" width="5" height="16" fill="#111144"/>
    <rect x="34" y="28" width="5" height="12" fill="#3d8bff"/>
  </svg>`,

  /* Skills-Based Recruitment: person with checkmark/target — precision hiring */
  recruitment: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="20" r="8" stroke="#111144" stroke-width="3" fill="none"/>
    <path d="M12 52c0-10 7-14 16-14s16 4 16 14" stroke="#111144" stroke-width="3" stroke-linecap="round" fill="none"/>
    <circle cx="46" cy="30" r="10" stroke="#3d8bff" stroke-width="2.5" fill="none"/>
    <path d="M42 30l3 3 5-5" stroke="#f98513" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  /* Cross-Industry Skills: arrows pointing in multiple directions — mobility across sectors */
  industry: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="6" fill="#111144"/>
    <path d="M32 26V12M32 38v14" stroke="#111144" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M26 32H12M38 32h14" stroke="#111144" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M29 15l3-5 3 5M29 49l3 5 3-5" stroke="#111144" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M15 29l-5 3 5 3M49 29l5 3-5 3" stroke="#f98513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  /* Policy & Reform: government building / pillar with document — official authority */
  policy: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 28l22-14 22 14H10z" fill="#f98513"/>
    <path d="M10 54h44" stroke="#111144" stroke-width="3" stroke-linecap="round"/>
    <path d="M16 54V28M32 54V28M48 54V28" stroke="#111144" stroke-width="3" stroke-linecap="round"/>
    <rect x="26" y="34" width="12" height="10" rx="1" stroke="#111144" stroke-width="2" fill="white"/>
    <path d="M29 38h6M29 41h4" stroke="#111144" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  /* Implementation Roadmaps: road/path with milestones and flag at end */
  roadmap: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 52h12V40h12V28h12V16" stroke="#111144" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M46 16h12v8H46z" fill="#f98513"/>
    <path d="M46 20h12" stroke="#f98513" stroke-width="1"/>
    <circle cx="10" cy="52" r="4" fill="#3d8bff"/>
    <circle cx="22" cy="40" r="3" fill="#111144"/>
    <circle cx="34" cy="28" r="3" fill="#111144"/>
    <circle cx="46" cy="16" r="3" fill="#111144"/>
  </svg>`

};

const GRADUATE_STEPS = [
{title:"AI-Enabled Roles",icon:GRADUATE_ICONS.ai_roles,desc:"Strategies for designing graduate roles that work alongside AI."},
{title:"Future-Ready Skills",icon:GRADUATE_ICONS.skills,desc:"Core digital and AI literacy skills graduates need."},
{title:"Collaborative Design Labs",icon:GRADUATE_ICONS.labs,desc:"Hands-on labs creating solutions for employability."},
{title:"Graduate Market Insights",icon:GRADUATE_ICONS.market,desc:"Understanding labour market changes and AI impact."},
{title:"Skills-Based Recruitment",icon:GRADUATE_ICONS.recruitment,desc:"Fair and inclusive AI-enabled hiring practices."},
{title:"Cross-Industry Skills",icon:GRADUATE_ICONS.industry,desc:"Using graduate skills across multiple industries."},
{title:"Policy & Reform",icon:GRADUATE_ICONS.policy,desc:"Education and workforce policy shifts."},
{title:"Implementation Roadmaps",icon:GRADUATE_ICONS.roadmap,desc:"Frameworks to implement scalable solutions."}
];

const GRADUATE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.wrapper {
  font-family: 'Poppins', sans-serif;
  padding: 40px 0;
  overflow-x: hidden;
  width: 100%;
}

.track {
  display: flex;
  transition: transform .6s ease;
  padding-left: 20px;
}

.item {
  width: 320px;
  margin-right: 40px;
  flex-shrink: 0;
  transition: opacity 0.5s ease;
}

.icon {
  width: 64px;
  height: 64px;
  background: #ffffff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 10px 24px rgba(17, 17, 68, 0.08);
  padding: 14px;
  border: 1px solid rgba(17, 17, 68, 0.05);
  transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
}

.icon svg {
  width: 100%;
  height: 100%;
}

.item:hover .icon {
  transform: translateY(-8px) scale(1.05);
  background: #111144;
  box-shadow: 0 16px 36px rgba(17, 17, 68, 0.2);
}

.card {
  border-left: 3px solid rgba(17, 17, 68, 0.1);
  padding-left: 20px;
  transition: border-color 0.5s ease, transform 0.5s ease;
}

.item:hover .card {
  border-left-color: #f98513;
  transform: translateX(8px);
}

.title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111144;
  line-height: 1.2;
}

.desc {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  color: #000000;
}

.controls {
  margin-top: 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.dots {
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
  transition: width 0.4s ease, background 0.4s ease;
  border: none;
  padding: 0;
}

.dot.active {
  width: 40px;
  background: #f98513;
}

button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2.5px solid #111144;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
  color: #111144;
}

button:hover {
  background: #111144;
  color: #ffffff;
  transform: scale(1.1);
}

button:disabled {
  opacity: 0.15;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .track { padding-left: 16px; }
  .item { width: 85vw; }
  .title { font-size: 20px; }
  .desc { font-size: 16px; }
}
`;

class GraduateJourney extends HTMLElement {

connectedCallback(){

const shadow = this.attachShadow({mode:"open"});

const style = document.createElement("style");
style.textContent = GRADUATE_CSS;

const wrapper = document.createElement("div");
wrapper.className = "wrapper";

const track = document.createElement("div");
track.className = "track";

GRADUATE_STEPS.forEach(step => {

const item = document.createElement("div");
item.className = "item";

const icon = document.createElement("div");
icon.className = "icon";
icon.innerHTML = step.icon;

const card = document.createElement("div");
card.className = "card";

const title = document.createElement("div");
title.className = "title";
title.textContent = step.title;

const desc = document.createElement("div");
desc.className = "desc";
desc.textContent = step.desc;

card.appendChild(title);
card.appendChild(desc);

item.appendChild(icon);
item.appendChild(card);

track.appendChild(item);

});

const controls = document.createElement("div");
controls.className = "controls";

const prev = document.createElement("button");
prev.textContent = "‹";

const dotsEl = document.createElement("div");
dotsEl.className = "dots";

const next = document.createElement("button");
next.textContent = "›";

const dots = GRADUATE_STEPS.map((_, i) => {
  const dot = document.createElement("div");
  dot.className = i === 0 ? "dot active" : "dot";
  dotsEl.appendChild(dot);
  return dot;
});

controls.appendChild(prev);
controls.appendChild(dotsEl);
controls.appendChild(next);

wrapper.appendChild(track);
wrapper.appendChild(controls);

shadow.appendChild(style);
shadow.appendChild(wrapper);

let index = 0;

function update(){
  const item = track.querySelector(".item");
  if(!item) return;
  const width = item.offsetWidth + 40;
  track.style.transform = `translateX(${-(index * width)}px)`;
  dots.forEach((d, i) => {
    d.className = i === index ? "dot active" : "dot";
  });
  prev.disabled = index === 0;
  next.disabled = index === GRADUATE_STEPS.length - 1;
}

next.onclick = () => {
if(index < GRADUATE_STEPS.length - 1){
index++;
update();
}
};

prev.onclick = () => {
if(index > 0){
index--;
update();
}
};

window.addEventListener("resize", update);

window.addEventListener("load", () => {
setTimeout(update, 400);
});

}

}

if(!customElements.get("graduate-journey")){
customElements.define("graduate-journey", GraduateJourney);
}

})();
