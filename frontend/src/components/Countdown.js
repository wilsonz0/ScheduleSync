import { Component } from "react";

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingEpoch: props.startingEpoch,
            timerLength: props.timerLength,
        }
    }

    start() {
        // this function will fire when the timer has started
    }

    end() {
        // this function will fire when the timer has finished
    }

    // returns the current epoch in seconds 
    getCurrentEpoch() {
        return parseInt(new Date().valueOf() / 1000);
    }

    render() {
        const { startingEpoch, timerLength } = this.state;
        
        // testing purposes
        console.log("se: " + startingEpoch, "tl: " + timerLength)
        const testingEpoch = this.getCurrentEpoch() - 20
        /***************************/

        const timeDifference = this.getCurrentEpoch() - testingEpoch
        let remainingSeconds = timerLength - timeDifference

        console.log("te: " + testingEpoch, "td: " + timeDifference, "rs: " + remainingSeconds)
        const hour = parseInt(remainingSeconds / (60 * 60))
        remainingSeconds -= hour * 60 * 60;
        const minutes = parseInt(remainingSeconds / 60);
        remainingSeconds -= minutes * 60;

        return (
            <div className="countdown">  
                {hour < 10 ? '0' : ''}{hour < 0 ? '0': hour}:
                {minutes < 10 ? '0' : ''}{minutes < 0 ? '0': minutes}:
                {remainingSeconds < 10 ? '0' : ''}{remainingSeconds < 0 ? '0': remainingSeconds}
            </div>
        )
    }

}

export default Countdown