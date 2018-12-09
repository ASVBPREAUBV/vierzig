module.exports = function(grunt) {

    grunt.initConfig({

        postcss: {

            options: {

            },
            dist: {
                src: 'static/css4/style.css',
                dest: 'static/css/style.css',
            }

        }

    });

    grunt.loadNpmTasks('grunt-postcss');

};