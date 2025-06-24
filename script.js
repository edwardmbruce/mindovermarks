// script.js

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((el, i) => {
      el.classList.remove("active");
      if (i === index) {
        el.classList.add("active");
      }
    });
  }

  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 4000);

  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    form.reset();
  });
});
