var cssnext = require("postcss-cssnext");

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['static/css4/*.css'],
                tasks: ['css'],
                options: {
                    interrupt: true,
                },
            },
        },
        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ["static/css4/**/*.css"],
                dest: "static/css/styles.css"
            },
        },
        postcss: {
            options: {
                processors: [
                    cssnext()
                ]
            },
            dist: {
                src: 'static/css/style.css',
                dest: 'static/css/style.css',
            }

        }

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');

    // one grunt task to only run css-related stuff
    grunt.registerTask('css', ['concat_css', 'postcss']);
    grunt.registerTask('dev', ['css', 'watch']);


};