// dotenv setup
import 'dotenv/config';

// import these Discord.js modules as local constants
import { Client, Intents } from 'discord.js';

// create a new bot client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// once the client is ready, run the code in the anonymous function:
client.once('ready', () => {
    console.log('Ready!');    
});

client.on('interactionCreate', async interaction => {
    // no support for interations except commands yet
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    }
    else if (commandName === 'user') {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
    }
});

// log the bot into discord with the token stored in .env:
client.login(process.env.BOT_TOKEN);

