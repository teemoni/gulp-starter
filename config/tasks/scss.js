import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefix from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import webpCSS from 'gulp-webpcss';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.app.scss, { sourcemaps: app.isDev })
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefix({
        cascade: true,
        grid: true,
        overrideBrowserslist: ['last 5 versions', 'IE 11', 'iOS 12']
    }))
    .pipe(webpCSS())
    .pipe(app.plugin.gulpIf(app.isProd, app.gulp.dest(app.path.build.css)))
    .pipe(app.plugin.gulpIf(app.isProd, cleanCSS()))
    .pipe(app.plugin.gulpIf(app.isProd, app.plugin.rename({
        suffix: '.min'
    })))
    .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: '.' }))
    .pipe(app.plugin.bSync.stream());
};