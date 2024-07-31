import {useGameStore} from "@/Store/game";

export class FoodItem {
    row = 0
    col = 0
    color = 'red'
    age = 0

    constructor(row, col) {
        this.row = row
        this.col = col
        this.color = this.randomColor()
    }

    get disappearing() {
        const game = useGameStore()
        return (game.foodAppearDelay - this.age) < 3000
    }

    randomColor() {
        let colors = ['red', 'green', 'blue', 'yellow']
        return colors[Math.floor(Math.random() * colors.length)]

    }


}
