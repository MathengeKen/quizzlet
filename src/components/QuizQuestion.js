export default function QuizQuestion(props){
    return (
		<h2 
			className="quiz__question" 
			dangerouslySetInnerHTML={{ __html: props.question }}
		>
		</h2>
	)
}