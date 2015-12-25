var gulp = require('gulp');
var del = require('del');

gulp.task('clean:test', function(cb) {
    del([
        'test/aaa.txt',
        '!test/b.txt'
    ], cb);
});
gulp.task('default', ['clean:test']);
