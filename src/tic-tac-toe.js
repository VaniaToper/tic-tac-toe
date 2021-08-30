class TicTacToe {
  constructor() {
    this.desk = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentSymbol = 'x';
    this.win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.desk[rowIndex][columnIndex] === null) {
      this.desk[rowIndex][columnIndex] = this.currentSymbol;
      if (this.currentSymbol === 'x') return (this.currentSymbol = 'o');
      else this.currentSymbol = 'x';
    }
  }

  isFinished() {
    if (this.getWinner() || this.isDraw()) return true;
    else return false;
  }

  getWinner() {
    let arrDesk = this.desk.flat();
    for (let k = 0; k < this.win.length; k++) {
      const [z, x, c] = this.win[k];
      if (arrDesk[z] === arrDesk[x] && arrDesk[z] === arrDesk[c])
        return arrDesk[z];
    }
    return null;
  }

  noMoreTurns() {
    if (this.desk.flat().indexOf(null) === -1) return true;
    else return false;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) return true;
    else return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.desk[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
