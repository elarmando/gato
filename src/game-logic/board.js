import Symbol from "./symbol"

export default class Board
{

    constructor()
    {
        this._board = [];
        this._isTurnX = true;
        this._initBoard();
    }

    getSymbol(row, col)
    {
        return this._board[row][col];
    }

    setSymbol(row, col, symbol)
    {
        this._board[row][col] = symbol;
    }

    setXTurn(turn)
    {
        this._isTurnX = turn;
    }

    isXTurn()
    {
        return this._isTurnX;
    }

    play(row, col)
    {
        var symbol = this._board[row][col];

        if(!symbol.isUndefined())
            return;

        if(this._isTurnX)
            symbol.changeToX();
        else
            symbol.changeToO();

        this._isTurnX = !this._isTurnX;
    }

    isFinished()
    {
        var finished = this._sameCol() ||
                       this._sameRow() ||
                       this._sameDiagonal();

        return finished;
    }

    copy()
    {
        var board = new Board();

        for(var row = 0; row < 3; row++)
        {
            for(var col = 0; col < 3; col++)
            {
                var cell = this.getSymbol(row, col).copy();
                board.setSymbol(row, col, cell);
            }
        }

        board.setXTurn(this._isTurnX);

        return board;
    }

    _initBoard()
    {
        for(var i = 0; i < 3; i++)
        {
            var row = [];

            for(var j = 0; j < 3; j++)
            {
                var symbol = new Symbol();
                row.push(symbol);
            }

            this._board.push(row);
        }
    }

    _sameSymbolRow(row)
    {
        return this._areEqualANotEmpty(this._board[row][0], 
                              this._board[row][1], 
                              this._board[row][2]);
    }

    _sameSymbolCol(col)
    {
        return this._areEqualANotEmpty(this._board[0][col], 
            this._board[1][col], 
            this._board[2][col]);
    }

    _sameRow()
    {
        return this._sameSymbolRow(0) ||
               this._sameSymbolRow(1) ||
               this._sameSymbolRow(2);
    }

    _sameCol()
    {
        return this._sameSymbolCol(0) ||
               this._sameSymbolCol(1) ||
               this._sameSymbolCol(2);
    }

    _sameDiagonal()
    {
        return this._areEqualANotEmpty(this._board[0][0], 
                             this._board[1][1], 
                             this._board[2][2]) 
        || this._areEqualANotEmpty(this._board[0][2], 
                         this._board[1][1], 
                         this._board[2][0]);
    }

    _areEqualANotEmpty(symbol1, symbol2, symbol3)
    {
        if(this._areEmpty(symbol1, symbol2, symbol3))
            return false;
            
        return symbol1.isEqual(symbol2) &&
                symbol2.isEqual(symbol3);
    }

    _areEmpty(symbol1, symbol2, symbol3)
    {
        if(symbol1.isUndefined())
            return true;

        if(symbol2.isUndefined())
            return true;

        if(symbol3.isUndefined())
            return true;

        return false;
    }
}
