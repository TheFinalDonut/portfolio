let tl = gsap.timeline();
window.addEventListener("DOMContentLoaded", () => {
    tl.to('.h1', {
        left: 50,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    }, "<");

    tl.to('.p1', {
        left: -730,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    }, "<0.2");

    tl.to('.aboutHeader', {
        scrollTrigger: '.aboutHeader',
        left: 50,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    });

    tl.to('.aboutP1', {
        scrollTrigger: '.aboutHeader',
        left: -440,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.1,
        overwrite: false
    }, "<0.2");
});