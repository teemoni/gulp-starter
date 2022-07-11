export const fonts = () => {
    return app.gulp.src(app.path.app.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts));
};