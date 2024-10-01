'use client';

import { useEffect, useState } from 'react';

export default function Heading() {
    const chars = Array.from("Grant Walters");
    const [index,setIndex] = useState(-1);
	let i=0;
	let loop;
    // function tick() {
	// 	if(index>=chars.length) {
	// 		setIndex(0);
	// 	} else {
	// 		setIndex(index+1);
	// 	}
    // }

	// useEffect(() => {
	// 	loop = setInterval(tick,50);
	// 	return () => {clearInterval(loop)}
	// })

    return (
        <header className="row-start-1 items-center text-center m-0 p-0">
            {chars.map((char)=> (
                <span key={i++} className="cursor-default text-5xl sm:text-6xl md:text-7xl"
				style={{color:index==i ? "#0e7490" : ""}}>{char}</span>
            ))}
            <p className="text-l sm:text-xl font-mono">Software Engineer</p>
        </header>
)
}