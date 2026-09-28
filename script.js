gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.aboutHeader',
        scroller: "body",
        horizontal: true,
        start: "left 80%",
        toggleActions: "play none none none",
        invalidateOnRefresh: true
    }
});
window.addEventListener("load", () => {
    tl.to('.h1', {
        left: 50,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    }, "<")
    .to('.p1', {
        left: 55,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    }, "<0.2");

    tl2.to('.aboutHeader', {
        left: 50,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    })
    .to('.aboutP1', {
        left: 55,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.5,
        overwrite: false
    }, "<0.4");

    ScrollTrigger.refresh();
});