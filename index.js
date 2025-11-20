const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

const ANNOUNCEMENTS_CHANNEL_ID = "1440885887327277196";
const MESSAGE = "Hello everyone! This is an automated announcement.";
const INTERVAL = 60 * 1000; // every 1 minute

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const guild = client.guilds.cache.first();
    const channel = guild.channels.cache.get(ANNOUNCEMENTS_CHANNEL_ID);
    if (!channel) return console.log("Announcements channel not found!");

    channel.send(MESSAGE); // first message
    setInterval(() => {
        channel.send(MESSAGE);
    }, INTERVAL);
});

client.login(process.env.TOKEN);
