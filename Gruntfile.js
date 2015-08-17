module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        'lib/**/*.js',
        'tests/**/*.js'
      ]
    },

    jsonlint: {
      release: {
        expand: true,
        src: [
          'lib/**/*.json'
        ]
      }
    },

    mochaTest: {
      all: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: true,
          bail: true
        },
        src: [
         'tests/**/*.js'
        ]
      }
    },

    express: {
      options: {
        port: 3001
      },
      sample: {
        options: {
          script: 'example/web.js',
          debug: true
        }
      }
    },

    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    nodemon: {
      debug: {
        script: 'example/web.js',
        options: {
          nodeArgs: ['--debug-brk'],
          env: {
            PORT: process.env.PORT || 9000
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              setTimeout(function () {
                require('open')('http://localhost:8080/debug?port=5858');
              }, 500);
            });
          }
        }
      }
    },

    watch: {
      express: {
        files: [
          'example/web.js',
          'example/nodestarter-config.js',
          'lib/**/*.js'
        ],
        tasks: ['newer:jshint', 'newer:jsonlint', 'express:sample'],
        options: {
          livereload: false,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    env: {
      development: {
        NODE_ENV: 'development',
      },
      test: {
        NODE_ENV: 'test'
      }
    }
  });

  grunt.registerTask('run-sample', function (target) {
    grunt.task.run([
      'env:development',
      'express:sample',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'env:test',
    'jshint',
    'jsonlint',
    'mochaTest:all'
  ]);

  grunt.registerTask('default', [
    'test',
    'run-sample'
  ]);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-node-inspector');
};
