import { useEffect, useState } from 'react'
import '../styles/Timer.css'
import Countdown from '../components/Countdown.js'

// testing
import testData from "../test.json"

const Timer = () => {
    const [timers, setTimers] = useState(null)

    useEffect(() => {
        const fetchTimers = async () => {
            // this is a test to lessen the amount of requests to the database
            setTimers(testData)

            // uncomment below for proper fetching
            // const response = await fetch('/timers')
            // const json = await response.json()

            // if (response.ok) {
            //     setTimers(json)
            // }
        }

        fetchTimers()
    }, [])

    return (
        <div className="timer">
            <header id="timer-header">
                <a href="/">
                    <span>(BACK)</span>
                </a>
                <h2>Timers</h2>
            </header>
            
            <div id="createBox">
                <input type="text" id="countdownInput"/>
                <button id="createButton">Create</button>
            </div>
            <div className='timers'>
                {timers && timers.map((timer) => (
                    <div class="timerBoxes" key={timer._id}>
                        <h3>{timer.name}</h3> 
                        <span>own by ownerID: {timer.ownerID}</span>
                        <Countdown startingEpoch={timer.startingEpoch} timerLength={timer.timerLength} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timer