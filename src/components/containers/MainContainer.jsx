import CardList from "../cards/CardList";

const MainContainer = () => {
	return (
		<div
			className="
				w-4/5
				max-w-xl
				my-20
				p-8
				rounded-xl
				bg-white
				bg-opacity-5
				backdrop-blur-sm
				relative
				z-10
		">
			<h1 className="font-light text-center text-white italic text-3xl animate-pulse">
				ToDo List / Planner
			</h1>
			<CardList />
		</div>
	);
};

export default MainContainer;
