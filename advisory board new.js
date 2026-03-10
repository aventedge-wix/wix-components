const ADVISORY_PROFILES = [
  {
    img: "https://static.wixstatic.com/media/958742_a73e45438b7c4aba8e1def9e374fe5f6~mv2.jpg",
    alt: "Professor Danny Liu",
    name: "Professor Danny Liu",
    title: "Professor of Educational Technologies; Winner of the AFR 2025 AI Awards",
    org: "University of Sydney"
  },
  {
    img: "https://static.wixstatic.com/media/958742_cac97b93cc8c46aebd71181749a9fe11~mv2.jpg",
    alt: "Fiona Notley",
    name: "Fiona Notley",
    title: "Chief Operating Officer and Vice-President",
    org: "RMIT University"
  },
  {
    img: "https://static.wixstatic.com/media/958742_d83faa8bec5946a19417341ec527a336~mv2.jpg",
    alt: "Prof. Sarah McDonald",
    name: "Prof. Sarah McDonald",
    title: "Deputy Vice-Chancellor (Student Experience) and Senior Vice-President",
    org: "Monash University"
  }
];

const FONT_HREF = "https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap";

const CSS = `
  :host {
    /* FIX: explicit block + width so host never collapses to 0 on mobile */
    display: block !important;
    width: 100% !important;
    min-height: 1px;
    --primary-blue: #3d8bff;
    --primary-orange: #f98513;
    --brand-navy: #111144;
    --text-gray: #000000;
    --grid-gap: clamp(20px, 4vw, 60px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .board-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--grid-gap);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
  }

  .advisory-profile {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    flex: 1 1 280px;
    max-width: 350px;
    margin-bottom: 20px;
  }

  .advisory-profile:hover {
    transform: translateY(-5px);
  }

  .profile-img {
    width: clamp(150px, 20vw, 220px);
    height: clamp(150px, 20vw, 220px);
    border-radius: 30px;
    margin-bottom: 24px;
    border: none;
    object-fit: cover;
    box-shadow: 0 15px 35px rgba(17, 17, 68, 0.1);
    display: block;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .name {
    font-size: clamp(18px, 2.5vw, 24px);
    font-weight: 700;
    color: var(--brand-navy);
    margin: 0 0 8px 0;
    line-height: 1.2;
  }

  .title-info {
    font-size: clamp(13px, 1.5vw, 15px);
    font-weight: 500;
    color: var(--text-gray);
    margin: 0;
    line-height: 1.5;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 10px;
  }

  .org-highlight {
    display: block;
    margin-top: 10px;
    color: var(--brand-navy);
    font-size: clamp(15px, 1.8vw, 18px);
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  @media (max-width: 640px) {
    .advisory-profile {
      flex: 1 1 100%;
      max-width: 100%;
    }
    .board-container {
      padding: 10px;
    }
  }
`;

class AdvisoryBoard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = FONT_HREF;

    const style = document.createElement("style");
    style.textContent = CSS;

    const container = document.createElement("div");
    container.className = "board-container";

    ADVISORY_PROFILES.forEach(({ img, alt, name, title, org }) => {
      const profile = document.createElement("div");
      profile.className = "advisory-profile";

      const image = document.createElement("img");
      image.src = img;
      image.alt = alt;
      image.className = "profile-img";

      const infoWrapper = document.createElement("div");
      infoWrapper.className = "info-wrapper";

      const nameEl = document.createElement("h3");
      nameEl.className = "name";
      nameEl.textContent = name;

      const titleEl = document.createElement("p");
      titleEl.className = "title-info";
      titleEl.textContent = title;

      const orgEl = document.createElement("span");
      orgEl.className = "org-highlight";
      orgEl.textContent = org;

      infoWrapper.appendChild(nameEl);
      infoWrapper.appendChild(titleEl);
      infoWrapper.appendChild(orgEl);

      profile.appendChild(image);
      profile.appendChild(infoWrapper);
      container.appendChild(profile);
    });

    shadow.appendChild(fontLink);
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define("advisory-board", AdvisoryBoard);
