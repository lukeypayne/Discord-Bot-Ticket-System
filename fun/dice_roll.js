const commando = require("discord.js-commando");

class dicerollcommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "roll",
            group: "fun",
            memberName: "roll",
            description: "Rolls a six sided dice !",

        })
    }
    async run(message, args)   
    {
        var diceroll = Math.floor(Math.random() * 6 + 1)

            message.reply("You're dice landed on"  + diceroll)
        }
    }

module.exports = dicerollcommand