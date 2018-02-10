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
      full_to_hi_res:
        options:
          width: 1600
          quality: 0.8
          overwrite: true
        src: 'images/full-images/*.jpg'
        dest: 'images/hi-res/'
      hi_res_to_thumb:
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
        , 'images/headerBG.jpg': 'images/headerBG.jpg']

    watch:
      sass:
        files: '**/*.scss'
        tasks: ['sass']


  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-image-resize'
  grunt.loadNpmTasks 'grunt-contrib-imagemin'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask('default', ['sass', 'image_resize', 'imagemin', 'watch'])
