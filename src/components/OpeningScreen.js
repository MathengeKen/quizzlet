import blobBottomLeft from "../assets/blob-bottom.png";
import blobTopRight from "../assets/blob-top.png";

function OpeningScreen(props) {


	return (
		<div className="opening-screen centre">
			<h1 className="title">Quizzical</h1>
			<p className="desc">
				A muliple-choice quiz of 5 random general knowledge questions pulled from the Open Trivia DB API.
			</p>
			<button className="btn" onClick={props.startGame}>
				Start quiz
			</button>

			<img src={blobTopRight} alt="A circular blob" className="blob blob--top-right" />
			<img src={blobBottomLeft} alt="A circular blob" className="blob blob--bottom-left" />
		</div>
	);
}

export default OpeningScreen;