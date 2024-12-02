import { useState } from "react";

function Calculator(){
    const [Cal, setCal] = useState(0);
    const increment = 
    () =>{
        setCal(Cal +1);
    }
    return(
        <div id="calculator">
            <section>
                <h2>{Cal}</h2>
                <button onClick={increment}>increment</button>
                <button onClick={ () =>
                   { if(Cal > 0){
                        setCal(Cal -1);
                    }
                }
            }>increment</button>
            </section>
        </div>
    )
}
export default Calculator;