import React, {useState, useRef, useEffect} from 'react'

function StopWatch(){
    const[isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState()
    const intervalTimeRef = useRef(null)
    const startTimeRef = useRef(0)


    useEffect(
        () => {
            if(isRunning){
                intervalTimeRef.current = setInterval(() => {
                    setElapsedTime(Date.now() - startTimeRef.current)
                }, 10);
            }
            return ()=>{
                clearInterval(intervalTimeRef.current)
            }
        }, [isRunning]
    )

    function start(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime

    }

    function reset(){
        setIsRunning(false)
        setElapsedTime(0)
    }

    function stop(){
        setIsRunning(false)
    }

    function timeFormat(){
        let hours = Math.floor(elapsedTime/(1000*60*60))
        let minutes = Math.floor(elapsedTime/(1000*60)%60)
        let seconds = Math.floor(elapsedTime/(1000)%60)
        let milleseconds = Math.floor(elapsedTime%(1000)/10)
        return `${hours}:${minutes}:${seconds}:${milleseconds}`
    }

    return(
        <div>
           <h1>{timeFormat()}</h1>
           <button onClick={start}>Start</button> 
           <button onClick={reset}>Reset</button>
           <button onClick={stop}>Stop</button>
        </div>
    )
}
export default StopWatch