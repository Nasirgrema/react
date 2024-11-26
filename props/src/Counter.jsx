import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <center>
                <h1>{count}</h1>
                <button onClick={increment}>increment</button>
                <button onClick={
                    () => {
                        if(count > 0){
                            setCount(count - 1);
                        }
                    }
                }> Decrement</button>
                </center>
        </div>
    );
}
export default Counter;