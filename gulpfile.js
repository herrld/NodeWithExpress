var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFiles = ['*.js','src/**/*.js'];
gulp.task('style', function(){
    
    return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish',{
        verbose:true
    }));
});

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib'
    }
    return gulp.src('./source/views/*.html')
    .pipe(wiredep(options))
    .pipe(gulp.dest('./source/views'));
})

