import React, {useState, useRef, useEffect, useCallback} from 'react'
function Timer(){
    const [inputHour, setInputHour] = useState(0)
    const [inputMin, setInputMin] = useState(0)
    const [inputSec, setInputSec] = useState(0)
    const [timerActive, setTimerActive] = useState(false)   

    const [timer, setTimer] = useState()
    const secondCountDownRef = useRef(null)
    const audioRef = useRef(null)

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
    

    const duration = useCallback(() => {
        let totalTime =parseInt(inputSec)
        if(inputMin>= 0 || inputHour >=0 ){
            totalTime += parseInt(inputMin) * 60
            totalTime += parseInt(inputHour) * 3600
        } 
        console.log(totalTime)
        //const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3')
        //while(totalTime!==0){
            //totalTime--
          //  console.log(totalTime)
        //}
        //alert('Time up')
        //return audio.play
        return totalTime*1000
    }, [inputSec, inputMin, inputHour])

    function handleTimer(){
        updateTimer()
        duration()
        setTimerActive(true)
    }


    
    
    useEffect(
        () => {
            if(!timerActive) return

            

    

            const delay = duration()
            if(delay <=0) return

            secondCountDownRef.current = setTimeout(
                () => {
                    audioRef.current = new Audio('https://www.soundjay.com/buttons/sounds/beep-01a.mp3')
                    audioRef.current.loop = true
                    audioRef.current.play()
                }, delay
            )

            return () => {
                clearTimeout(secondCountDownRef.current)
            }
        }, [timerActive, duration]
    )
    
    function handleStopTimer(){
        setTimerActive(false)
        clearTimeout(secondCountDownRef.current)
        secondCountDownRef.current = null
        if (audioRef.current){
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }
    }


    

    return(
        <div>
            <h1>Timer</h1>
            <p>Your timer is set to the next {timer} </p>
            <input type="number" name="hour" id="" value={inputHour} onChange={handleInputHour}/> <input type="number" name="minute" id="" value={inputMin} onChange={handleInputMin} /> <input type="number" name="seconds" id="" value={inputSec} onChange={handleInputSec} />
            <button onClick={handleTimer}>SetTimer</button>
            <button onClick={handleStopTimer}>Stop Timer</button>
        </div>
    )
}

export default Timer