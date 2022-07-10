import fs from 'node:fs';
import path from 'node:path';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import 'dotenv/config';

const commands = [];
const commandsPath = path.join(path.resolve('src'), 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file=>file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = (await import(filePath)).default

    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.APPID, process.env.GUILDID), { body: commands })
    .then(() => console.log('Successfully registered application commands'))
    .catch(console.error);