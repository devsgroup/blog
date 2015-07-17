var gulp 		 = require('gulp');
var pumbler 	 = require('gulp-plumber');
var browserSync  = require('browser-sync');
var reload 		 = browserSync.reload;
var imagemin     = require('gulp-imagemin');
var cp           = require('child_process');
var uglify 		 = require('gulp-uglify');
var concat 		 = require('gulp-concat');
var os           = require('os');
var isWindows    = os.type() == 'Windows_NT';

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

//Monta o site do Jekyll
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);

    if (isWindows) {
        return cp.exec('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
    } else {
        return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
    }
});

//Refaz o site e atualiza a página
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

//Espera até que o jekyll-build seja executado e então levanta o servidor utilizando o _site como pasta raiz
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


gulp.task('watch', function (){
	gulp.watch(['*.html','index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
