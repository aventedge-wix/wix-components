const benefits = [
{
iconPaths:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
title:"Universities & Tertiary",
description:"Leaders accountable for curriculum reform, graduate employment outcomes, and institutional performance metrics in an evolving landscape."
},
{
iconPaths:'<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
title:"Private Sector",
description:"Chief People Officers designing graduate programs, strengthening long-term retention, and planning for organizational capability."
},
{
iconPaths:'<path d="M3 21h18"/><path d="M3 7l9-4 9 4"/><path d="M5 21V7"/><path d="M19 21V7"/>',
title:"Public Sector",
description:"Policy and workforce leaders overseeing education reform, labour market strategy, and nationwide AI-ready initiatives."
}
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

:host{
display:block;
width:100%;
font-family:'Poppins',sans-serif;
}

:root{
--primary-blue:#3d8bff;
--primary-orange:#f98513;
--brand-navy:#111144;
--text-gray:#000000;
}

*{
box-sizing:border-box;
margin:0;
padding:0;
}

.wrapper{
padding:40px 20px;
width:100%;
overflow:hidden;
}

.benefit-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:40px;
max-width:1200px;
margin:0 auto;
width:100%;
}

.benefit-item{
display:flex;
flex-direction:column;
align-items:flex-start;
padding:28px;
border-radius:20px;
background:rgba(255,255,255,0.88);
box-shadow:0 8px 32px rgba(17,17,68,0.12);
border:1px solid rgba(255,255,255,0.95);
transition:transform .3s ease, box-shadow .3s ease;
}

.benefit-item:hover{
transform:translateY(-6px);
box-shadow:0 20px 48px rgba(17,17,68,0.18);
}

.icon-wrapper{
width:72px;
height:72px;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:20px;
border-radius:18px;
background:#eef2ff;
transition:background .4s ease, transform .4s ease;
}

.icon-wrapper svg{
width:36px;
height:36px;
stroke:var(--brand-navy);
stroke-width:2;
fill:none;
stroke-linecap:round;
stroke-linejoin:round;
transition:stroke .3s ease;
}

.benefit-item:hover .icon-wrapper{
background:var(--brand-navy);
transform:scale(1.1) rotate(5deg);
}

.benefit-item:hover .icon-wrapper svg{
stroke:#fff;
}

.accent-line{
width:40px;
height:4px;
background:var(--primary-orange);
margin-bottom:16px;
border-radius:2px;
transition:width .4s ease, background .4s ease;
}

.benefit-item:hover .accent-line{
width:72px;
background:var(--primary-blue);
}

.benefit-title{
font-size:22px;
font-weight:700;
color:var(--brand-navy);
margin-bottom:12px;
line-height:1.3;
}

.benefit-description{
font-size:15px;
font-weight:500;
line-height:1.8;
color:var(--text-gray);
}

@media(max-width:1024px){
.benefit-grid{
grid-template-columns:repeat(2,1fr);
}
}

@media(max-width:640px){
.benefit-grid{
grid-template-columns:1fr;
gap:24px;
}
}
`;

class BenefitSections extends HTMLElement {

connectedCallback(){

const shadow=this.attachShadow({mode:"open"});

const style=document.createElement("style");
style.textContent=css;

const wrapper=document.createElement("div");
wrapper.className="wrapper";

const container=document.createElement("div");
container.className="benefit-grid";

benefits.forEach((b)=>{

const card=document.createElement("div");
card.className="benefit-item";

card.innerHTML=`
<div class="icon-wrapper">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${b.iconPaths}</svg>
</div>
<div class="accent-line"></div>
<h3 class="benefit-title">${b.title}</h3>
<p class="benefit-description">${b.description}</p>
`;

container.appendChild(card);

});

wrapper.appendChild(container);

shadow.appendChild(style);
shadow.appendChild(wrapper);

}

}

if(!customElements.get("benefit-sections")){
customElements.define("benefit-sections",BenefitSections);
}
