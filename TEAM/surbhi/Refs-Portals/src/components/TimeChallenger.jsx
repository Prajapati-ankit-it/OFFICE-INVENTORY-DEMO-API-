import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export default function TimeChallenger({title,targetTime}) {
const dialog = useRef();
const timer = useRef();
const [timeRemaining,setTimeRemaining]= useState(targetTime*1000);

const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

if (timeRemaining<=0) {
    clearInterval(timer.current);
    dialog.current.open();
}

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }
    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10);
        },10);
    }

    function handleStop(){
        dialog.current.open();
            clearInterval(timer.current);
        }

    return (
        <>
        <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            remainingTime={timeRemaining}
            onReset = {handleReset}
        />
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} seccond{targetTime > 1 ? 's': ''} 
            </p>
            <p>
                <button onClick={ timeIsActive ? handleStop: handleStart }>
                    {timeIsActive   ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timeIsActive  ? 'active' : undefined}>
                { timeIsActive  ? 'Time Running....' : 'Time inactive'}
            </p>
        </section>
        </>
        )
}
