const Commando = require("discord.js-commando");
const discord = require("discord.js");
class PromoteCommand extends Commando.Command {
    constructor(client)
    {
        super(client,
            {
                name: "promote",
                group: "administrator",
                memberName: "promote",
                description: "recommends a staff member for promotion",
            })
    }



    async run(message, args) 
    {
            let promoteuser = message.mentions.members.first();
        if (!promoteuser) {
            message.channel.send("Sorry i couldnt find that user");
            return;
        }
        
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You do not have the permission to promote other users.");
            return;
        }

        let words = args.split("   ");
        let reason = words.slice(1).join("   ");     
        let promoteduser = message.mentions.members.first();


    let promoteuserEmbed = new discord.RichEmbed()
            .setTitle("Promotion Recommendation")
            .setDescription(`Recommended User: "${promoteduser}" , Reason: "${reason}"`)
            .setColor("#2dff2d")
        message.channel.sendEmbed(promoteuserEmbed);
    }
}
module.exports = PromoteCommand;