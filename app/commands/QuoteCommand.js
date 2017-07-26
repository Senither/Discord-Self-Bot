/** @ignore */
const Command = require('./../Command');

class QuoteCommand extends Command {

    /**
     * Sets up the command by providing the prefix, command trigger, any
     * aliases the command might have and additional options that
     * might be usfull for the abstract command class.
     */
    constructor() {
        super('-', 'q');
    }

    /**
     * Executes the given command.
     *
     * @param  {IUser}     sender   The Discordie user object that ran the command.
     * @param  {IMessage}  message  The Discordie message object that triggered the command.
     * @param  {Array}     args     The arguments that was parsed to the command.
     * @return {mixed}
     */
    onCommand(sender, message, args) {
        if (args.length === 0) {
            return message.delete();
        }

        let quote = bot.Messages.get(args[0]);
        if (quote === null || quote === undefined) {
            return message.delete();
        }

        if (quote.content.length === 0) {
            return message.delete();
        }

        return app.envoyer.sendEmbededMessage(message, {
            color: 0x3498DB,
            description: quote.content,
            author: {
                name: quote.author.username,
                icon_url: `https://cdn.discordapp.com/avatars/${quote.author.id}/${quote.author.avatar}.png?size=128`
            }
        }).then(() => message.delete());
    }
}

module.exports = QuoteCommand;
