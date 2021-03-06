"use strict";
const { cyan, yellow, red, green } = require("kleur");
const fs = require("fs");
const path = require("path");

class Log {
    constructor() {
        this.level = "console";
    }
    options(args) {
        this.level = "file";
        if (args) {
            this.file = args.file;
            this.path = args.path;
        } else {
            this.file = "output.log";
            this.path = `${process.cwd()}`;
        }
    }
    error(msg) {
        let consoleMsg = `[  ${red.bold(
            "ERROR"
        )}  ]  ${this.now()}  ${this.vString(msg)}`;
        let fileMsg = `[  ERROR  ]  ${this.now()}  ${this.vString(msg)}`;
        if (this.level === "file") {
            this.fileOut(fileMsg);
            return console.log(consoleMsg);
        }
        return console.log(consoleMsg);
    }
    success(msg) {
        let consoleMsg = `[ ${green.bold(
            "SUCCESS"
        )} ]  ${this.now()}  ${this.vString(msg)}`;
        let fileMsg = `[ SUCCESS ]  ${this.now()}  ${this.vString(msg)}`;
        if (this.level === "file") {
            this.fileOut(fileMsg);
            return console.log(consoleMsg);
        }
        return console.log(consoleMsg);
    }
    info(msg) {
        let consoleMsg = `[   ${cyan.bold(
            "INFO"
        )}  ]  ${this.now()}  ${this.vString(msg)}`;
        let fileMsg = `[   INFO  ]  ${this.now()}  ${this.vString(msg)}`;
        if (this.level === "file") {
            this.fileOut(fileMsg);
            return console.log(consoleMsg);
        }
        return console.log(consoleMsg);
    }
    warn(msg) {
        let consoleMsg = `[   ${yellow.bold(
            "WARN"
        )}  ]  ${this.now()}  ${this.vString(msg)}`;
        let fileMsg = `[   WARN  ]  ${this.now()}  ${this.vString(msg)}`;
        if (this.level === "file") {
            this.fileOut(fileMsg);
            return console.log(consoleMsg);
        }
        return console.log(consoleMsg);
    }
    vString(string) {
        return string && typeof string === "string" ? string : String(string);
    }
    now() {
        let [date, time] = new Date()
            .toLocaleString("en-US", { hour12: false })
            .split(", ");
        let [month, day, year] = date.split("/");
        month < 10 ? (month = `0${month}`) : null;
        day < 10 ? (day = `0${day}`) : null;
        return `${year}/${month}/${day} ${time}`;
    }
    fileOut(msg) {
        let s = fs.createWriteStream(path.join(this.path, this.file), {
            flags: "a"
        });
        s.write(`${msg}\n`);
        s.end();
    }
}

module.exports = new Log();
