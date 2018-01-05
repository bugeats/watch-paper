const server = require('./server');

const watchPaper = {};

watchPaper.start = function (options = {}, cb) {
    const defaults = Object.assign({
        port: 3000
    }, options);

    server.listen(defaults.port, () => {
        process.stdout.write(`\n[watch-paper] started on port ${ defaults.port } (press CTRL-C to quit)\n`);
        cb && cb();
    });
};

watchPaper.stop = function (cb) {
    server.close();
    cb && cb();
};

module.exports = watchPaper;
