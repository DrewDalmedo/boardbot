import { SlashCommandBuilder } from "@discordjs/builders";

class User {
    data = () => {
        return new SlashCommandBuilder()
            .setName('user')
            .setDescription('Replies with user info');
    }

    execute = interaction => {
        interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`)
    }

    toJSON() {
        return {
            data: this.data,
            execute: this.execute,
        }
    }
}

export default {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
    }
};
