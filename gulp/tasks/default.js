const gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'pug', 'notes', 'resume', 'stylus', 'imagemin', 'watch', 'browser-sync', 'js']);
