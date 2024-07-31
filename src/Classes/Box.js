import {useGameStore} from "@/Store/game";

export class Box {
    row = 0
    col = 0
    lastRow = 0
    lastCol = 0
    color = 'green'

    constructor(row, col, color = 'green') {
        this.row = row
        this.col = col
        this.color = color
    }


    get isHead() {
        const game = useGameStore()
        return this === game.snake.head
    }

    updatePosition() {
        this.lastCol = this.col
        this.lastRow = this.row
    }

    followHead(box) {
        this.updatePosition()

        this.row = box.lastRow
        this.col = box.lastCol
    }

    lastPosition() {
        this.updatePosition()

        this.row = this.lastRow
        this.col = this.lastCol
    }

    moveSnake(direction) {
        this.updatePosition()

        switch (direction) {
            case 'U':
                this.row--
                break;

            case 'D':
                this.row++
                break;

            case 'L':
                this.col--
                break;

            case 'R':
                this.col++
                break;

        }
    }

}
