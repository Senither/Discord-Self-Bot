module.exports = {
    // Connection Handlers
    GATEWAY_READY: require('./handlers/GatewayReadyEvent'),
    GATEWAY_RESUMED: require('./handlers/GatewayResumedEvent'),
    DISCONNECTED: require('./handlers/GatewayDisconnectedEvent'),

    // Text Handlers
    MESSAGE_CREATE: require('./handlers/MessageCreateEvent')
};
