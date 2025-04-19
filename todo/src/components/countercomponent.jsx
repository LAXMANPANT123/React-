import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setcount] = useState(12);
    const [value, setvalue] = useState("laxman");

    return (
        <div>
            <p>Count Component - {count} </p>
            <h6>number is {count%2==0 ? "even" : "odd"}</h6>
            <p>my name is - {value}</p>
            <button onClick={()=> setvalue("laxman.jr")}>change my name</button>
            <button onClick={() => setcount(count + 1)}> increment</button>
            <button onClick={() => setcount(count-1)}>Decrement</button>
        </div>
    );
};

export default CounterComponent;
