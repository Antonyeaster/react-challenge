import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        document.title = count;
        console.log("count 1 effect");
    }, [count]); // means code only mounts and updates the count everytime
    useEffect(() => {
       console.log("creating timmer");
       const interval = setInterval(() => {
        console.log("Interval executed");
        setTime(time => time + 1)
       }, 1000);
       return () => {
        console.log("Cleaning up")
        clearInterval(interval)
       }
    }, []); // means code only runs once
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
           Increment Count ({count}) 
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter