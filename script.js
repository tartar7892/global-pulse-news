document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const links = document.querySelectorAll(".main-nav a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      const topOffset = 70; // height of topbar
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});