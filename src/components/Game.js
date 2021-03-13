import React, {useState} from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board';
import './board.css'
const Game  = () => {
 
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(history[stepNumber]);


    const handleClick = (i) => {
        const timeHistory = history.slice(0,stepNumber + 1);
        const current = timeHistory[stepNumber];
        const squares = [...current];
	    if (winner || squares[i]) return;
	    squares[i] = xIsNext ? "X" : "O";
        setHistory([...timeHistory,squares]);
        setStepNumber(timeHistory.length);
	    setXisNext(!xIsNext);
    } 

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step,move) => {
            const destination = move ? `Go to move#${move}` : 'Go to Start';
            return (
                <li key={move}>
                     <button onClick = {() => jumpTo(move)}>{destination}</button>
                </li>
            ) 
        })
    )

    return (
        <div>
            <h1>Tic Tac Toe Game</h1>
            <Board squares={history[stepNumber]} onClick={handleClick}/>
            <div className="winner">
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}<br/>
                    {renderMoves()}
                </p>
            </div> 
        </div>
    )
}
export default Game;
