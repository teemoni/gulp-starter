import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webpImage from 'gulp-webp';


// jpg, png, webp
export const images = () => {
    return app.gulp.src(app.path.app.images)
    .pipe(newer('./dist/images/'))
    .pipe(app.plugin.gulpIf(app.isProd, imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 3,
        svgoPlugins: [
            {
                removeViewBox: true
            }
        ]
    })))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugin.bSync.stream({
        once: true
    }));
};


// svgo
export const webp = () => {
    return app.gulp.src(app.path.app.images)
    .pipe(newer('./dist/images/'))
    .pipe(webpImage())
    .pipe(app.gulp.dest(app.path.build.images));
};