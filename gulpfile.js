const gulp = require('gulp')
const babel = reuquire('gulp-babel')
const ts = require('gulp-typescript')
const del =require('del')
gulp.task('clean',async function(){
    await del('lib/**')
    await del('es/**')
    await del('dist/**')
})

gulp.task('cjs',function(){
    return gulp.src(['./es/**/*.js'])
    .pipe(babal({
        configFile:'../.babelrc'
    }))
    .pipe(gulp.dest('lib'))
})