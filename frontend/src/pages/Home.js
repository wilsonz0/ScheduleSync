import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <header className="App-header">
                <h1>ScheduleSync</h1>
            </header>
        
            <div className="buttons">
                <a href="/schedule">
                    <img id="schedule" src={require('../images/calendar-icon.png')} alt="Button"/>
                </a>
            
                <a href="/timer">
                    <img id="timer" src={require('../images/timer-icon.png')} alt="Button"/>
                </a>
            </div>
        </div>
    )
}

export default Home