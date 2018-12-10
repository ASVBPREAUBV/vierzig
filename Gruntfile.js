var cssnext = require("postcss-cssnext");

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['static/css4/**/*.css'],
                tasks: ['postcss'],
                options: {
                    interrupt: true,
                },
            },
        },
        postcss: {
            options: {
                processors: [
                    cssnext()
                ]
            },
            dist: {
                src: 'static/css4/style.css',
                dest: 'static/css/style.css',
            }

        }

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');

};