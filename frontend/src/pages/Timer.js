import { useEffect, useState } from 'react'
import '../styles/Timer.css'
import Countdown from '../components/Countdown.js'

// testing
import testData from "../test.json"

const Timer = () => {
    const [timers, setTimers] = useState(null)

    const [newHours, setNewHours] = useState('');
    const [newMinutes, setNewMinutes] = useState('');
    const [newSeconds, setNewSeconds] = useState('');

    function addNewTimer() {
        if (!newHours || !newMinutes || !newSeconds) {
            alert('Please enter valid time values for the new timer.');
            return;
        }
    
        const totalSeconds = parseInt(newHours) * 3600 +
                            parseInt(newMinutes) * 60 +
                            parseInt(newSeconds);
        
        const newTimer = {
            name: 'the fourth',
            ownerID: 4,
            startingEpoch: 50,
            timerLength: totalSeconds,
            
        };

        // TODO: add to database (which should update the screen immediately)
        testData.push(newTimer)         // this is a test

        setNewHours('');
        setNewMinutes('');
        setNewSeconds('');
    }



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
                <div className="inputWrapper">
                    <input id="hours" placeholder="h" value={newHours} onChange={(e) => setNewHours(e.target.value)}/>
                    <span>:</span>
                    <input id="minutes" placeholder="m" value={newMinutes} onChange={(e) => setNewMinutes(e.target.value)}/>
                    <span>:</span>
                    <input id="seconds" placeholder="s" value={newSeconds} onChange={(e) => setNewSeconds(e.target.value)}/>
                </div>
                <button id="createButton" onClick={addNewTimer}>Create</button>
            </div>
            <div className='timers'>
                {timers && timers.map((timer) => (
                    <Countdown timer={timer} 
                            startingEpoch={timer.startingEpoch} 
                            timerLength={timer.timerLength}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timer