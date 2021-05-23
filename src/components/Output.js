import '../App.css';

function Output({theme, convertNumber, operator, firstVal, secondVal}) {
    return (
        <div className="output" style={{backgroundColor: theme.backgroundScreen}}>
            <div className="output__number" style={{color: theme.textScreen}}>
            {`${convertNumber(firstVal)} ${operator} ${convertNumber(secondVal)}`}
            </div>
        </div>
    )
}

export default Output
