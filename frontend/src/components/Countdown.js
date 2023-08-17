import React, { useState, useEffect } from "react";

// returns the current epoch in seconds 
function getCurrentEpoch() {
    return parseInt(new Date().valueOf() / 1000);
}

function Countdown({startingEpoch, timerLength}) {
    // testing purposes
    const testingEpoch = getCurrentEpoch() - 40;
    /***************************/
    const timeDifference = getCurrentEpoch() - testingEpoch; // replace with startingEpoch

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(timerLength - timeDifference);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setHours(parseInt(seconds / (60 * 60)));
            setMinutes(parseInt(seconds / 60));
            setSeconds(seconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds])

    return (
        <div className="countdown">  
            {hours < 10 ? '0' : ''}{hours < 0 ? '0': hours}:
            {minutes < 10 ? '0' : ''}{minutes < 0 ? '0': minutes}:
            {seconds < 10 ? '0' : ''}{seconds < 0 ? '0': seconds}
        </div>
    )
}

export default Countdown