import { useEffect, useState } from 'react'

const Schedule = () => {
    const [schedules, setSchedules] = useState(null)
    useEffect(() => {
        const fetchSchedules = async () => {
            // this is a test to lessen the amount of requests to the database
            // setSchedules(testData)

            // uncomment below for proper fetching
            // const response = await fetch('/schedules')
            // const json = await response.json()

            // if (response.ok) {
            //     setSchedules(json)
            // }
        }

        fetchSchedules()
    }, [])

    return (
        <div className="schedule">
            <h2>Schedules</h2>
            <p> This will display all the schedules and allow user to share their schedule with others.</p>

            <div className='schedules'>
                {schedules && schedules.map((schedule) => (
                    <p key={schedule._id}>
                        <h3>{schedule.name}</h3> 
                        <span>own by ownerID: {schedule.ownerID}</span>
                        {/* further display items will be added */}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Schedule