(function(){

const ICONS = {
ai_roles: `
<svg viewBox="0 0 64 64">
<circle cx="32" cy="32" r="20" stroke="#111144" stroke-width="3" fill="none"/>
<circle cx="32" cy="32" r="6" fill="#f98513"/>
</svg>`,

skills: `
<svg viewBox="0 0 64 64">
<circle cx="32" cy="32" r="22" stroke="#111144" stroke-width="3" fill="none"/>
<path d="M32 18l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#f98513"/>
</svg>`,

labs: `
<svg viewBox="0 0 64 64">
<rect x="16" y="20" width="32" height="24" stroke="#111144" stroke-width="3" fill="none"/>
<circle cx="32" cy="42" r="6" fill="#f98513"/>
</svg>`,

market: `
<svg viewBox="0 0 64 64">
<circle cx="28" cy="28" r="20" stroke="#111144" stroke-width="3" fill="none"/>
<path d="M18 34l6-8 8 6 10-12" stroke="#f98513" stroke-width="3" fill="none"/>
</svg>`,

recruitment: `
<svg viewBox="0 0 64 64">
<circle cx="32" cy="24" r="8" stroke="#3d8bff" stroke-width="3" fill="none"/>
<path d="M16 48c0-8 8-10 16-10s16 2 16 10" stroke="#111144" stroke-width="3" fill="none"/>
</svg>`,

industry: `
<svg viewBox="0 0 64 64">
<rect x="24" y="24" width="16" height="16" fill="#3d8bff"/>
<path d="M10 38l6.5 9.5L26 41" stroke="#f98513" stroke-width="3" fill="none"/>
</svg>`,

policy: `
<svg viewBox="0 0 64 64">
<path d="M10 54h44M14 54V28M50 54V28M32 54V28" stroke="#111144" stroke-width="3"/>
<path d="M10 28l22-14 22 14H10z" fill="#f98513"/>
</svg>`,

roadmap: `
<svg viewBox="0 0 64 64">
<path d="M10 54h12V42h12V30h12V18h12" stroke="#111144" stroke-width="3" fill="none"/>
<circle cx="10" cy="54" r="4" fill="#3d8bff"/>
</svg>`
};

const STEPS = [
{title:"AI-Enabled Roles",icon:ICONS.ai_roles,desc:"Strategies for designing graduate roles that work alongside AI."},
{title:"Future-Ready Skills",icon:ICONS.skills,desc:"Core digital and AI literacy skills graduates need."},
{title:"Collaborative Design Labs",icon:ICONS.labs,desc:"Hands-on labs creating solutions for employability."},
{title:"Graduate Market Insights",icon:ICONS.market,desc:"Understanding labour market changes and AI impact."},
{title:"Skills-Based Recruitment",icon:ICONS.recruitment,desc:"Fair and inclusive AI-enabled hiring practices."},
{title:"Cross-Industry Skills",icon:ICONS.industry,desc:"Using graduate skills across multiple industries."},
{title:"Policy & Reform",icon:ICONS.policy,desc:"Education and workforce policy shifts."},
{title:"Implementation Roadmaps",icon:ICONS.roadmap,desc:"Frameworks to implement scalable solutions."}
];

const CSS = `
.wrapper{
font-family:sans-serif;
padding:40px 0;
overflow-x:hidden;
width:100%;
}

.track{
display:flex;
transition:transform .6s ease;
padding-left:10%;
}

.item{
width:320px;
margin-right:40px;
flex-shrink:0;
}

.icon{
width:80px;
height:80px;
background:#fff;
border-radius:20px;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.1);
}

.card{
border-left:3px solid #ddd;
padding-left:20px;
}

.title{
font-size:20px;
font-weight:700;
margin-bottom:8px;
color:#111144;
}

.desc{
font-size:15px;
line-height:1.6;
}

.controls{
margin-top:40px;
display:flex;
gap:20px;
justify-content:center;
}

button{
width:50px;
height:50px;
border-radius:50%;
border:2px solid #111144;
background:#fff;
cursor:pointer;
}
`;

class GraduateJourney extends HTMLElement{

connectedCallback(){

const shadow=this.attachShadow({mode:"open"});

const style=document.createElement("style");
style.textContent=CSS;

const wrapper=document.createElement("div");
wrapper.className="wrapper";

const track=document.createElement("div");
track.className="track";

STEPS.forEach(step=>{

const item=document.createElement("div");
item.className="item";

const icon=document.createElement("div");
icon.className="icon";
icon.innerHTML=step.icon;

const card=document.createElement("div");
card.className="card";

const title=document.createElement("div");
title.className="title";
title.textContent=step.title;

const desc=document.createElement("div");
desc.className="desc";
desc.textContent=step.desc;

card.appendChild(title);
card.appendChild(desc);

item.appendChild(icon);
item.appendChild(card);

track.appendChild(item);

});

const controls=document.createElement("div");
controls.className="controls";

const prev=document.createElement("button");
prev.textContent="‹";

const next=document.createElement("button");
next.textContent="›";

controls.appendChild(prev);
controls.appendChild(next);

wrapper.appendChild(track);
wrapper.appendChild(controls);

shadow.appendChild(style);
shadow.appendChild(wrapper);

let index=0;

function update(){

const item=track.querySelector(".item");
if(!item) return;

const width=item.offsetWidth+40;

track.style.transform=`translateX(${-(index*width)+120}px)`;

}

next.onclick=()=>{
if(index<STEPS.length-1){
index++;
update();
}
};

prev.onclick=()=>{
if(index>0){
index--;
update();
}
};

window.addEventListener("resize", update);

/* FIX FOR WIX RENDER TIMING */
window.addEventListener("load", () => {
setTimeout(update, 400);
});

}

}

if(!customElements.get("graduate-journey")){
customElements.define("graduate-journey",GraduateJourney);
}

})();
