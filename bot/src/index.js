// dotenv setup
import 'dotenv/config';

// import these Discord.js modules as local constants
import { Client, Intents, Collection } from 'discord.js';

import fs from 'node:fs';
import path from 'node:path';

// create a new bot client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// once the client is ready, run the code in the anonymous function:
client.once('ready', () => {
    console.log('Ready!');    
});

client.commands = new Collection();

const commandsPath = path.join(path.resolve('src'), 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = (await import(filePath)).default;

    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    // check if the interaction is a registered command
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
    }
});

// log the bot into discord with the token stored in .env:
client.login(process.env.BOT_TOKEN);

