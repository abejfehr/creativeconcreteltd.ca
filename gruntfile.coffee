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
          width: 200
          height: 130
          crop: true
          quality: 0.5
          overwrite: true
        src: 'images/hi-res/*.jpg'
        dest: 'images/thumbs/'

    imagemin:
      dist:
        options:
          progressive: true
        files: [
          expand: true
          cwd: 'images/hi-res/'
          src: ['**/*.{png,jpg,gif}']
          dest: 'images/hi-res/'
        ]

    watch:
      sass:
        files: '**/*.scss'
        tasks: ['sass', 'image_resize']


  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-image-resize'
  grunt.loadNpmTasks 'grunt-contrib-imagemin'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask('default', ['sass', 'image_resize', 'imagemin', 'watch'])