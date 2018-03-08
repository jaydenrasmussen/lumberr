'use strict';
const c = require('chalk');
module.exports = {
    info,
    warn,
    error,
    success
};
function valid(string) {
    return string && typeof string === 'string' ? string : String(string);
}
function info(string) {
    return console.log(
        `${c.blue('[INFO]')}     ${currentTime()}  ${valid(string)}`
    );
}
function warn(string) {
    return console.log(
        `${c.yellow('[WARN]')}     ${currentTime()}  ${valid(string)}`
    );
}
function error(string) {
    return console.log(
        `${c.red('[ERROR]')}    ${currentTime()}  ${valid(string)}`
    );
}
function success(string) {
    return console.log(
        `${c.green('[SUCCESS]')}  ${currentTime()}  ${valid(string)}`
    );
}
function currentTime() {
    let [date, time] = new Date()
        .toLocaleString('en-US', { hour12: false })
        .split(', ');
    let [month, day, year] = date.split("/");
    (month < 10) ? month = `0${month}` : null;
    (day < 10) ? day = `0${day}` : null;
    return `${year}/${month}/${day} ${time}`;
}
