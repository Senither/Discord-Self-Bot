/** @ignore */
const _ = require('lodash');
/** @ignore */
const chalk = require('chalk');
/** @ignore */
const moment = require('moment');

class Logger {

    constructor() {
        /**
         * The logger levels and their colors.
         *
         * @type {Object}
         */
        this.levels = {
            info: 'cyan',
            warn: 'yellow',
            error: 'red'
        };

        /**
         * A list of valid colors that can be used with chalk.
         *
         * @type {Array}
         */
        this.chalkColors = [
            'bold', 'dim', 'italic', 'underline', 'inverse', 'strikethrough', 'black',
            'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'bgBlack',
            'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'
        ];
    }

    /**
     * Sends a info message to the console.
     *
     * @param {String}  message  The message that should be logged.
     */
    info(message) {
        return this.log('info', ' INFO: ', message);
    }

    /**
     * Sends a warn message to the console.
     *
     * @param {String}  message  The message that should be logged.
     */
    warn(message) {
        return this.log('warn', ' WARN: ', message);
    }

    /**
     * Sends a error message to the console.
     *
     * @param {String}  message  The message that should be logged.
     */
    error(message) {
        return this.log('error', 'ERROR: ', message);
    }

    /**
     * Logs the given message.
     *
     * @param  {String}   level          The level of the log message.
     * @param  {String}   title          The title of the log message.
     * @param  {String}   message        The message that should be logged.
     * @param  {Boolean}  withTimestamp  Determins if the log message should use timestamps.
     * @return {void}
     */
    log(level, title, message, withTimestamp = true) {
        if (typeof message === 'function') {
            message = message(chalk);
        }

        if (_.isObjectLike(message) && message.constructor.name === 'Array') {
            message = message.join(' ');
        }

        if (!withTimestamp) {
            return console.log(`${this.getLoggerLevel(level, title)} ${message}`);
        }
        return console.log(`[${this.currentTime}] ${this.getLoggerLevel(level, title)} ${message}`);
    }

    /**
     * Get the logger level format from the given leel and title.
     *
     * @param  {String}  level  The level of the log message.
     * @param  {String}  title  The title of the log message.
     * @return {String}
     */
    getLoggerLevel(level, title) {
        if (this.levels.hasOwnProperty(level)) {
            level = this.levels[level];
        }

        if (this.chalkColors.indexOf(level) === -1) {
            level = 'gray';
        }

        return chalk[level].bold(title);
    }

    /**
     * Get the current time in an hours:minutes:seconds format.
     *
     * @return {String}
     */
    get currentTime() {
        return chalk.cyan(moment().format('HH:mm:ss'));
    }
}

module.exports = new Logger;
