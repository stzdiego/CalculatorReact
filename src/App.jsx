import { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent.jsx';
import DisplayComponent from './components/DisplayComponent.jsx';

function App() {
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState(null);

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const evalDisplay = display.replace(/X/g, '*').replace(/÷/g, '/');
                const evalResult = eval(evalDisplay);
                setResult(evalResult);
                setDisplay(evalResult.toString());
            } catch {
                setResult('Error');
                setDisplay('');
            }
        } else if (value === 'C') {
            setDisplay('');
            setResult(null);
        } else {
            if (result !== null) {
                if (['+', '-', 'X', '÷'].includes(value)) {
                    setDisplay(result.toString() + value);
                } else {
                    setDisplay(value);
                }
                setResult(null);
            } else {
                if (display === '' && ['+', '-', 'X', '÷'].includes(value)) {
                    return;
                }
                setDisplay(display + value);
            }
        }
    };

    return (
        <>
            <h1>Calculator</h1>
            <div className="card">
                <DisplayComponent text={result !== null ? result : display} />
                <div className="buttons">
                    {['C', '', '', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn, index) => (
                        <ButtonComponent
                            key={index}
                            text={btn}
                            onClick={() => handleButtonClick(btn)}
                            className={btn === '' ? 'btn-none' : btn === '+' ? 'btn-double' : ['+', '-', 'X', '÷', '=', 'C'].includes(btn) ? 'btn-operator' : 'btn'}
                        />
                    ))}
                </div>
            </div>
            <p className="read-the-docs">Created by Diego Santacruz.</p>
        </>
    );
}

export default App;