module.exports = function(config){
    'use strict';
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        files: [
            //libraries
            'lib/jquery-2.0.3.min.js',
            'app/components/angular/angular.js',
            'app/components/angular-touch/angular-touch.js',
            'app/components/angular-mocks/angular-mocks.js',

            //our directive(s)
            'src/rangeInputSupported.js',
            'src/angular-slider.js',

            //tests
            'test/*.js'
        ],
        autoWatch: true,
        browsers: ['firefox']
    });
};
