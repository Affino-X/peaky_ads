function parallax() {

    let parallaxElement1 = document.getElementById("dotsFirst"),
        parallaxElement2 = document.getElementById("gAdsIconFirst"),
        parallaxElement3 = document.getElementById("gIconRightFirst"),
        parallaxElement4 = document.getElementById("gIconYellowFirst"),
        parallaxElement5 = document.getElementById("gIconBlueFirst"),

        parallaxElement6 = document.getElementById("gIconBlueSecond"),
        parallaxElement7 = document.getElementById("gAdsIconSecond"),

        parallaxElement8 = document.getElementById("servicesFirst"),
        parallaxElement9 = document.getElementById("servicesSecond"),


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


        let currentElement6 = parallaxElement6,
        windowTop6 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || -500),
        elementTop6 = currentElement6.offsetTop,
        elementHeight6 = currentElement6.getBoundingClientRect().height,
        viewPortHeight6 = window.innerHeight * 0.5 - elementHeight6 * 0.5,
        scrolled6 = windowTop6 - elementTop6 + viewPortHeight6;

        currentElement6.style.transform = "translate(-582px," + scrolled6 * 0.15 + "px) rotate(-57deg)";
    
        let currentElement7 = parallaxElement7,
        windowTop7 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || -350),
        elementTop7 = currentElement7.offsetTop,
        elementHeight7 = currentElement7.getBoundingClientRect().height,
        viewPortHeight7 = window.innerHeight * 0.5 - elementHeight7 * 0.5,
        scrolled7 = windowTop7 - elementTop7 + viewPortHeight7;

        currentElement7.style.transform = "translate(590px," + scrolled7 * -0.15 + "px) rotate(90deg)" ;


        let currentElement8 = parallaxElement8,
        windowTop8 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
        elementTop8 = currentElement8.offsetTop,
        elementHeight8 = currentElement8.getBoundingClientRect().height,
        viewPortHeight8 = window.innerHeight * 0.5 - elementHeight8 * 0.5,
        scrolled8 = windowTop8- elementTop8 + viewPortHeight8

        currentElement8.style.transform = "translate(0," + scrolled8 * 0.1 + "px)";
    
        let currentElement9 = parallaxElement9,
        windowTop9 = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
        elementTop9 = currentElement9.offsetTop,
        elementHeight9 = currentElement9.getBoundingClientRect().height,
        viewPortHeight9 = window.innerHeight * 0.5 - elementHeight9 * 0.5,
        scrolled9 = windowTop9 - elementTop9 + viewPortHeight9;

        currentElement9.style.transform = "translate(0," + scrolled9 * -0.1 + "px)" ;

      } else {

        parallaxElement1.removeAttribute("style");
        parallaxElement2.removeAttribute("style");
        parallaxElement3.removeAttribute("style");
        parallaxElement4.removeAttribute("style");
        parallaxElement5.removeAttribute("style");
        parallaxElement6.removeAttribute("style");
        parallaxElement7.removeAttribute("style");

      }

    });

  }

  ["load", "resize", "scroll"].forEach(function (e) {

    window.addEventListener(e, parallax);

  });
