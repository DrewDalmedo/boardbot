// dotenv setup
require("dotenv").config();

// discord.js variables
const { Client, Intents } = require('discord.js');

// create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// once the client is ready, run the code in the anonymous function:
client.once('ready', () => {
    console.log('Ready!');    
});

// log the bot into discord with the token stored in .env:
client.login(process.env.BOT_TOKEN);

