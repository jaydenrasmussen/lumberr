'use strict';
module.exports = args => {
    // @ path should be the fully qualified path (including the filename)
    if (args === undefined) {
        return consoleOnly();
    } else if (args.hasOwnProperty('path') && args.hasOwnProperty('console')) {
        return both(args['path']);
    } else if (args.hasOwnProperty('path')) {
        return fileOnly(args['path']);
    }
};
function validString(string) {
    return typeof string === 'string' ? string : String(string);
}
function validBool(bool) {
    return typeof bool === 'boolean' ? bool : !!bool;
}
function consoleOnly() {
    return require('./lib/lib.console');
}
function fileOnly(path) {
    return require('./lib/lib.file')(path);
}
function both(path) {
    let file = require('./lib/lib.file')(path);
    let std = require('./lib/lib.console');
    return {
        info: function(msg) {
            std.info(msg);
            file.info(msg);
        },
        warn: function(msg) {
            std.warn(msg);
            file.warn(msg);
        },
        error: function(msg) {
            std.error(msg);
            file.error(msg);
        },
        success: function(msg) {
            std.success(msg);
            file.success(msg);
        }
    };
}
