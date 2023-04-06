import {
    useState,
    useRef
  } from "react"; 
  
function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    };

    function minus(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
        // Add the code for the minus function 
    };

    function times(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
        // Add the code for the plus function 
    };

    function divide(e) {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
        // Add the code for the divide function 
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = 0;
        // Add the code for the resetInput function 
    };

    function resetResult(e) {
        e.preventDefault();
        setResult((prevVal) => prevVal * 0);
        // Add the code for the resetResult function 
    };

    return (
        <div className="Calculator">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>{result}</p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />
                <button onClick={plus}>add</button>
                <button onClick={minus}>subtract</button>
                <button onClick={times}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>

            </form>
        </div>
    );
}

export default Calculator;
