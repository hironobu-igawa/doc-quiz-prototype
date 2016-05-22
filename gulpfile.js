var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['serv']);

gulp.task('serv', function() {

  gulp.src('./')
    .pipe(webserver({
      port: 3000,
      open: 'http://localhost:3000/'
    }));
});
