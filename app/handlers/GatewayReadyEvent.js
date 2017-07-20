/** @ignore */
const moment = require('moment');
/** @ignore */
const EventHandler = require('./EventHandler');

/**
 * Emitted when the Discordie instance is ready to use. All objects except
 * unavailable guilds and offline members of large guilds (250+ members)
 * will be in cache when this event fires. You can request offline
 * members using client.Users.fetchMembers().
 *
 * See documentation for IUserCollection.fetchMembers.
 *
 * @see http://qeled.github.io/discordie/#/docs/GATEWAY_READY
 * @see http://qeled.github.io/discordie/#/docs/IUserCollection?p=IUserCollection%23fetchMembers
 *
 * @extends {EventHandler}
 */
class GatewayReadyEvent extends EventHandler {

    /**
     * The event-handler that is executed by Discords event dispatcher.
     *
     * @param  {GatewaySocket} socket  The Discordie gateway socket
     * @return {mixed}
     */
    handle(socket) {
        app.logger.log('cyan', '', chalk => {
            return chalk.cyan([
                `\n================= Started at ${chalk.yellow(moment().format('H:mm:ss'))} =================`,
                `| Logged in as ${chalk.yellow(`${bot.User.username}#${bot.User.discriminator}`)}.`,
                `| Connected to ${chalk.yellow(bot.Guilds.length)} servers and ${chalk.yellow(bot.Channels.length)} channels`,
                `| Logging was successful. Waiting for orders...`,
                `| Use ${chalk.yellow('Control + C')} to exit. Or ${chalk.yellow('Cmd + C')} for Mac.`,
                `=======================================================\n`
            ].join('\n'));
        }, false);
    }
}

module.exports = new GatewayReadyEvent;
