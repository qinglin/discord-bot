const Discord = require("discord.js")
const client = new Discord.Client()

const token = "OTQ0OTU2Nzg2ODc0Njc1MjAx.YhJJlg.Q0PFQFK3tHUw6nU17Q4OteVGO4Y"
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
})

client.login(token)