import webpackStream from 'webpack-stream';

export const scripts = () => {
    return app.gulp.src(app.path.app.scripts)
    .pipe(webpackStream({
        mode: app.isProd ? 'production' : 'development',
        output: {
            filename: 'bundle.js'
        },
        devtool: "source-map",
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }))
    .pipe(app.gulp.dest(app.path.build.scripts))
    .pipe(app.plugin.bSync.stream());
};


