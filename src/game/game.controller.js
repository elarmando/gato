import Board from '../game-logic/board'

export default class GameController
{
    //views
    updateBoadView;

    //state
    board;

    constructor()
    {
        this.board = new Board();
    }

    onClick(row, col)
    {
        if(this.board.isFinished())
            return;
            
        this.board = this.board.copy();
        this.board.play(row, col);

        this.rendeBoard();
    }


    rendeBoard()
    {
        if(this.updateBoadView)
            this.updateBoadView(this.board);
    }


}