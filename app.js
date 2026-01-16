// Smooth scroll future-ready
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert("Navigation system ready for expansion.");
  });
});

// CTA logic
document.querySelectorAll(".btn.primary").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("User engaged with Health for Eternity CTA");
  });
});
// Subtle parallax on hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-bg");
  hero.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

