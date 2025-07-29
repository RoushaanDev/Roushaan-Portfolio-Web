// Animate skill bars on scroll
document.addEventListener("scroll", () => {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    const pos = bar.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("style").split("width:")[1];
    }
  });
});

// Form submission
document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});
