var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync');
var settings = require('./settings');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean-css');
var webpack = require('webpack');
var config=require('./webpack.config');

//compile, but watch with browsersync
gulp.task('sass', done=>{
    gulp.src(settings.sassDir+'main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(settings.cssDir))
    .pipe(browsersync.stream())
    done();
});

//compile css from sass
gulp.task('compile', done=>{
    gulp.src(settings.sassDir+'main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(settings.sassDir+'temp'))
    done();
});

//prefix
gulp.task('prefix', (done)=>{
    gulp.src(settings.sassDir+'temp/main.css')
    .pipe(autoprefixer({
        cascade : false
    }))
    .pipe(gulp.dest(settings.sassDir));
    done();
})

gulp.task('compress', done=>{
    gulp.src(settings.sassDir+'main.css')
    .pipe(clean())
    .pipe(gulp.dest(settings.cssDir));
    done();
});

gulp.task('minify', ()=>{
   return gulp
   .src(settings.jsDir+"main-bundle.js")
   .pipe(uglify())
   .pipe(gulp.dest(settings.jsDir+"temp"));
});

gulp.task('build', gulp.series(['compile','prefix','compress']));

gulp.task('js', done=>{
   webpack(config,(err,stats)=>{
       if(err){
           console.log(err.toString());
       }
       console.log(stats.toString());
       done();
   })
});

//watch
gulp.task('watch', done=>{
    browsersync.init({
        proxy:'http://ladyj.local'
    });

    gulp.watch([settings.maintheme+'**/*.php', settings.maintheme+ '*.php'],done=>{
        browsersync.reload();
        done();
    });

    gulp.watch([settings.sassDir+'*.scss',settings.sassDir+'**/*.scss'],gulp.series("sass"),done=>{
        browsersync.reload();
        done();
    })

    gulp.watch(settings.jsDir+'modules/**/*.js',gulp.series('js'),done=>{
        browsersync.reload();
        done();
    })
    done();
})