class TicTacToe {
    constructor() {
        this._symbol = 'x';
        this._field = [];
        for(var i=0; i<3; i++){
            this._field[i] = [];
            for(var j=0; j<3; j++) {
                this._field[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this._symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this._field[rowIndex][columnIndex] == null) {
            if (this._symbol == 'x'){
                this._field[rowIndex][columnIndex] = this._symbol;
            }
            if (this._symbol == 'o'){
                this._field[rowIndex][columnIndex] = this._symbol;
            }
            if(this._symbol == 'x'){
                this._symbol = 'o';
            }else{
                this._symbol = 'x';
            }
        }else{
             return this._symbol;
        }
    }

    isFinished() {
        if(this.getWinner() != null || this.isDraw() == true){
            return true;
        }else{
            return false;
        }
    }

    getWinner() {
        var count = 0;
        if(this._field[0][0] == this._field[0][1] && this._field[0][1]== this._field[0][2] && this._field[0][2] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[1][0] == this._field[1][1] && this._field[1][1]== this._field[1][2] && this._field[1][2] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[2][0] == this._field[2][1] && this._field[2][1]== this._field[2][2] && this._field[2][2] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[0][0] == this._field[1][0] && this._field[1][0]== this._field[2][0] && this._field[2][0] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[0][1] == this._field[1][1] && this._field[1][1]== this._field[2][1] && this._field[2][1] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[0][2] == this._field[1][2] && this._field[1][2]== this._field[2][2] && this._field[2][2] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[0][0] == this._field[1][1] && this._field[1][1]== this._field[2][2] && this._field[2][2] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(this._field[2][0] == this._field[1][1] && this._field[1][1]== this._field[0][2] && this._field[0][2] != null){
            count ++;
            if(this._symbol == 'x'){
                return 'o';
            }else{
                return 'x';
            }
        }
        if(count == 0){
            return null;
        }
    }

    noMoreTurns() {
        var empty = 0;
        for(var i=0; i<3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this._field[i][j] == null) {
                    empty++;
                }
            }
        }
        if(empty > 0){
            return false;
        }else{
            return true;
        }
    }

    isDraw() {
        if(this.noMoreTurns() == true && this.getWinner() == null){
            return true;
        }else{
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
