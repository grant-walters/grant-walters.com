import Heading from "./Heading.js";
import NavBar from "./NavBar.js";
import HexagonGrid from "./background/HexagonGrid.js";

export default function Home() {
	const pages = ["resume","passions","contact"];
	const chars = Array.from("Grant Walters");
	let i =0;
	return (
		<div>
			<HexagonGrid r={60} numRows={25} numCols={25}/>
			<div className="grid grid-rows-[1fr_1fr_4fr_1fr] font-[family-name:var(--font-bayon)] shadow-sm justify-items-center pt-10">
				<Heading/>
				<NavBar pages={pages}/>
				<div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
					<div className="p-10 sm:w-3/4 text-md text-center border-slate-900 border-2 rounded-lg bg-slate-800/5 hover:bg-slate-700/10 transition-all duration-200">
						Ever since I was a kid playing video games on my parent's computer, I've always been captivated by the idea of being able to create such complex interactive entertainment experiences with nothing but words. As I grew older, I started to hone in on what that passion really was. Something about the ability to create something meaningful that others use or enjoy has always drawn me towards computer science, whether it's creating some simple generative art, creating games and mods for my friends and myself to experience, or creating a script or program to help grow a community I am in. Now that I've gone through schooling, coupled with my own personal endeavours into computer science, I am hoping to take this passion and apply to it to a bigger cause, where I can have an impact on greater projects than just my own.
					</div>
				</div>
			</div>
		</div>


		// <div className="bg-slate-950 shadow-lg grid grid-rows-[1fr_1fr_3fr_1fr] items-center justify-items-center sm:gap-3 p-4 sm:p-20 font-[family-name:var(--font-bayon)] border-4 border-cyan-500 sm:border-2 sm:m-[5%] align-middle rounded-2xl h-svh sm:h-auto">
		// 	<Heading/>
		// 	<NavBar pages={pages}/>
		// 	<main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
					
		// 	</main>
		// 	<footer className="row-start-4 items-center">

		// 	</footer>
		// </div>
	);
}
