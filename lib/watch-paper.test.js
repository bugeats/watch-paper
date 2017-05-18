'use strict';

const test = require('tape');
const watchPaper = require('./watch-paper');

test('watch-paper module ok', function (assert) {
    assert.ok(watchPaper, 'module ok');
    assert.end();
});
