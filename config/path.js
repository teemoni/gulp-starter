const buildDir = './dist';
const appDir = './app';

export const path = {
    app: {
        html: `${appDir}/views/*.html`,
        scss: `${appDir}/scss/style.scss`,
        images: `${appDir}/images/**/*.{jpg,png,ico,svg}`,
        scripts: `${appDir}/scripts/index.js`,
        fonts: `${appDir}/fonts/*.{woff,woff2}`,
    },
    watch: {
        html: `${appDir}/views/**/*.html`,
        scss: `${appDir}/scss/**/*.scss`,
        images: `${appDir}/images/**/*.{jpg,png,ico,svg}`,
        scripts: `${appDir}/scripts/**/*.js`,
    },
    build: {
        html: `${buildDir}/`,
        css: `${buildDir}/`,
        images: `${buildDir}/img/`,
        scripts: `${buildDir}/js/`,
        fonts: `${buildDir}/fonts/`,
    },
    clean: buildDir,
    baseDir: buildDir,
};