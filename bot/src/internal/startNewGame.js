import { GameManager } from "../game-manager.js";

export default {
    async phaseOne(interaction, game, channel) {
        channel.send(`Hello! <@${interaction.member.id}>`);
      
    }
}