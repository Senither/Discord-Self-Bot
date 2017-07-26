/** @ignore */
const _ = require('lodash');
/** @ignore */
const Command = require('./../Command');

class MeCommand extends Command {

    /**
     * Sets up the command by providing the prefix, command trigger, any
     * aliases the command might have and additional options that
     * might be usfull for the abstract command class.
     */
    constructor() {
        super('-', 'me');
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

        let color = 0x2A2C31;
        let description = args.join(' ');

        if (args.length > 1 && args[0].length === 6 && /[A-F0-9]{6}/i.test(args[0])) {
            color = parseInt(args[0], 16);
            description = _.drop(args).join(' ');
        }

        return app.envoyer.sendEmbededMessage(message, {
            description, color
        }).then(() => message.delete());
    }
}

module.exports = MeCommand;
