require('dotenv').config();
const {Client} = require("discord.js");
const client = new Client();
console.log(process.env.DISCORDJS_BOT_TOKEN);
client.login(process.env.DISCORDJS_BOT_TOKEN);

// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}!`)
// });
//
// client.on("message", msg => {
//     if (msg.content === "ping") {
//         msg.reply("pong");
//     }
// });
//
