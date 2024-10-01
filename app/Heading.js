'use client';

import { useEffect, useState } from 'react';

export default function Heading() {
    const chars = Array.from("Grant Walters");
	let i=0;
	let loop;

    return (
        <header className="row-start-1 items-center text-center m-0">
            {chars.map((char)=> (
                <span key={i++} className="cursor-default text-5xl sm:text-6xl md:text-7xl">{char}</span>
            ))}
            <p className="text-l sm:text-xl font-mono">Software Engineer</p>
        </header>
)
}