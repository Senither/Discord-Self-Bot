module.exports = {
    commands: require('./CommandRegistry'),
    handlers: require('./HandlerRegistry'),

    // Utilities
    logger: require('./utils/logger/Logger'),
    envoyer: require('./utils/envoyer/Envoyer'),

    // Bot Version
    version: require('../package').version
};
