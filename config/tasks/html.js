import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import typograf from 'gulp-typograf';

export const html = () => {
    return app.gulp.src(app.path.app.html)
    .pipe(fileInclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(typograf({ locale: ['ru', 'en-US'] }))
    .pipe(app.plugin.gulpIf(app.isProd, htmlMin({
        useShortDoctype: true
    })))
    .pipe(app.plugin.gulpIf(app.isProd, app.plugin.replace('style.css', 'style.min.css')))
    .pipe(app.plugin.gulpIf(app.isProd, app.plugin.replace('build.js', 'build.min.js')))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugin.bSync.stream());
};