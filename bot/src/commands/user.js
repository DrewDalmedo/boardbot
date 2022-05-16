import { SlashCommandBuilder } from "@discordjs/builders";

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
    }
};
