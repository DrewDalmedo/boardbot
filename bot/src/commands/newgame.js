import { SlashCommandBuilder } from '@discordjs/builders';
import { GameManager, gameTypes } from '../game-manager.js';
import startNewGame from '../internal/startNewGame.js';

export default {
    data: new SlashCommandBuilder()
        .setName('newgame')
        .setDescription('Start a new game!'),
    async execute(interaction) {
        const gameManager = new GameManager(); 

        interaction.guild.channels.create(gameManager.getID(), {
            type: 'GUILD_TEXT',
            permissionOverwrites: [{
                id: interaction.guild.id,
                allow: ['VIEW_CHANNEL'],
                deny: ['SEND_MESSAGES'],
            }]
        }) 
            .then(channel => {
                console.info(`channel created. [ name: ${gameManager.getID()} | ID: ${channel.id} | type: text ]`)
                interaction.reply(`Your room is ready! Head over to channel <#${channel.id}>` )
                startNewGame.phaseOne(interaction, gameManager, channel);
            })
            .catch(error => console.error(`Failed to create channel ${gameManager.getID()}: ${error}`));


    }
};