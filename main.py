import discord

class MyClient(discord.Client):
    async def on_ready(self):
        print('We have logged in as {0.user}'.format(client))

    async def on_message(self, message):
        if message.author == client.user:
            return

        if message.content.startswith('hello'):
            msg = "Hello" + message.author.name
            await message.channel.send(msg)


client = MyClient()
client.run('')
