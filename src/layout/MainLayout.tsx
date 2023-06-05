import MainContainer from "../components/containers/MainContainer";

const MainLayout = () => {
	return (
		<div
			className="
			bg-black
			h-full
			min-h-screen
			flex
			justify-center
			relative
			overflow-y-auto
			overflow-x-hidden

			before:content-['']
			before:absolute
			before:w-52
			before:h-52
			before:bg-gradient-to-tr
			before:to-black
			before:shadow-md
			before:shadow-purple-950
			before:rounded-full
			before:bottom-80
			before:left-10
	

			after:content-['']
			after:absolute
			after:w-72
			after:h-72
			after:bg-gradient-to-l
			after:from-purple-950
			after:shadow-xl
			after:shadow-purple-950		
			after:rounded-full
			after:top-14
			after:right-10
		">
			<MainContainer />
		</div>
	);
};

export default MainLayout;
