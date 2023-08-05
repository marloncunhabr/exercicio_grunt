module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    'dist/style.css': 'src/less/main.less'
                }
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            target: {
                files: {
                    'dist/script.min.js': ['src/js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
