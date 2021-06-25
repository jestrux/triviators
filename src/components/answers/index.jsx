import React from 'react';
import TextAnswers from './TextAnswers';

const Answers = ({
    type, 
    choices, 
    selectedChoice, 
    correctChoice,
    onAnswer
}) => {
    return <TextAnswers 
        choices={choices} 
        selectedChoice={selectedChoice} 
        correctChoice={correctChoice} onAnswer={onAnswer} 
    />
}
 
export default Answers;