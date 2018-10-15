'use strict';
//require gulp
var WEB_PORT = 9000;
var APP_DIR = 'app';
var gulp = require('gulp');
var connect = require('connect');
//load plugin
var $ = require('gulp-load-plugins')();

//connect task
/*gulp.task('connect', function() {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.directory('app'));
    require('http').createServer(app)
        .listen(9000)
        .on('listening', function() {
            console.log('Started web server on http://localhost:9000');
        });
});*/
gulp.task('http', function() {
    connect()
        .use(require('connect-livereload')())
        .use(connect.static(APP_DIR))
        .listen(WEB_PORT);
});

//default task
gulp.task('default', [], function() {

});