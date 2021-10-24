import React from 'react';
import "./game.css"
import Board from "../game-logic/board"
import Cell from "./cell"

export default class Game extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            board : new Board()
        };
    }

    onClick(row, col)
    {
        if(this.state.board.isFinished())
            return;
            
        var copyBoard = this.state.board.copy();
        copyBoard.play(row, col);

        this.setState({board: copyBoard});
    }

    componentDidUpdate()
    {
        if(this.state.board.isFinished())
        {
            alert("finished");
        }
    }

    renderCell(rowIndex, colIndex)
    {
        return <Cell row={rowIndex + 1} 
                     col={colIndex + 1} 
                     symbol={this.state.board.getSymbol(rowIndex, colIndex)}
                     click={()=> this.onClick(rowIndex, colIndex)}
                     />;
    }
    
    render()
    {
        return <div className="game">
                    {this.renderCell(0, 0)}
                    {this.renderCell(0, 1)}
                    {this.renderCell(0, 2)}

                    {this.renderCell(1, 0)}
                    {this.renderCell(1, 1)}
                    {this.renderCell(1, 2)}

                    {this.renderCell(2, 0)}
                    {this.renderCell(2, 1)}
                    {this.renderCell(2, 2)}
                </div>;
    }
}