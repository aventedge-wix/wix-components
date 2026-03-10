const profiles = [
  {
    src: "https://static.wixstatic.com/media/958742_a73e45438b7c4aba8e1def9e374fe5f6~mv2.jpg",
    alt: "Professor Danny Liu",
    name: "Professor Danny Liu",
    title: "Professor of Educational Technologies; Winner of the AFR 2025 AI Awards",
    org: "University of Sydney",
  },
  {
    src: "https://static.wixstatic.com/media/958742_cac97b93cc8c46aebd71181749a9fe11~mv2.jpg",
    alt: "Fiona Notley",
    name: "Fiona Notley",
    title: "Chief Operating Officer and Vice-President",
    org: "RMIT University",
  },
  {
    src: "https://static.wixstatic.com/media/958742_d83faa8bec5946a19417341ec527a336~mv2.jpg",
    alt: "Prof. Sarah McDonald",
    name: "Prof. Sarah McDonald",
    title: "Deputy Vice-Chancellor (Student Experience) and Senior Vice-President",
    org: "Monash University",
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

  :root {
    --primary-blue: #3d8bff;
    --primary-orange: #f98513;
    --brand-navy: #111144;
    --text-gray: #000000;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    padding: 40px 20px;
  }

  .board-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 40px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
  }

  .advisory-profile {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .advisory-profile:hover {
    transform: translateY(-5px);
  }

  .profile-img {
    width: 220px;
    height: 220px;
    border-radius: 30px;
    margin-bottom: 24px;
    border: none;
    object-fit: cover;
    box-shadow: 0 15px 35px rgba(17, 17, 68, 0.1);
  }

  .name {
    font-size: 24px;
    font-weight: 700;
    color: var(--brand-navy);
    margin: 0 0 8px 0;
    line-height: 1.2;
    min-height: 1.2em;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 280px;
  }

  .title-info {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-gray);
    margin: 0;
    line-height: 1.5;
    min-height: 4.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .org-highlight {
    display: block;
    margin-top: 10px;
    color: var(--brand-navy);
    font-size: 18px;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0.5px;
  }

  @media (max-width: 1024px) {
    .board-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .title-info {
      min-height: auto;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 640px) {
    .board-container {
      grid-template-columns: 1fr;
      gap: 50px;
    }
    .profile-img {
      width: 200px;
      height: 200px;
    }
  }
`;

// Wix Custom Element entry point
class AdvisoryBoard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = css;

    const container = document.createElement("div");
    container.className = "board-container";

    profiles.forEach((p) => {
      container.innerHTML += `
        <div class="advisory-profile">
          <img src="${p.src}" alt="${p.alt}" class="profile-img">
          <div class="info-wrapper">
            <h3 class="name">${p.name}</h3>
            <p class="title-info">${p.title}</p>
            <span class="org-highlight">${p.org}</span>
          </div>
        </div>`;
    });

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

customElements.define("advisory-board", AdvisoryBoard);
