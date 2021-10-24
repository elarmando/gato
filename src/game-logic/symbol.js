
export default class Symbol
{
    constructor()
    {
        this._symbol = "";
    }

    changeToX()
    {
        this._symbol = "X";
    }

    changeToO()
    {
        this._symbol = "O";
    }

    isX()
    {
        return this._symbol === "X";
    }

    isO()
    {
        return this._symbol === "O";
    }

    isUndefined()
    {
        return this._symbol.length == 0;
    }

    copy()
    {
        var symbol = new Symbol();
        symbol._symbol = this._symbol.slice();

        return symbol;
    }

    isEqual(symbol)
    {
        if(symbol instanceof Symbol)
            return symbol._symbol === this._symbol;

        return false;
    }

}