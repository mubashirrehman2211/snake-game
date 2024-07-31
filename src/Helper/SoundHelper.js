export const SoundHelper = {
    crunch: null,
    hit: null,
    hit2: null,
    pop: null,
    gameplayMusic: null,
    specialItem: null,
    vibration: null,
    menuMusic: null,

    loadGameSounds() {
        this.crunch = new Audio('/sounds/crunch-0.mp3')
        this.hit = new Audio('/sounds/gameOver.mp3')
        this.hit2 = new Audio('/sounds/hit.wav')
        this.pop = new Audio('/sounds/pop.mp3')
        this.gameplayMusic = new Audio('/sounds/gameMusic.mp3')
        this.specialItem = new Audio('/sounds/SpItem.mp3')
        this.vibration = new Audio('/sounds/click.mp3')
        this.menuMusic = new Audio('/sounds/homeMusic.mp3')
    },


    play(sound) {
        this[sound].currentTime = 0
        this[sound].play()
    },
}
