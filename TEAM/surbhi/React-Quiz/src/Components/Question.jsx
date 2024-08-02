import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer';
import Answer from './Answer';
import QUESTION from '../Question';

export default function Question( {
    text,
    onSelectAnswer,
    onSkipAnswer,
}) {

    const [answer , setAnswer] = useState({
        selectedAnswer : '',
        isCorrect : null
    });

    function handleSelectAnswer( answer ) {
        setAnswer({
            selectedAnswer : answer,
            isCorrect : null
        })
        setTimeout( () => {
            setAnswer({
                selectedAnswer : answer,
                isCorrect : QUESTION[text].answers[0] === answer
            })
            setTimeout( () => {
                onSelectAnswer(answer);
            },2000);
        },1000);
        
    }

        let answerState = '';

        if (answer.selectedAnswer && answer.isCorrect !== null) {
            answerState = answer.isCorrect? 'correct' : 'wrong';
        } else if(answer.selectedAnswer){
            answerState = 'answered';
        }
    return <div id="question" >
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer}
            />
            <h2>{QUESTION[text].text}</h2>
            <Answer
                answer={QUESTION[text].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>


}
