import {Box} from "@/Classes/Box.js";
import {useGameStore} from "@/Store/game.js";
import {SoundHelper} from "@/Helper/SoundHelper";

export class Snake {
    boxes = []
    direction = 'R'

    constructor() {
        const game = useGameStore()
        const centerBox = Math.floor(game.gridBoxCount / 2)
        this.boxes.push(new Box(centerBox, centerBox, 'green'))
        this.boxes.push(new Box(centerBox, centerBox - 1, 'red'))
        this.boxes.push(new Box(centerBox, centerBox - 2, 'blue'))
    }

    get head() {
        return this.boxes[0]
    }

    get gameOverOnBoundries() {
        const game = useGameStore()
        return (this.head.col === (game.gridBoxCount - 1) && this.direction === 'R')
            || (this.head.row === (game.gridBoxCount - 1) && this.direction === 'D')
            || (this.head.row === 0 && this.direction === 'U')
            || (this.head.col === 0 && this.direction === 'L')
    }

    moveSnake() {
        const game = useGameStore()
        let head = this.head
        if (this.gameOverOnBoundries) {
            game.gameOver = true
            SoundHelper.play('hit')
            clearInterval(game.snackInterval)
            return
        }

        this.checkHitSnack()

        head.moveSnake(this.direction)
        if (head.col === game.foodItem.col && head.row === game.foodItem.row) {
            this.eatFood()
            return
        }

        for (let i = 1; i < this.boxes.length; i++) {
            let box = this.boxes[i]
            let prevBox = this.boxes[i - 1]
            box.followHead(prevBox)
        }

        if (head.col === game.specialItem.col && head.row === game.specialItem.row) {

            switch (game.specialItem.item) {
                case 'tiger':
                    SoundHelper.play('specialItem')
                    game.speed += 100
                    break;

                case 'decrease':
                    this.boxes.pop()
                    game.speed -= 20
                    this.checkBoxLength()
                    SoundHelper.play('specialItem')
                    break;

                case 'increase':
                    let createBox = new Box()
                    this.boxes.push(createBox)
                    createBox.color = game.foodItem.color
                    game.speed += 20

                    this.checkLastNewBoxes()
                    SoundHelper.play('specialItem')
                    break;

                case '+200':
                    game.yourScore += 200
                    SoundHelper.play('specialItem')
                    break;
            }
            this.isSpecialItem()
        }
    }

    checkBoxLength() {
        const game = useGameStore()
        if (this.boxes.length === 1) {
            game.gameOver = true
            SoundHelper.play('hit')
        }
    }

    eatFood() {
        const game = useGameStore()
        let createBox = new Box()
        createBox.color = game.foodItem.color
        this.boxes.splice(1, 0, createBox)

        this.checkNewBoxes()


        createBox.followHead(this.head)

        for (let i = 2; i < this.boxes.length; i++) {
            let box = this.boxes[i]
            box.lastPosition()
        }

        game.generateFoodItem()
        game.startFoodTimer()
        this.isSpecialItem()

        SoundHelper.play('crunch')
        game.yourScore += 50
        game.speed += 20
    }

    checkNewBoxes() {
        const game = useGameStore()
        if (this.boxes[1].color === this.boxes[2].color &&
            this.boxes[2].color === this.boxes[3].color
        ) {
            game.showConfetti(this.boxes[2])
            this.boxes.splice(1, 3)
            this.checkBoxLength()
            game.yourScore += 100
            game.speed - 60
            SoundHelper.play('pop')
        }
    }

    checkLastNewBoxes() {
        const game = useGameStore()
        let lastBox = this.boxes.length - 1
        let secondLastBox = this.boxes.length - 2
        let thirdLastBox = this.boxes.length - 3

        if (this.boxes[lastBox].color === this.boxes[secondLastBox].color &&
            this.boxes[secondLastBox].color === this.boxes[thirdLastBox].color
        ) {
            game.showConfetti(this.boxes[secondLastBox])
            this.boxes.splice(thirdLastBox, 3)
            this.checkBoxLength()
            SoundHelper.play('pop')
        }
    }

    checkHitSnack() {
        for (let i = 1; i < this.boxes.length; i++) {
            if (this.head.row === this.boxes[i].row &&
                this.head.col === this.boxes[i].col) {
                const game = useGameStore()
                game.gameOver = true
                SoundHelper.play('hit')
                clearInterval(game.snackInterval)
            }
        }
    }

    addScoreInList() {
        const game = useGameStore()
        game.playerDetail.playerScore = game.yourScore
        game.playerDetail.NumOfMush = this.boxes.length - 1
        if (game.playerDetail.playerName === '')
            return
        game.scoreList.push({
            score: game.playerDetail.playerScore,
            name: game.playerDetail.playerName,
            date: game.playerDetail.date,
            numberOfMush: game.playerDetail.NumOfMush,
        })

        // sort by score
        game.scoreList.sort((p1, p2) => (p1?.score < p2?.score) ? 1 : (p1?.score > p2?.score) ? -1 : 0)

        // take only 10 item from array
        game.scoreList = game.scoreList.slice(0, 10)

        localStorage.setItem('scoreList', JSON.stringify(game.scoreList))

        game.playerDetail = {
            playerScore: null,
            playerName: null,
            date: null,
            NumOfMush: null,
        }
        game.saveScore = true
    }

    isSpecialItem() {
        const game = useGameStore()
        if (game.randomNumber >= 0.7) {
            game.disableItem = false
            game.generateSpecialFoodItem()
            game.startSpecialFoodTimer()
        } else {
            game.disableItem = true
            game.startSpecialFoodTimer()
        }
    }
}
