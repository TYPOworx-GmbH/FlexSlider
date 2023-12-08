const mix = require('laravel-mix');
//mix.webpackConfig({})

mix
    // Setup
    .disableNotifications()
    .disableSuccessNotifications()
    .setPublicPath('../')
    .options({
        processCssUrls: false,
        notifications: false,
    })

    .sourceMaps(true, 'source-map')

    // Javascript
    .js('../js/jquery.flexslider.js', '../jquery.flexslider.min.js')

    // SCSS
    .sass('../flexslider.scss', '../css')
;
