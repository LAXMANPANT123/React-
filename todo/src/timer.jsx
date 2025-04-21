import React, { useEffect } from "react";

const Timer = () => {
    const [time, setTime] = usestate(0);


    useEffect(() => {
        const timer = setInterval(() => setTime(time + 1), 1000);

        return function () {
           console.log("clear old interval");
           clearInterval(timer);
        };
    }, [time]);

    return (
        <div>
        <h1>stopwatch</h1>
        <p>current time is {time}</p>
        </div>
    );
};

export default Timer;
