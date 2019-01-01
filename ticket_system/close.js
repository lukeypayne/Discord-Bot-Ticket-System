const commando = require("discord.js-commando");
const discord = require("discord.js")

class CloseTicketCommand extends commando.Command
{
  constructor(client)
   {
     super(client,{
      name: "close",
      group: "ticket_system",
      memberName: "close",
      description: "closes your ticket"
   });
  
}

async run(message, args)
{
if (message.channel.topic == message.author.id) message.channel.delete()
}
}
module.exports = CloseTicketCommand;