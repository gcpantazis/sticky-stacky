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
      build: ['dist']
    },
    uglify: {
      target: {
        options: {
          sourceMap: 'dist/sticky-stacky.min.js.map'
        },
        files: {
          'dist/sticky-stacky.min.js': ['sticky-stacky.js']
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