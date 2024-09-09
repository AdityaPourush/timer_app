"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [time, setTime] = useState(0); // to track time
  const [isRunning, setIsRunning] = useState(false); // to track weather timer is running or not

  // to update time
  useEffect(() => {
    let timeOutId;
    if(isRunning){
      timeOutId = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000)
    }

    return() => clearInterval(timeOutId);
  }, [isRunning])

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  }

  const timeFormat = (seconds) => {

    let secs = seconds % 60;
    let mins = Math.floor(seconds / 60);
    let hrs = Math.floor(mins / 60);

    return(
      <div className="flex pt-4 items-center text-3xl justify-center">
        <h2>{hrs.toString().padStart(2, '0')}</h2> : <h2>{mins.toString().padStart(2, '0')}</h2> : <h2>{secs.toString().padStart(2, '0')}</h2>
      </div>
    )
  }

  // console.log(time);

  return (
    <div className="w-[40vw] mt-[20vh] mx-auto border border-gray-100 p-5">
      <h2 className="text-3xl font-semibold text-center">Timer</h2>
        {timeFormat(time)}
      <div className="flex items-center justify-center gap-x-4 pt-4">
        <button onClick={() => setIsRunning(true)} className="border border-gray-200 px-5 py-2">Start</button>
        <button onClick={() => setIsRunning(false)} className="border border-gray-200 px-5 py-2">Pause</button>
        <button onClick={handleReset} className="border border-gray-200 px-5 py-2">Reset</button>
      </div>
    </div>
  );
}
