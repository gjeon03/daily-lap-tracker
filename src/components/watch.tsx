"use client";

import { useEffect, useState } from "react";
import DigitalNumber from "./digital-number";

export default function Watch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const mSeconds = Math.floor((time % 1000) / 10);

    const displayHours = hours > 99 ? 99 : hours;
    const displayMinutes = minutes > 59 ? 59 : minutes;
    const displaySeconds = seconds > 59 ? 59 : seconds;
    const displayMSeconds = mSeconds > 99 ? 99 : mSeconds;

    return {
      hours: String(displayHours).padStart(2, "0"),
      minutes: String(displayMinutes).padStart(2, "0"),
      seconds: String(displaySeconds).padStart(2, "0"),
      mSeconds: String(displayMSeconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds, mSeconds } = formatTime(time);

  return (
    <div>
      <h1>Watch</h1>
      <div className="w-[620px] h-[400px] bg-yellow rounded-[100px] flex justify-center items-center">
        <div className="w-[590px] h-[370px] bg-green rounded-[100px] flex justify-center py-8">
          <div className="w-[540px] h-[200px] bg-primary rounded-[50px] flex justify-center items-center">
            <div className="flex items-end justify-center gap-x-2 h-[80px]">
              {/* hours */}
              <DigitalNumber size={6} number={hours[0]} />
              <DigitalNumber size={6} number={hours[1]} />
              <div className="flex flex-col justify-center items-center gap-y-5 h-full">
                <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
                <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
              </div>
              {/* minutes */}
              <DigitalNumber size={6} number={minutes[0]} />
              <DigitalNumber size={6} number={minutes[1]} />
              <div className="flex flex-col justify-center items-center gap-y-5 h-full">
                <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
                <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
              </div>
              {/* seconds */}
              <DigitalNumber size={6} number={seconds[0]} />
              <DigitalNumber size={6} number={seconds[1]} />
              <div className="bg-secondary w-[8px] h-[8px] rounded-full" />
              {/* milliseconds */}
              <DigitalNumber size={3} number={mSeconds[0]} />
              <DigitalNumber size={3} number={mSeconds[1]} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setTime(0)}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded ml-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
