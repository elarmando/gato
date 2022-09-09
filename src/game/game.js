import React from 'react';
import "./game.css"
import Board from "../game-logic/board"
import Cell from "./cell"

export default function Game() 
{
    const [board, setBoard] = React.useState(new Board());

    React.useEffect(()=>{
        if(board.isFinished())
        {
            alert("finished");
        }
    });

    const onClick = (row, col) =>
    {
        if(board.isFinished())
            return;
            
        var copyBoard = board.copy();
        copyBoard.play(row, col);

        setBoard(copyBoard);
    }

    const renderCell = (rowIndex, colIndex) =>
    {
        return <Cell row={rowIndex + 1} 
                     col={colIndex + 1} 
                     symbol={board.getSymbol(rowIndex, colIndex)}
                     click={()=> onClick(rowIndex, colIndex)}
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