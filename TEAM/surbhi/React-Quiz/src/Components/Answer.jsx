import React from 'react'
import { useRef } from 'react';


export default function Answer({ answer,selectedAnswer,answerState,onSelect }) {
    const shuffledAnswers = useRef;
    if(! shuffledAnswers.current){
        shuffledAnswers.current = [...answer];
        shuffledAnswers.current.sort(()=>Math.random() - 0.5);
    };

    return <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClass = '';

            if (answerState === 'answered' && isSelected) {
                cssClass = 'selected';
            }

            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                cssClass = answerState;
            }

            return <li key={answer} className="answer">
                <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>
                    {answer}
                </button>
            </li>
        }
        )}
    </ul>
}
