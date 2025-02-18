const lenis = new Lenis({
    
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".elem").forEach(elem => {
    let image = elem.querySelector("img");
    let t1 = gsap.timeline();

    let xTransfrom = gsap.utils.random(-100, 100);

    t1
      .set(image, {
        transformOrigin: `${xTransfrom < 0 ? '0%' : '100%'}`
      }, "start")
      .to(image,{
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
      },"start")
      .to(elem, {
        xPercent: xTransfrom,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
      })
});
