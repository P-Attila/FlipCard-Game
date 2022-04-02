import React, {useState} from "react";


function Card({ frontSide, backSide }) {
	const [isFront, changeFace] = useState(true);
	function handleClick() {
		changeFace(oldState => !oldState)
	}
    const text = isFront ? frontSide : backSide;
    const sideClass = isFront ? "front" : "back";
    const classList = `flash-card ${sideClass}`;
	return (
		<div className={classList} onClick={handleClick}>
			{text}
		</div>
	)
}

const Game = () => {
	return (
		<div className="w-full h-screen bg-zinc-900 text-gray-300">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex-flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-teal-400">
						Flash Cards
					</p>
					<p className="py-4">Click on a card to reveal the secret solution.</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="9 * 6" backSide="54" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="2 ** 8" backSide="256" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="Rabbit * 8" backSide="Rabbyte" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="6 * 5" backSide="30" />
					</div>

					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="2 * 8" backSide="16" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="3 * 4" backSide="12" />{" "}
					</div>
          <div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="3 * 8" backSide="24" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="4 * 5" backSide="20" />{" "}
					</div>

          <div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="2 * 7" backSide="14" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="4 * 7" backSide="28" />{" "}
					</div>
          <div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="5 * 5" backSide="25" />
					</div>
					<div className="shadow-md shadow-teal-400 rounded-md py-5 hover:scale-110 duration-500">
						<Card frontSide="7 * 8" backSide="56" />{" "}
					</div>

				</div>
			</div>
		</div>
	);
};

export default Game;
