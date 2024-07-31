import {defineStore} from 'pinia'
import {FoodItem} from "@/Classes/FoodItem";
import {SoundHelper} from "@/Helper/SoundHelper";
import {SpecialFoodItem} from "@/Classes/SpecialFoodItem";
import moment from 'moment'

export const useGameStore = defineStore('game', {
    state: () => ({
        // GAME BOARD
        gridSize: 630,
        gridBoxCount: 21,

        // SNAKE PROPERTIES
        snake: null,
        speed: 140,
        gameOver: false,
        paused: false,

        // SNAKE FOOD
        foodItem: null,
        pressBtn: null,
        foodTimer: null,
        specialFood: null,
        specialItem: null,
        snackInterval: null,
        showSpecialItem: false,
        confettiCanvas: null,
        foodAppearDelay: 9000,
        randomNumber: '',
        disableItem: false,

        // YOUR SCORE
        playerDetail: {
            playerName: '',
            playerScore: 0,
            date: moment().format("DD-MM-YYYY"),
            NumOfMush: 0,
        },
        yourScore: 0,
        scoreList: [],

        // SETTING STORE
        musicVolume: 50,
        vibrate: true,
        setting: false,
        HOF: false,
        pauseMenu: false,
        saveScore: false,
        introPopUp: true,

        // START COUNT DOWN
        count3: false,
        count2: false,
        count1: false,
    }),

    // Getters Or Computed Propertis

    getters: {
        gridBoxSize() {
            return this.gridSize / this.gridBoxCount
        }
    },

    // Methods OR Functions

    actions: {
        restartGame() {
            this.gameOver = false
            window.location.reload()
            this.getSound()
            this.vibrateSound()
        },

        resumeGame() {
            setTimeout(() => {
                this.paused = false
            }, 1000)
            this.pauseMenu = false
            this.getSound()
            this.vibrateSound()
        },

        generateFoodItem() {
            let row = Math.floor(Math.random() * this.gridBoxCount)
            let col = Math.floor(Math.random() * this.gridBoxCount)

            this.foodItem = new FoodItem(row, col)

            if (this.disableItem === true) {
                return this.randomNumber = Math.random()
            }
        },

        generateSpecialFoodItem() {
            let row = Math.floor(Math.random() * this.gridBoxCount)
            let col = Math.floor(Math.random() * this.gridBoxCount)

            this.specialItem = new SpecialFoodItem(row, col)
        },

        StartGame() {
            this.startSnakeTimer()
            this.startFoodTimer()
            this.startSpecialFoodTimer()
        },

        startSnakeTimer() {
            if (this.snackInterval) clearInterval(this.snackInterval)
            this.snackInterval = setInterval(() => {
                if (this.paused) return
                this.snake.moveSnake()
            }, this.speed)
        },

        startFoodTimer() {
            if (this.foodTimer) clearInterval(this.foodTimer)
            this.foodTimer = setInterval(() => {
                if (this.paused) return
                if (this.gameOver) return
                this.generateFoodItem()
            }, this.foodAppearDelay)
        },

        startSpecialFoodTimer() {
            if (this.specialFood) clearInterval(this.specialFood)
            this.specialFood = setInterval(() => {
                this.generateSpecialFoodItem()
            }, 5000)
        },

        changeDirection(direction) {
            if (this.paused || this.gameOver) return
            if (this.snake.direction === 'U' && direction === 'D') return
            if (this.snake.direction === 'D' && direction === 'U') return
            if (this.snake.direction === 'L' && direction === 'R') return
            if (this.snake.direction === 'R' && direction === 'L') return

            this.snake.direction = direction
            this.vibrateSound()
        },


        keyboardBtn() {
            window.addEventListener('keydown', e => {
                this.pressBtn = e.key

                if (this.pressBtn === 'Escape') {
                    this.resumeGame()
                    return
                }

                if (this.pressBtn === ' ') {
                    this.gameMenu()
                    return
                }

                let keyboardBtn = {ArrowUp: 'U', ArrowDown: 'D', ArrowRight: 'R', ArrowLeft: 'L'}

                let direction = keyboardBtn[this.pressBtn]

                if (!direction) return
                this.changeDirection(direction)
            })
        },

        resizeGameBoard() {
            this.gridSize = Math.min(window.innerWidth, window.innerHeight)
        },

        async showConfetti(box) {
            if (!this.confettiCanvas) {
                let gb = document.querySelector('#game-board')
                if (!gb) return
                this.confettiCanvas = document.createElement('canvas')
                this.confettiCanvas.style.position = 'absolute'
                this.confettiCanvas.style.left = 0
                this.confettiCanvas.style.top = 0
                gb.appendChild(this.confettiCanvas)
            }

            this.confettiCanvas.confetti = await confetti.create(this.confettiCanvas, {resize: true})

            const colors = {
                blue: '#1c91c4',
                yellow: '#e2db1c',
                green: '#1cac42',
                red: '#fb0001',
            }

            this.confettiCanvas.confetti({
                particleCount: 100,
                spread: 70,
                colors: [colors[box.color], colors[box.color], colors[box.color], "#ffffff"],
                origin: {x: box.col / this.gridBoxCount, y: box.row / this.gridBoxCount},
            })
        },

        soundInterval() {
            setInterval(() => {
                SoundHelper.play('gameplayMusic')
            }, 18200)
        },

        setSound() {
            localStorage.setItem('volume', this.musicVolume)
            this.getSound()
        },

        getSound() {
            this.musicVolume = JSON.parse(localStorage.getItem('volume'))
            SoundHelper.gameplayMusic.volume = this.musicVolume / 100
        },

        toggleVirateBtn() {
            this.vibrate = !this.vibrate
            localStorage.setItem('vibrate', this.vibrate)
        },

        vibrateSound() {
            this.vibrate = JSON.parse(localStorage.getItem('vibrate'))
            if (this.vibrate === true) {
                SoundHelper.play('vibration')
            }
        },

        gameMenu() {
            this.paused = true
            this.pauseMenu = true
        },

        hideIntro() {
            this.introPopUp = true
            localStorage.setItem('hideIntro', JSON.stringify(this.introPopUp))
        },

        startCount() {
            this.count3 = true
            setTimeout(() => {
                this.count3 = false
                this.count2 = true
            }, 1000)
            setTimeout(() => {
                this.count2 = false
                this.count1 = true
            }, 2000)
            setTimeout(() => {
                this.count1 = false
                this.StartGame()
            }, 3000)
        },

        quitGame() {
            setTimeout(() => {
                window.location.reload()
            }, 500)
        },


    }
})
