import React from 'react';
import "./game.css"
import Board from "../game-logic/board"
import GameController from './game.controller';
import Cell from "./cell"

export default function Game() 
{
    //state
    const [board, setBoard] = React.useState(new Board());

    //controller
    const [controller, setController] = React.useState(new GameController());

    //render first time
    React.useEffect(()=>{
        controller.updateBoadView = (board) => setBoard(board)
    },[]);

     //render first time
     React.useEffect(()=>{
        setTimeout(()=>{
            if (board.isFinished())
                alert("finished");
        }, 100);
     });

    const onClick = (row, col) => {
        controller.onClick(row, col);
    }

    const renderCell = (rowIndex, colIndex) => {
        return <Cell row={rowIndex + 1}
            col={colIndex + 1}
            symbol={board.getSymbol(rowIndex, colIndex)}
            click={() => onClick(rowIndex, colIndex)}
        />;
    }

    return <div className="game">

        {renderCell(0, 0)}
        {renderCell(0, 1)}
        {renderCell(0, 2)}

        {renderCell(1, 0)}
        {renderCell(1, 1)}
        {renderCell(1, 2)}

        {renderCell(2, 0)}
        {renderCell(2, 1)}
        {renderCell(2, 2)}
    </div>;

}