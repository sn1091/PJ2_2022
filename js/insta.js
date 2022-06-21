(function(d, s) {
    var j, e = d.getElementsByTagName(s)[0], h = "https://cdn.attractt.com/embed/dist/js/tower/tower.min.js";
    if (typeof AttracttTower === "function" || e.src === h) { return; }
    j = d.createElement(s);
    j.src = h;
    j.async = true;
    e.parentNode.insertBefore(j, e);
    })(document, "script");