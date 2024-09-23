import Heading from "./Heading.js"
export default function Home() {
	const pages = ["resume","passions","contact"];
	const chars = Array.from("Grant Walters");
	let i =0;
	return (
		<div className="bg-slate-950 shadow-lg grid grid-rows-[1fr_1fr_3fr_1fr] items-center justify-items-center sm:gap-3 p-4 sm:p-20 font-[family-name:var(--font-bayon)] border-4 border-cyan-500 sm:border-2 sm:m-[5%] align-middle rounded-2xl h-svh sm:h-auto">
			<Heading/>
			<nav className="row-start-2 items-center justify-evenly grid grid-flow-col-dense w-full sm:w-1/2 gap-2">
				{pages.map((page) => (
					<a
						key={++i}
						className="flex text-center align-middle hover:underline hover:underline-offset-8 text-xl px-4 border-x-2 hover:py-2 transition-all duration-300 hover:text-cyan-800 hover:border-cyan-800 hover:bg-cyan-900/15"
						href={page}
						target="_self"
					>{page}</a>
				))}
			</nav>
			<main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
				
			</main>
		</div>
	);
}
