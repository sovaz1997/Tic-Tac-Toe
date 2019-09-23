const ZERO = 0;
const TIC = 1;
const TAC = 2;


class TicTacToe {
    constructor() {
        this.field = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        this.currentPlayerSymbol = TIC;
    }

    getCurrentPlayerSymbol() {
        if(this.currentPlayerSymbol == TIC) {
            return 'x';
        }

        return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex]) {
            return false;
        }

       /* if(this.isFinished()) {
            return false;
        }*/

        this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
        if(this.currentPlayerSymbol == TIC) {
            this.currentPlayerSymbol = TAC;
        } else {
            this.currentPlayerSymbol = TIC;
        }
    }

    isFinished() {
        return !!(this.getWinner() || this.isDraw());
    }

    checkWinner(num) {
        return (
            this.field[0][0] == num && this.field[0][1] == num && this.field[0][2] == num ||
            this.field[1][0] == num && this.field[1][1] == num && this.field[1][2] == num ||
            this.field[2][0] == num && this.field[2][1] == num && this.field[2][2] == num ||

            this.field[0][0] == num && this.field[1][0] == num && this.field[2][0] == num ||
            this.field[0][1] == num && this.field[1][1] == num && this.field[2][1] == num ||
            this.field[0][2] == num && this.field[1][2] == num && this.field[2][2] == num ||
            
            this.field[0][0] == num && this.field[1][1] == num && this.field[2][2] == num ||
            this.field[0][2] == num && this.field[1][1] == num && this.field[2][0] == num);
    }

    getWinner() {
        if(this.checkWinner(TIC)) {
            return 'x';
        } else if(this.checkWinner(TAC)) {
            return 'o';
        }
        
        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < this.field.length; i++) {
            for(let j = 0; j < this.field[i].length; j++) {
                if(!this.field[i][j]) {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex] == TIC) {
            return 'x';
        } else if(this.field[rowIndex][colIndex] == TAC) {
            return 'o';    
        }

        return null;
    }
}

module.exports = TicTacToe;
