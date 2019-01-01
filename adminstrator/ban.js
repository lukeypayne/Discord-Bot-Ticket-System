const Commando = require("discord.js-commando");

class bancommand extends Commando.Command {
    constructor(client) {
        super(client,
            {
                name: "ban",
                group: "administrator",
                memberName: "ban",
                description: "Bans a user",
            })
    }



    async run(message, args) {
        let baneduser = message.mentions.members.first();
        if (!baneduser) {
            message.channel.send("Sorry i couldnt find that user");
            return;
        }
        if(!baneduser.banable) { 
            message.channel.send("Can't ban that user.") 
            return;
        }
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send("You do not have the permission to ban other users.");
            return;
        }
        let words = args.split("   ");
        let reason = words.slice(1).join("   ");
        kickeduser.ban(reason)

    }

}

module.exports = bancommand