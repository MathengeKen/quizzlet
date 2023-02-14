import { nanoid } from "nanoid";

//function maps over an array of answers (strings), and returns an array of objects
function formatAnswers(answersArr, correctAnswer){
	const formattedAnswers = answersArr.map((answer) => {
		const answerObj = {
			id: nanoid(),
			answerText: answer,
			isSelected: false,
			isCorrect: false,
		};

		if (answer === correctAnswer){
			return {...answerObj, isCorrect: true}
		}
		return answerObj;
	});

	return shuffleAnswers(formattedAnswers);
}

function shuffleAnswers(answersArr) {
	for (let i = answersArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		let temp = answersArr[i];
		answersArr[i] = answersArr[j];
		answersArr[j] = temp;
	}

	return answersArr;
}

//function maps over the provided quizData and returns an array of objects
function formatQuizItems(quizData){
	return quizData.map((quizItem) => {
		const answers = [...quizItem.incorrect_answers, quizItem.correct_answer];

		return {
			id: nanoid(),
			question: quizItem.question,
			answers: formatAnswers(answers, quizItem.correct_answer),
			correct_answer: quizItem.correct_answer,
		};
	});
}

export {formatQuizItems };