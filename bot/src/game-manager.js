// emulates enums (no enum support in vanilla JS)
export const gameTypes = {
    TEST_GAME:          Symbol("test"),
    GUESSING_GAME:      Symbol("guessing")
}

export class GameManager {
    constructor() {
        // generate random alphanum id for game instance
        this.id = Math.random().toString(36).substring(2,7);
    }

    getID() {
        return this.id;
    }

};