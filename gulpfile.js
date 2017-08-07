const plugins = require('./build/js-build-plugins-list');
const gulp = plugins.gulp;
const runTask = plugins.runTask;
const waitFor = plugins.waitFor;

// Tasks //

// Async waits:

// On Complete //
gulp.task('default', [], function(){
	// Gulp code here. most of the time it is setting up watch commands.
});
