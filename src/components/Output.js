import '../App.css';

function Output({theme, output, convertNumber, operator}) {
    return (
        <div className="output" style={{backgroundColor: theme.backgroundScreen}}>
            <div className="output__number" style={{color: theme.textScreen}}>
            {operator === '' ? convertNumber(output) : convertNumber(output.split(operator)[0]) + operator +  convertNumber(output.split(operator)[1])}
            </div>
        </div>
    )
}

export default Output
