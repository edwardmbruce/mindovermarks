document.addEventListener("DOMContentLoaded", () => {
  // fade-in-left effect for petition-cta container
  const container = document.querySelector(".petition-cta");
  container.style.opacity = 0;
  container.style.transform = "translateX(-20px)";
  setTimeout(() => {
    container.style.transition = "opacity 1s ease, transform 1s ease";
    container.style.opacity = 1;
    container.style.transform = "translateX(0)";
  }, 200);
});
