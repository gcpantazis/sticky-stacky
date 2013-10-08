'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'stickystacky.js'
      ]
    },
    uglify: {
      target: {
        options: {
          sourceMap: 'dist/stickystacky.min.js.map'
        },
        files: {
          'dist/stickystacky.min.js': ['stickystacky.js']
        }
      }
    }
  });

  grunt.registerTask('test', []);

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};