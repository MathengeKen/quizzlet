import React from "react";

export default function QuizAnswer({ answer, correctAnswer, selectAnswer, checkedResults }) {
	let classNames = "quiz__answer";

	if (answer.isSelected) {
		classNames += " selected";
	}

	if (checkedResults && answer.isSelected && answer.answerText !== correctAnswer) {
		classNames += " incorrect";
	} else if (checkedResults && answer.answerText === correctAnswer) {
		classNames += " correct";
	}

	return (
		<div 
			className={classNames} 
			onClick={selectAnswer} 
			dangerouslySetInnerHTML={{ __html: answer.answerText }}
		>
		</div>
	);
}