
export default function NavBar(props){
	let pages = props.pages;
	return (
		<nav className="row-start-2 items-center justify-evenly grid grid-flow-col-dense w-full sm:w-1/2 place-content-evenly">
			{pages.map((page) => (
				<Link
					key={"navbar:"+page}
					className="flex text-center align-middle hover:underline hover:underline-offset-8 text-xl px-4 border-x-2 hover:py-2 transition-all duration-300 hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-900/50"
					href={page}
					target="_self"
				>{page}</Link>
			))}
		</nav>
	)
}