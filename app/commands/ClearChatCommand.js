/** @ignore */
const _ = require('lodash');
/** @ignore */
const Command = require('./../Command');

class ClearChatCommand extends Command {

    /**
     * Sets up the command by providing the prefix, command trigger, any
     * aliases the command might have and additional options that
     * might be usfull for the abstract command class.
     */
    constructor() {
        super('-', 'cc');
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
        if (args.length < 1 || !/\d{1,2}/ig.test(args[0])) {
            return;
        }

        return message.channel.fetchMessages(100).then(result => {
            let messages = result.messages.filter(m => {
                return m.id !== message.id &&
                       m.author.id === bot.User.id;
            });

            messages = _.slice(messages, 0, parseInt(args[0], 10));

            let promises = [];
            for (let i in messages) {
                promises.push(messages[i].delete());
            }

            return Promise.all(promises).then(() => {
                return message.delete();
            }).catch(err => app.logger.error(err));
        }).catch(err => app.logger.error(err));
    }
}

module.exports = ClearChatCommand;
