/* ===============================
   Smooth Scroll for Internal Links
   =============================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ===============================
     Reveal on Scroll (Subtle 3D Feel)
     =============================== */
  const revealElements = document.querySelectorAll(
    "section, .card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(el => {
    el.classList.add("reveal-hidden");
    revealObserver.observe(el);
  });

  /* ===============================
     Optional: Button Click Feedback
     =============================== */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.96)";
    });
    btn.addEventListener("mouseup", () => {
      btn.style.transform = "";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
  });
});
