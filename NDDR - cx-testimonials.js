const TESTIMONIALS = [
  {
    text: "Great atmosphere, and was great to be in a room with likeminded people",
    source: "Resources Safety and Health Queensland",
  },
  {
    text: "It was a valuable forum that brought together practitioners from across jurisdictions to share insights, challenges, and emerging best practices. The discussions were highly relevant to contemporary investigative work and reinforced the importance of collaboration, innovation, and adaptability in enforcement activities.",
    source: "New South Wales Department of Customer Service",
  },
  {
    text: "With over 17 years of experience in investigations and compliance, I found the summit extremely worthwhile from an educative standpoint and a networking opportunity. To have access to speakers and panels, with a wealth of experience, is a unique experience, one that shouldn\u2019t be missed.",
    source: "Consumer, Building and Occupational Services",
  },
  {
    text: "The event was really interesting and I found our agency had more in common with other agencies than I imagined prior to the conference",
    source: "Tertiary Education Quality and Standards Agency Victoria",
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :host { display: block; width: 100%; background: #F0F0F0; font-family: 'Inter', sans-serif; padding: 40px 20px; box-sizing: border-box; }
  .testimonials-section { max-width: 800px; margin: 0 auto; width: 100%; }
  .slider { position: relative; overflow: hidden; width: 100%; }
  .slider-track { display: flex; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); width: 100%; will-change: transform; }
  .slide { min-width: 100%; width: 100%; padding: 0; flex-shrink: 0; }
  .quote-card { background: white; border-radius: 20px; padding: 44px 48px; border: 1px solid rgba(30,58,95,0.12); text-align: center; position: relative; width: 100%; box-sizing: border-box; overflow: hidden; }
  .quote-accent { width: 40px; height: 3px; background: #1a4063; border-radius: 2px; margin: 0 auto 28px; }
  .quote-mark { font-size: 64px; line-height: 0.6; color: #1a4063; font-family: Georgia, serif; display: block; opacity: 0.25; margin-bottom: 20px; }
  .quote-text { font-size: 16px; line-height: 1.8; color: #3a5272; margin-bottom: 32px; font-style: italic; font-weight: 300; }
  .quote-source { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #1a4063; }
  .quote-source::before { content: '-- '; color: #1a4063; }
  .controls { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 28px; }
  .nav-btn { width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid rgba(26,64,99,0.15); background: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; box-shadow: 0 2px 8px rgba(30,58,95,0.07); flex-shrink: 0; }
  .nav-btn:hover { background: #1a4063; border-color: #1a4063; }
  .nav-btn:hover svg { stroke: white; }
  .nav-btn svg { width: 16px; height: 16px; stroke: #1a4063; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
  .dots { display: flex; gap: 8px; align-items: center; }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(26,64,99,0.15); cursor: pointer; border: none; transition: all 0.3s; }
  .dot.active { background: #1a4063; transform: scale(1.4); }
  @media (max-width: 600px) {
    :host { padding: 24px 16px; }
    .quote-card { padding: 28px 20px; border-radius: 14px; }
    .quote-mark { font-size: 44px; margin-bottom: 12px; }
    .quote-text { font-size: 14px; line-height: 1.7; margin-bottom: 24px; }
    .quote-source { font-size: 11px; }
    .quote-accent { margin-bottom: 20px; }
    .controls { margin-top: 20px; gap: 14px; }
    .nav-btn { width: 36px; height: 36px; }
  }
`;

class CxTestimonials extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const slides = TESTIMONIALS.map(
      ({ text, source }) => `
      <div class="slide">
        <div class="quote-card">
          <div class="quote-accent"></div>
          <span class="quote-mark">&ldquo;</span>
          <p class="quote-text">${text}</p>
          <div class="quote-source">${source}</div>
        </div>
      </div>`
    ).join("");

    const dots = TESTIMONIALS.map(
      (_, i) => `<button class="dot${i === 0 ? " active" : ""}"></button>`
    ).join("");

    shadow.innerHTML = `
      <style>${CSS}</style>
      <div class="testimonials-section">
        <div class="slider">
          <div class="slider-track" id="track">${slides}</div>
        </div>
        <div class="controls">
          <button class="nav-btn" id="prev">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="dots" id="dots">${dots}</div>
          <button class="nav-btn" id="next">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    `;

    const track = shadow.getElementById("track");
    const dotsEl = shadow.getElementById("dots");
    const total = TESTIMONIALS.length;
    const interval = 5000;
    let current = 0;
    let elapsed = 0;
    let rafId;

    dotsEl.querySelectorAll(".dot").forEach((dot, i) => {
      dot.addEventListener("click", () => { goTo(i); resetTimer(); });
    });

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsEl.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === current);
      });
      elapsed = 0;
    }

    function startTimer() {
      let last = performance.now();
      function tick(now) {
        elapsed += now - last;
        last = now;
        if (elapsed >= interval) {
          goTo(current + 1);
          elapsed = 0;
        }
        rafId = requestAnimationFrame(tick);
      }
      rafId = requestAnimationFrame(tick);
    }

    function resetTimer() {
      cancelAnimationFrame(rafId);
      elapsed = 0;
      startTimer();
    }

    shadow.getElementById("next").addEventListener("click", () => { goTo(current + 1); resetTimer(); });
    shadow.getElementById("prev").addEventListener("click", () => { goTo(current - 1); resetTimer(); });

    goTo(0);
    startTimer();
  }
}

customElements.define("cx-testimonials", CxTestimonials);
