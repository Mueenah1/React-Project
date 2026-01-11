import React, {useState, useRef, useEffect} from 'react'
function Timer(){
    const [inputHour, setInputHour] = useState(0)
    const [inputMin, setInputMin] = useState(0)
    const [inputSec, setInputSec] = useState(0)

    const [timer, setTimer] = useState()
    const secondCountDownRef = useRef(null)

    function handleInputHour(e){
        setInputHour(e.target.value)
    }
    function handleInputMin(e){
        setInputMin(e.target.value)
    }
    function handleInputSec(e){
        setInputSec(e.target.value)
    }

    function updateTimer(){
        setTimer(`${inputHour}:${inputMin}:${inputSec}`)
    }
    function duration(){
        let totalTime = parseInt(inputHour) * 3600
        totalTime += parseInt(inputMin) * 60
        totalTime += parseInt(inputSec)
        console.log(totalTime)
        //const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3')
        //while(totalTime!==0){
            //totalTime--
          //  console.log(totalTime)
        //}
        //alert('Time up')
        //return audio.play
        return totalTime
    }

    useEffect(
        () => {
            let count = duration()
            if(count !== 0){
                setInterval(
                ()=>{
                    
                    count -=1
                    console.log(count)
                }, 1000
            )
            }
        }, [secondCountDownRef]
    )
    


    function handleTimer(){
        updateTimer()
        duration()
    }

    return(
        <div>
            <h1>Timer</h1>
            <p>Your timer is set to the next {timer} </p>
            <input type="number" name="hour" id="" value={inputHour} onChange={handleInputHour}/> <input type="number" name="minute" id="" value={inputMin} onChange={handleInputMin} /> <input type="number" name="seconds" id="" value={inputSec} onChange={handleInputSec} />
            <button onClick={handleTimer}>SetTimer</button>
        </div>
    )
}

export default Timer