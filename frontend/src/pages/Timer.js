import { useEffect, useState } from 'react'
import '../styles/Timer.css'

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
            <h2>Timers</h2>
            <p> This will display all the timers and allow user to share their timer with others.</p>
            <div className='timers'>
                {timers && timers.map((timer) => (
                    <p key={timer._id}>
                        <h3>{timer.name}</h3> 
                        <span>own by ownerID: {timer.ownerID}</span>
                        <p>
                            starting time was {timer.startingTime} sec and there is {timer.timerLength} sec left.
                        </p>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Timer