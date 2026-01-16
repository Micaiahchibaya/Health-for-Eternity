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
const aiToggle = document.getElementById("ai-toggle");
const aiPanel = document.getElementById("ai-panel");
const aiClose = document.getElementById("ai-close");
const aiSend = document.getElementById("ai-send");
const aiInput = document.getElementById("ai-input");
const aiMessages = document.getElementById("ai-messages");

if (aiToggle) {
  aiToggle.onclick = () => aiPanel.style.display = "flex";
  aiClose.onclick = () => aiPanel.style.display = "none";

  aiSend.onclick = () => handleAI();
  aiInput.addEventListener("keypress", e => {
    if (e.key === "Enter") handleAI();
  });
}

function handleAI() {
  const text = aiInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  aiInput.value = "";

  setTimeout(() => {
    addMessage(generateReply(text), "bot");
  }, 600);
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `ai-message ${type}`;
  msg.textContent = text;
  aiMessages.appendChild(msg);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function generateReply(input) {
  input = input.toLowerCase();

  if (input.includes("nutrition"))
    return "A whole-food, plant-forward diet supports long-term health and vitality.";

  if (input.includes("rest") || input.includes("sleep"))
    return "Rest is essential. Healing and mental clarity improve with consistent sleep.";

  if (input.includes("stress"))
    return "Managing stress through rest, nature, and reflection protects overall health.";

  return "Healthy living is built on small, consistent daily choices.";
}
