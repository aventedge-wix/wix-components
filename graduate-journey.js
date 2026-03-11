(function () {

const GRADUATE_ICONS = {
ai_roles: `<svg viewBox="0 0 64 64">
<circle cx="32" cy="32" r="20" stroke="#111144" stroke-width="3" fill="none"/>
<circle cx="32" cy="32" r="6" fill="#f98513"/>
</svg>`,

skills: `<svg viewBox="0 0 64 64">
<circle cx="32" cy="32" r="22" stroke="#111144" stroke-width="3" fill="none"/>
<path d="M32 18l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#f98513"/>
</svg>`,

labs: `<svg viewBox="0 0 64 64">
<rect x="16" y="20" width="32" height="24" stroke="#111144" stroke-width="3" fill="none"/>
<circle cx="32" cy="42" r="6" fill="#f98513"/>
</svg>`,

market: `<svg viewBox="0 0 64 64">
<circle cx="28" cy="28" r="20" stroke="#111144" stroke-width="3" fill="none"/>
<path d="M18 34l6-8 8 6 10-12" stroke="#f98513" stroke-width="3" fill="none"/>
</svg>`,

recruitment: `<svg viewBox="0 0 64 64">
<circle cx="32" cy="24" r="8" stroke="#3d8bff" stroke-width="3" fill="none"/>
<path d="M16 48c0-8 8-10 16-10s16 2 16 10" stroke="#111144" stroke-width="3" fill="none"/>
</svg>`,

industry: `<svg viewBox="0 0 64 64">
<rect x="24" y="24" width="16" height="16" fill="#3d8bff"/>
<path d="M10 38l6.5 9.5L26 41" stroke="#f98513" stroke-width="3" fill="none"/>
</svg>`,

policy: `<svg viewBox="0 0 64 64">
<path d="M10 54h44M14 54V28M50 54V28M32 54V28" stroke="#111144" stroke-width="3"/>
<path d="M10 28l22-14 22 14H10z" fill="#f98513"/>
</svg>`,

roadmap: `<svg viewBox="0 0 64 64">
<path d="M10 54h12V42h12V30h12V18h12" stroke="#111144" stroke-width="3" fill="none"/>
<circle cx="10" cy="54" r="4" fill="#3d8bff"/>
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
