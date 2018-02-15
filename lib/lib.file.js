'use strict';
const m = require('moment');

module.exports = path => {
    const file = path;
    return {
        info,
        warn,
        error,
        success
    };
    function writeToLog(path, msg) {
        let stream = fs.createWriteStream(path, { flags: 'a' });
        stream.write(`${msg}\n`);
        stream.end();
    }
    function info(msg) {
        writeToLog(file, `[INFO]     ${m().format('L LTS')}   ${msg}`);
    }
    function warn(msg) {
        writeToLog(file, `[WARN]     ${m().format('L LTS')}   ${msg}`);
    }
    function error(msg) {
        writeToLog(file, `[ERROR]    ${m().format('L LTS')}   ${msg}`);
    }
    function success(msg) {
        writeToLog(file, `[SUCCESS]  ${m().format('L LTS')}   ${msg}`);
    }
};
