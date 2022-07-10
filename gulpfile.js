import gulp from 'gulp';

import { path } from './config/path.js';
import { plugin } from './config/plugin.js';

global.app = {
    gulp: gulp,
    path: path,
    plugin: plugin,
    isProd: process.argv.includes('--production'),
    isDev: !process.argv.includes('--production'),
};

import { clean } from './config/tasks/clean.js';
import { html } from './config/tasks/html.js';
import { scss } from './config/tasks/scss.js';
import { images, webp } from './config/tasks/images.js';
import { scripts } from './config/tasks/scripts.js'
import { server } from './config/tasks/server.js';
import { fonts } from './config/tasks/fonts.js';

const watch = () => {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.images, webp);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.scripts, scripts);
};

export const cls = clean;

export const ft = fonts;

export const build = gulp.series(clean, html, scss, webp, images, scripts, fonts );
export default gulp.series(clean, html, scss, webp, images, scripts, fonts, gulp.parallel(watch, server));