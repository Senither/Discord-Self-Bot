module.exports = {
    handlers: require('./HandlerRegistry'),

    // Utilities
    envoyer: require('./utils/envoyer/Envoyer'),

    // Bot Version
    version: require('../package').version
};
