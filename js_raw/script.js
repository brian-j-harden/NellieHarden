(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85112736-3', 'auto');
ga('send', 'pageview');

$(function(){

    // Load Footer and Header
    $("#header").load("/header.html", function() {
        var nav = responsiveNav(".nav-collapse", { // Selector
            animate: true, // Boolean: Use CSS3 transitions, true or false
            transition: 0, // Integer: Speed of the transition, in milliseconds
            label: "Menu", // String: Label for the navigation toggle
            insert: "before", // String: Insert the toggle before or after the navigation
            customToggle: "", // Selector: Specify the ID of a custom toggle
            closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
            openPos: "relative", // String: Position of the opened nav, relative or static
            navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
            navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
            jsClass: "js", // String: 'JS enabled' class which is added to  element
            init: function(){}, // Function: Init callback
            open: function(){}, // Function: Open callback
            close: function(){} // Function: Close callback
        });
    });
    $("#footer").load("/footer.html");

});

