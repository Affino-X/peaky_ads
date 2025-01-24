let currentElement4 = parallaxElement4,
windowTop4 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 2120),
elementTop4 = currentElement4.offsetTop,
elementHeight4 = currentElement4.getBoundingClientRect().height,
viewPortHeight4 = window.innerHeight * 0.5 - elementHeight4 * 0.5,
scrolled4 = windowTop4 - elementTop4 + viewPortHeight4;

currentElement4.style.transform = "translate(-540%," + scrolled4 * 0.15 + "px)";

let currentElement5 = parallaxElement5,
windowTop5 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 770),
elementTop5 = currentElement5.offsetTop,
elementHeight5 = currentElement5.getBoundingClientRect().height,
viewPortHeight5 = window.innerHeight * 0.5 - elementHeight5 * 0.5,
scrolled5 = windowTop5 - elementTop5 + viewPortHeight5;

currentElement5.style.transform = "translate(620%," + scrolled5 * 0.15 + "px)";