//gulpfile.js

var gulp = require('gulp');
var uglify  = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function(cb) {
  // place code for your default task here
  // console.log('default')//
  var src = [
    'js/src/tmpl.js',
    'js/utils.js',
    'js/src/todos.js'
  ];

  // pump([
  //       gulp.src(src),
  //       uglify(),
  //       gulp.dest('build')
  //   ],
  //   cb
  // );
  return gulp.src(src)
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build'));
});
