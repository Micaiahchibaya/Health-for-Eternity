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
