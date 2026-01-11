import React, {useState, useRef, useEffect} from 'react'

function Alarm() {
    const [alarmTime, setAlarmTime] = useState();
    const [inputValue, setInputValue] = useState('');
    const alarmTimeRef = useRef(null);
    
    const alarmRing = useRef(null)
    function handleAlarmInput(e){
        setInputValue(e.target.value)
    }

    function setAlarm(){
        setAlarmTime(inputValue);
        alarmTimeRef.current = Date.now();
        let hours = inputValue.slice(0,2);
        console.log(hours)
    }
    useEffect(
      () => {
      const ring = setTimeout(() => {
        alert('Alarm ringing!');
        const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3').play();
        audio.play()
      }, alarmRing.current)
      return () => clearTimeout(ring);
      },[]
    )
  return (
    <div>
      <h1>Alarm Page</h1>
      <p>This is the Alarm page content.</p>
      <p>{alarmTime}</p>
      <input type="time" step="1" value={inputValue} onChange={handleAlarmInput}/>
      <button onClick={setAlarm}>Set Alarm</button>
    </div>
  );
}

export default Alarm;