const test = require('tape');
const watchPaper = require('./watch-paper');

test('watchPaper start and stop', function (assert) {
    watchPaper.start({
        noop: true
    }, () => {
        assert.comment('server starts ok');
        watchPaper.stop(() => {
            assert.comment('server stops ok');
            assert.end();
        });
    });
});
