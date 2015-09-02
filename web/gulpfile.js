var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec;

gulp.task('sass', function () {
    gulp.src(['./public/modules/**/styles/*.scss',
              './public/app.scss'])
        .pipe(sass({
            includePaths: ['./public/lib/foundation/scss']
        }))
        .pipe(gulp.dest('./public/assets/styles'));
});

gulp.task('concat', function () {
   gulp.src(['./public/lib/angular/angular.min.js',
             './public/lib/angular-ui-router/release/angular-ui-router.min.js',
             './public/lib/angular-foundation/mm-foundation.min.js',
             './public/lib/angular-animate/angular-animate.min.js',
             './public/modules/**/controllers/*.js',
             './public/modules/**/*.js',
             './public/application.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('watch', function () {
    gulp.watch('./public/modules/**/styles/*.scss', ['sass']);
    gulp.watch(['./public/modules/application.js', './public/modules/***/**/*.js'], ['concat']);
});

gulp.task('default', function () {
    gulp.start('sass');
    gulp.start('concat');
    gulp.start('watch');
});

// gulp.task('build', function(cb) {
//     exec('bower install', function(err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
//         cb(err);
//         if (err === null) {
//             gulp.start('default');
//         }
//     });
// });