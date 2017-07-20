/** @ignore */
const util = require('util');
/** @ignore */
const EventHandler = require('./EventHandler');

/**
 * Emitted when a user sends a text message in any valid text channel in a guild.
 *
 * @extends {EventHandler}
 */
class MessageCreateEvent extends EventHandler {

    /**
     * The event-handler that is executed by Discords event dispatcher.
     *
     * @param  {GatewaySocket} socket  The Discordie gateway socket
     * @return {mixed}
     */
    handle(socket) {
        if (bot.User.id !== socket.message.author.id) {
            return;
        }

        //
    }
}

module.exports = new MessageCreateEvent;
