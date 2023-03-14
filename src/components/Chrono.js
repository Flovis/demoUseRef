import React from 'react';
import Button from './Button.js'
import {useEffect, useState, useRef} from 'react'

const Chrono = () => {

    const [hour, setHour] = useState(10);
    const [minute, setMinute] = useState(0);
    const [sec, setSec] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(
        () =>{
            
        }, []
    )
    const startMinuteur = () =>{

    }
    const pauseMiniteur = () =>{

    }
    const resetMiniteur = () =>{

    }

    return (
        
        <div>
            <div className="box">
            <div className="time">
                {hour < 10 ? "0" + hour : hour} : {minute} : {sec}
            </div>
            <div className="container-btn">
                <Button
                    value={<i class="uil uil-play"></i>}
                    
                    classcss="rounded-btn"
                />
                <Button
                    value={<i class="uil uil-pause"></i>}
                    
                    classcss="rounded-btn"
                />
                <Button
                    value={<i class="uil uil-redo"></i>}
                    
                    classcss="rounded-btn"
                />
            </div>
        </div>
        </div>
    );
};

export default Chrono;