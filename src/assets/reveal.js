
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".reveal-svg").forEach((svg) => {
    const circles = svg.querySelectorAll("circle");
    const img = svg.querySelector("image");
    img.onload = () => {
      gsap.fromTo(circles,
        { r: 0 },
        {
          r: 1500,
          duration: 3,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: svg,
            start: "top 60%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  });
});