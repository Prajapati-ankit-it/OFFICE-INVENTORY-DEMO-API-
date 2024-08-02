import React, { useCallback,useState } from 'react'
import QUESTIONS from '../Question';

import Question from './Question';
import Summary from './Summary';


export default function Quiz() {
    
    const [userAnswers , setUserAnswers] = useState([]);
    const [answerState , setAnswerState] = useState('');

    const activeQuestionIndex = userAnswers.length ;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
        )   {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
        
    },[]);

    const handleSkipAnswer = useCallback(() =>handleSelectAnswer(null),[ handleSelectAnswer]);

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers}/>
    }

    

    return (
        <div id='quiz'>
            <Question 
                key={activeQuestionIndex}
                text={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
