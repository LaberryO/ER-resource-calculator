function NpCalc() {
    return (
        <div className="box">
            <div className="np2won">
                <Np />
                <Won />
            </div>
            <div className="won2np">
                <Won />
                <Np />
            </div>
        </div>
    )
}

function Np() {
    return (
        <div className="np">
            <div className="calc-image"></div>
            <input type="text" name="" id="" />
        </div>
    )
}

function Won() {
    return (
        <div className="won">
            <div className="calc-image"></div>
            <input type="text" name="" id="" />
        </div>
    )
}

export default NpCalc;