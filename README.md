# NellieHarden

To compress and minify the JS files, run:
FROM: js/
uglifyjs ../js_raw/jquery-3.1.0.min.js ../js_raw/responsive-nav.js ../js_raw/script.js -o nh.min.js -c -m
