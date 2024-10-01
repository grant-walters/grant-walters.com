import Heading from "./Heading.js";
import NavBar from "./NavBar.js";

export default function Home() {
	const pages = ["resume","passions","contact"];
	const chars = Array.from("Grant Walters");
	let i =0;
	return (
		<div className="bg-slate-950 shadow-lg grid grid-rows-[1fr_1fr_3fr_1fr] items-center justify-items-center sm:gap-3 p-4 sm:p-20 font-[family-name:var(--font-bayon)] border-4 border-cyan-500 sm:border-2 sm:m-[5%] align-middle rounded-2xl h-svh sm:h-auto">
			<Heading/>
			<NavBar pages={pages}/>
			<main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
					
			</main>
			<footer className="row-start-4 items-center">

			</footer>
		</div>
	);
}
