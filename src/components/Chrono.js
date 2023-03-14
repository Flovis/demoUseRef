import React from "react";
import Button from "./Button.js";
import { useEffect, useState, useRef } from "react";

const Chrono = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [sec, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let time = useRef();

    useEffect(() => {
        if (isRunning) {
            time.current = setInterval(() => {
                setSeconds(sec + 1);
                if (sec === 59) {
                    setMinute(minute + 1);
                    setSeconds(0);
                }
                if (minute === 59) {
                    setHour(hour + 1);
                    setMinute(0);
                }
            }, 1000);
        }
        return () => clearInterval(time.current);
    }, [isRunning, sec, minute, hour]);

    const startMinuteur = () => {
        setIsRunning(true);
    };
    const pauseMiniteur = () => {
        clearInterval(time.current);
        setIsRunning(false);

    };
    const resetMiniteur = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinute(0);
        setHour(0);
    };

    return (
        <div>
            <div className="box">
                <div className="time">
                    {hour < 10 ? "0" + hour : hour}:{" "}
                    {minute < 10 ? "0" + minute : minute}:{" "}
                    {sec < 10 ? "0" + sec : sec}
                </div>
                <div className="container-btn">
                    <Button
                        value={<i class="uil uil-play"></i>}
                        classcss="rounded-btn"
                        onClick={startMinuteur}
                    />
                    <Button
                        value={<i class="uil uil-pause"></i>}
                        classcss="rounded-btn"
                        onClick={pauseMiniteur}

                    />
                    <Button
                        value={<i class="uil uil-redo"></i>}
                        classcss="rounded-btn"
                        onClick={resetMiniteur}

                    />
                </div>
            </div>
        </div>
    );
};

export default Chrono;
