export const server = () => {
    app.plugin.bSync.init({
        ui: false,
        notify: false,
        open: false,
        server: {
            baseDir: app.path.baseDir
        }
    });
};