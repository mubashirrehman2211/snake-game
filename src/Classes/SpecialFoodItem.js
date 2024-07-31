export class SpecialFoodItem {
    row = 0
    col = 0
    item = 'increase'

    constructor(row, col, item) {
        this.row = row
        this.col = col
        this.item = this.randomitem()

    }

    randomitem() {
        let items = ['tiger', 'decrease', 'increase', '+200']
        return items[Math.floor(Math.random() * items.length)]

    }


}
