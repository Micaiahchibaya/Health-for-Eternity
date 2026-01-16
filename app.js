// Load articles dynamically
const articlesContainer = document.getElementById("articles-container");

if (articlesContainer) {
  fetch("data/articles.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(article => {
        const card = document.createElement("div");
        card.className = "feature-card";
        card.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <small>${article.date}</small>
        `;
        articlesContainer.appendChild(card);
      });
    });
}
// Load health principles
const principlesContainer = document.getElementById("principles-container");

if (principlesContainer) {
  fetch("data/principles.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "feature-card";
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        `;
        principlesContainer.appendChild(card);
      });
    });
}
