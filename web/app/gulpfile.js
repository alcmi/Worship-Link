var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec;

gulp.task('sass', function () {
    gulp.src('./styles/scss/*.scss')
        .pipe(sass({
            includePaths: ['bower_components/foundation/scss']
        }))
        .pipe(gulp.dest('./styles/generated'));
});

gulp.task('concat', function () {
   gulp.src(['bower_components/angular/angular.min.js',
             'bower_components/angular-ui-router/release/angular-ui-router.min.js',
             'bower_components/angular-foundation/mm-foundation.min.js',
             'bower_components/angular-animate/angular-animate.min.js',
             'js/controllers/*.js',
             'app.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./js/generated'))
});

gulp.task('watch', function () {
    gulp.watch('styles/scss/*.scss', ['sass']);
    gulp.watch(['app.js', 'js/controllers/*.js'], ['concat']);
});

gulp.task('default', function () {
    gulp.start('sass');
    gulp.start('concat');
    gulp.start('watch');
});

gulp.task('build', function(cb) {
    exec('bower install', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
        if (err === null) {
            gulp.start('default');
        }
    });
});