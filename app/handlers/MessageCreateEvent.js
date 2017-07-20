/** @ignore */
const _ = require('lodash');
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

        let message = socket.message.content;
        let command = this.getCommand(message);

        // Checks to see if a valid command was found from the message context, if a
        // command was found the onCommand method will be called for the handler.
        if (command !== null) {
            let user = socket.message.author;

            app.logger.info(`Executing Command <${socket.message.resolveContent()}>`);

            return command.handler.onCommand(
                user, socket.message, _.drop(socket.message.content.trim().split(' ')), socket
            );
        }
    }

    /**
     * Gets the command with matching triggers to what the user sent.
     *
     * @param  {String} message  The message that was sent by the user.
     * @return {Command|null}
     */
    getCommand(message) {
        let trigger = _.toLower(message.split(' ')[0].trim());

        for (let commandName in app.commands) {
            let command = app.commands[commandName];

            for (let triggerIndex in command.triggers) {
                if (trigger === command.prefix + command.triggers[triggerIndex]) {
                    return command;
                }
            }
        }

        return null;
    }
}

module.exports = new MessageCreateEvent;
