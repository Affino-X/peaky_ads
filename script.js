function parallax() {

    let parallaxElement1 = document.getElementById("dotsFirst"),
        parallaxElement2 = document.getElementById("gAdsIconFirst"),
        parallaxElement3 = document.getElementById("gIconRightFirst"),
        parallaxElement4 = document.getElementById("gIconYellowFirst"),
        parallaxElement5 = document.getElementById("gIconBlueFirst"),
        doc = document.documentElement;

    window.requestAnimationFrame(function () {

      if (window.innerWidth > 768) {

        let currentElement1 = parallaxElement1,
            windowTop1 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
            elementTop1 = currentElement1.offsetTop,
            elementHeight1 = currentElement1.getBoundingClientRect().height,
            viewPortHeight1 = window.innerHeight * 0.9 - elementHeight1 * 0.9,
            scrolled1 = windowTop1 - elementTop1 + viewPortHeight1;

        currentElement1.style.transform = "translate(0," + scrolled1 * -0.35 + "px)";

        let currentElement2 = parallaxElement2,
            windowTop2 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 2400),
            elementTop2 = currentElement2.offsetTop,
            elementHeight2 = currentElement2.getBoundingClientRect().height,
            viewPortHeight2 = window.innerHeight * 0.5 - elementHeight2 * 0.5,
            scrolled2 = windowTop2 - elementTop2 + viewPortHeight2;

        currentElement2.style.transform = "translate(-200%," + scrolled2 * 0.15 + "px) rotate(77.04deg)";

        let currentElement3 = parallaxElement3,
            windowTop3 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || -10),
            elementTop3 = currentElement3.offsetTop,
            elementHeight3 = currentElement3.getBoundingClientRect().height,
            viewPortHeight3 = window.innerHeight * 0.5 - elementHeight3 * 0.5,
            scrolled3 = windowTop3 - elementTop3 + viewPortHeight3;

        currentElement3.style.transform = "translate(320%," + scrolled3 * 0.15 + "px)";

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

      } else {

        parallaxElement1.removeAttribute("style");
        parallaxElement2.removeAttribute("style");
        parallaxElement3.removeAttribute("style");
        parallaxElement4.removeAttribute("style");

      }

    });

  }

  ["load", "resize", "scroll"].forEach(function (e) {

    window.addEventListener(e, parallax);

  });
