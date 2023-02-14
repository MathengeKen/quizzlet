import React, { useState } from "react";

import OpeningScreen from "./components/OpeningScreen";
import Quiz from "./components/Quiz";

export default function App() {

	const [isGame, setIsGame] = useState(true);

	function startGame(){
		setIsGame(false);
	}


	return (
		<main className="container center">
			{ isGame ? <OpeningScreen startGame={startGame}/>
			: 
			<Quiz/>}
		</main>
	);
}

