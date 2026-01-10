import React, {useState, useRef} from 'react'

function Alarm() {
    const [alarmTime, setAlarmTime] = useState();
    const alarmTimeRef = useRef(null);
    function handleAlarmInput(e){
        alarmTimeRef.current = e.target.value
        setAlarmTime(alarmTimeRef.current) 
    }
  return (
    <div>
      <h1>Alarm Page</h1>
      <p>This is the Alarm page content.</p>
      <p>{alarmTime}</p>
      <input type="time" step='1' value={alarmTime} onChange={handleAlarmInput}/>
      <button onClick={handleAlarmInput}>Set Alarm</button>
    </div>
  );
}

export default Alarm;