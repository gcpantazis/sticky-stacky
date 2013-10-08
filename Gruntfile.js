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
        'sticky-stacky.js'
      ]
    },
    clean: {
      build: ['*.min.js*']
    },
    uglify: {
      target: {
        options: {
          sourceMap: 'sticky-stacky.min.js.map'
        },
        files: {
          'sticky-stacky.min.js': ['sticky-stacky.js']
        }
      }
    }
  });

  grunt.registerTask('test', []);

  grunt.registerTask('default', [
    'clean',
    'jshint',
    'uglify'
  ]);
};