import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import BouncingArrow from "./components/BouncingArrow";

function App() {
	return (
		<div>
			<Navigation />
			<div className="flex items-end h-[95vh] justify-between overflow-hidden pt-36 pb-32 px-6 w-full">
				<h1 className="text-[50px] lg:text-[80px] max-w-[1150px] leading-12 lg:leading-[82px] text-[#020d3f]">
					I'm <span className="font-semibold">ThankGod</span>, a Senior Frontend
					Developer{" "}
					<span className="opacity-[0.34]">
						specialized in building scalable web applications.
					</span>
				</h1>
				<BouncingArrow />
			</div>
			<Projects />
		</div>
	);
}

export default App;
