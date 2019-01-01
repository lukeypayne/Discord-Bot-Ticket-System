const Commando = require("discord.js-commando");

class kickcommand extends Commando.Command {
    constructor(client) {
        super(client,
            {
                name: "kick",
                group: "moderator",
                memberName: "kick",
                description: "Kicks a user",
            })
    }



    async run(message, args) {
        let kickeduser = message.mentions.members.first();
        if (!kickeduser) {
            message.channel.send("Sorry i couldnt find that user");
            return;
        }
        if(!kickeduser.kickable) { 
            message.channel.send("Can't kick user.") 
            return;
        }
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("You do not have the permission to kick other users.");
            return;
        }
        let words = args.split("   ");
        let reason = words.slice(1).join("   ");
        kickeduser.kick(reason)

    }

}

module.exports = kickcommand