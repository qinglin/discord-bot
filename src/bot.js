require('dotenv').config();
const {Client,Intents} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
console.log(process.env.DISCORDJS_BOT_TOKEN);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}!`)
    message.channel.send({
        embed: {
            title: 'Please login into the website',
            url: 'https://flashsigner.com/connect?success_url=http%3A%2F%2Flocalhost%3A3000%2FFlashsigner%3Faction%3Dlogin%26extra%3D%2522http%253A%252F%252Flocalhost%253A3000%252F%2522&dapp_name=Rostra&dapp_logo=http%3A%2F%2Flocalhost%3A3000%2Flogo512.png',
        },
    });
});

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);


