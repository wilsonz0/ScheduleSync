
function scheduleClicked() {
    console.log("schedule clicked")
}

function timerClicked() {
    console.log("timer clicked")
}

const Home = () => {
    return (
        <div className="timer">
            <header className="App-header">
                <h1>ScheduleSync</h1>
            </header>
        
            <div className="buttons">
                <button id="schedule" onClick={scheduleClicked}>
                    <img src={require('../images/calendar-icon.png')} alt="Button"/>
                </button>
            
                <button id="timer" onClick={timerClicked}>
                    <img src={require('../images/timer-icon.png')} alt="Button"/>
                </button>
            </div>
        </div>
    )
}

export default Home