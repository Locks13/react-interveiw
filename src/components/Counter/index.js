import { useState } from "react";

export default function Counter(){

    const [counter, setCounter] = useState (0);

    return(
        <div className="counter">
            <p>
                {counter}
            </p>

            <div className="left">
                <button onClick={() => {setCounter (counter + 1)}}>
                    Increase Counter
                </button>
            </div>
            <div className="right">
                <button onClick={() => {setCounter (counter - 1)}}>
                    Dencrease Counter
                </button>
            </div>
        </div>
    );
}