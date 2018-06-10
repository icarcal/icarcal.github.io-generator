// Necessary Plugins
const gulp     = require('gulp')

// Move Notes
module.exports = gulp.task('resume', () =>
  gulp.src('src/resume/**/*')
    .pipe(gulp.dest('build/resume'))
);
