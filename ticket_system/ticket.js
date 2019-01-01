const commando = require("discord.js-commando");
const discord = require("discord.js");

class channelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "ticket",
            group: "ticket_system",
            memberName: "ticket",
            description: "Use this command to create a ticket"
        });
    }

    async run(message, args)
    {
        if(message.channel.name === "general")
        {
         //Find the role 'Owner'
            var ownerRole = message.guild.roles.find((role) => role.name === "Owner");

            // Find category 'Bots'
            var category = message.guild.channels.find((role) => role.name === 'Testing');

            // Add category if not existing
            if (!category) await message.guild.createChannel('Testing', 'category').then(p => category = p);

            // Create channel for ticket
            return await message.guild.createChannel('suport-ticket-'+message.author.username)

                // If ticket channel is created
                .then(async channel => {
            

                    // Set parent to the category channel
                    await channel.setParent(category);
                    await channel.setTopic(message.author.id);

                  
                    // Add permissions for creator
                    channel.overwritePermissions(message.author, {
                        "READ_MESSAGE_HISTORY": true,
                        "SEND_MESSAGES": true,
                        "VIEW_CHANNEL": true,
                        "EMBED_LINKS": true,
                        
                    });

                 // Add permissions for Owner
                 channel.overwritePermissions(ownerRole, {
                    "READ_MESSAGE_HISTORY": true,
                    "SEND_MESSAGES": true,
                    "VIEW_CHANNEL": true,
                    "EMBED_LINKS": true,
                });

                // Remove permissions for everyone else
                channel.overwritePermissions(message.guild.id, {
                    "READ_MESSAGE_HISTORY": false,
                    "SEND_MESSAGES": false,
                    "VIEW_CHANNEL": false,
                });
                /// Creates the embed message
                let ticketChannelEmbed = new discord.RichEmbed()
                .setTitle(`Hello ${message.author.username}, welcome to our Bot-support service!`)
                .setDescription("We have received your request and have notified all support Staff.")
                .setColor("#2dff2d")
                .addField("Please be patient whilst waiting for support staff to respond.", "Once you have finished your discussion and your question has been answered please use the command:\n__**>>close**__")
                .addField("Just remember to be patient and well mannered.", "Thank you.")
                .setFooter("In the meantime you can start explaining what your issue is.");

            message.channel.sendEmbed(ticketChannelEmbed);
            })
        }
}

}
module.exports = channelCommand;