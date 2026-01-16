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

