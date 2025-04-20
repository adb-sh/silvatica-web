
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".reveal-svg").forEach((svg) => {
    const polyline = svg.querySelector("polyline");
    const img = svg.querySelector("image");
    img.onload = () => {
      gsap.fromTo(polyline,
        { strokeDashoffset: 20000 },
        {
          strokeDashoffset: 0,
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