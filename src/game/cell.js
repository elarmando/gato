import React from "react"

export default class cell extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        var row = this.props.row;
        var col = this.props.col;
        var symbol = this.props.symbol;
        var symbolClass = "";

        if(symbol.isX())
            symbolClass = "symbolX";
        else if(symbol.isO())
            symbolClass = "symbolO";

        var classname = "cell " + "row-" + (row) + " col-" + (col) + " " + symbolClass;
        console.log(classname);
        return <div className={classname} onClick={this.props.click}></div>
    }

}