'use strict';
process.title = 'Watchdog';

global.app = require('./app');

const Discordie = require('discordie');

app.logger.info('Hello World');
