gsap.registerPlugin(ScrollTrigger);

// Fade in each section as it comes into view
gsap.utils.toArray(".title-container, .pop-growth-container, .map-container, .immigration-ma-container, .immigration-pctg-region-container, .immigration-pctg-latam-container, .socio-economic-text, .workforce-container, .conclusion-container").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false
        },
    });
});