const commando = require("discord.js-commando");

class coinflipcommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "flip",
            group: "fun",
            memberName: "flip",
            description: "flips a coin, landing on either heads or tails",

        })
    }
    async run(message, args)   
    {
        var chance = Math.floor(Math.random() * 2)
        if(chance == 0){
            message.reply("You're coin landed on heads!")
        }
    else
    {
        message.reply("You're coin landed on tails!")
    }
    }
}

module.exports = coinflipcommand