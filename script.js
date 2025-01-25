function applyParallaxEffect(element, transformX, transformYMultiplier, initialTopOffset = 0, rotation = 0) {
    const doc = document.documentElement;
    const windowTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || initialTopOffset);
    const elementTop = element.offsetTop;
    const elementHeight = element.getBoundingClientRect().height;
    const viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5;
    const scrolled = windowTop - elementTop + viewPortHeight;

    element.style.transform = `translate(${transformX}, ${scrolled * transformYMultiplier}px) rotate(${rotation}deg)`;
}

function resetParallax(elements) {
    elements.forEach(element => element.removeAttribute("style"));
}

function parallax() {
    const elements = [
        { id: "dotsFirst", transformX: "0", transformYMultiplier: -0.35, initialTopOffset: 0 },
        { id: "gAdsIconFirst", transformX: "-200%", transformYMultiplier: 0.15, initialTopOffset: 2400, rotation: 77.04 },
        { id: "gIconRightFirst", transformX: "320%", transformYMultiplier: 0.15, initialTopOffset: -10 },
        { id: "gIconYellowFirst", transformX: "-540%", transformYMultiplier: 0.15, initialTopOffset: 2120 },
        { id: "gIconBlueFirst", transformX: "620%", transformYMultiplier: 0.15, initialTopOffset: 770 },
        { id: "gIconBlueSecond", transformX: "-582px", transformYMultiplier: 0.15, initialTopOffset: -500, rotation: -57 },
        { id: "gAdsIconSecond", transformX: "590px", transformYMultiplier: -0.15, initialTopOffset: -350, rotation: 90 },
        { id: "servicesFirst", transformX: "0", transformYMultiplier: 0.1, initialTopOffset: 0 },
        { id: "servicesSecond", transformX: "0", transformYMultiplier: -0.1, initialTopOffset: 0 },
        { id: "gAdsIconThird", transformX: "-365%", transformYMultiplier: 0.2, initialTopOffset: 2300 },
        { id: "gIconWhiteThird", transformX: "535%", transformYMultiplier: 0.2, initialTopOffset: 1900},
        { id: "background", transformX: "13%", transformYMultiplier: -0.25, initialTopOffset: 2450},

        { id: "faqDotsTop", transformX: "-5%", transformYMultiplier: -0.25, initialTopOffset: 2350},
        { id: "faqDotsBottom", transformX: "-5%", transformYMultiplier: -0.25, initialTopOffset: 5950},

        { id: "gameDots", transformX: "0%", transformYMultiplier: -0.25, initialTopOffset: 800},
        { id: "gameFeedback", transformX: "-1150%", transformYMultiplier: -0.25, initialTopOffset: 200},

        { id: "gRed", transformX: "-700px", transformYMultiplier: 0.05, initialTopOffset: -7000},
        { id: "gGreen", transformX: "650px", transformYMultiplier: 0.05, initialTopOffset: -9200},

        { id: "gameGAdsLeft", transformX: "-400px", transformYMultiplier: 0.05, initialTopOffset: -9200, rotation: 70},
        { id: "gameGAdsRight", transformX: "600px", transformYMultiplier: 0.05, initialTopOffset: -1910},
    ];

    if (window.innerWidth > 768) {
        elements.forEach(({ id, transformX, transformYMultiplier, initialTopOffset, rotation = 0 }) => {
            const element = document.getElementById(id);
            if (element) {
                applyParallaxEffect(element, transformX, transformYMultiplier, initialTopOffset, rotation);
            }
        });
    } else {
        resetParallax(elements.map(({ id }) => document.getElementById(id)));
    }
}

["load", "resize", "scroll"].forEach(event => {
    window.addEventListener(event, parallax);
});


// Effect for FAQ
const faqElements = document.querySelectorAll('.faq__question, .faq__answers');
let lastScrollY = window.scrollY;

const observerCallback = (entries) => {
  entries.forEach(entry => {
    const scrollingDown = window.scrollY > lastScrollY;

    if (entry.isIntersecting && scrollingDown) {
      entry.target.classList.add('active');
    } else if (!entry.isIntersecting) {
      entry.target.classList.remove('active');
    }
  });

  lastScrollY = window.scrollY;
};

const observerOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

faqElements.forEach(element => observer.observe(element));
