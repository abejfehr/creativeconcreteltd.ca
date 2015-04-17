module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    sass:
      dist:
        files: [
          expand: true
          cwd: 'css/scss/'
          src: ['*.scss']
          dest: 'css/'
          ext: '.css'
        ]

    image_resize:
      dist:
        options:
          width: 200,
          height: 130,
          crop: true,
          quality: 0.5,
          overwrite: true
        src: 'images/hi-res/*.jpg'
        dest: 'images/thumbs/'

    watch:
      sass:
        files: '**/*.scss'
        tasks: ['sass', 'image_resize']


  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-image-resize'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask('default', ['sass', 'image_resize', 'watch'])