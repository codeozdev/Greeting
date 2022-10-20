import { useState } from 'react'
import './App.css'

let time = new Date().toLocaleTimeString()

function App() {
    const [ctime, setCtime] = useState(time)

    const style = {}

    let hour = new Date().getHours()
    let text = ''
    if (hour > 7 && hour < 12) {
        text = 'Good Morning'
        style.color = 'blue'
    } else if (hour > 12 && hour < 19) {
        text = 'Good Afternoon'
        style.color = 'green'
    } else {
        text = 'Good Night'
        style.color = 'red'
    }

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCtime(time)
    }

    setInterval(UpdateTime, 1000)

    return (
        <>
            <h1>{ctime}</h1>
            <h3>
                Hello sir, <span style={style}>{text}</span>
            </h3>
        </>
    )
}

export default App
