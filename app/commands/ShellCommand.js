/** @ignore */
const Process = require('child_process');
/** @ignore */
const Command = require('./../Command');

class ShellCommand extends Command {

    /**
     * Sets up the command by providing the prefix, command trigger, any
     * aliases the command might have and additional options that
     * might be usfull for the abstract command class.
     */
    constructor() {
        super('-', 'shell', ['s']);
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
        message.edit(app.envoyer.prepareMessage(null, '**Input:**\n```bash\n:command```', {
            command: args.join(' ')
        }));

        try {
            let result = Process.execSync(args.join(' ')).toString();

            if (result.trim().length === 0) {
                return app.envoyer.sendSuccess(message, 'The command was executed but returned no result.');
            }

            if (result.length > 1890) {
                result = result.substr(0, 1890).trim() + '...';
            }

            return app.envoyer.sendNormalMessage(message, '**Output:**\n```bash\n:result```', {result});
        } catch (err) {
            return app.envoyer.sendError(message, err.message);
        }
    }
}

module.exports = ShellCommand;
