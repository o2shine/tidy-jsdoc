function hideAllButCurrent(){
    //by default all submenut items are hidden
    //but we need to rehide them for search
    debugger;
    document.querySelectorAll("nav > ul > ul > ul.nav-sub-content").forEach(function(parent) {
        parent.style.display = "none";
    });

    //only current page (if it exists) should be opened
    var file = window.location.pathname.split("/").pop().replace(/\.html/, '');
    document.querySelectorAll("nav > ul span.is-class > a, nav > ul span.is-module > a").forEach(function(parent) {
        var href = parent.attributes.href.value.replace(/\.html/, '');
        if (file === href) {
            parent.parentNode.parentNode.parentNode.querySelectorAll("ul.nav-sub-content").forEach(function(elem) {
                elem.style.display = "block";
            });
        }
    });
}

hideAllButCurrent();