'use client';
import {useEffect, useState} from 'react';

function Hexagon({x,y,r,mousePos,decay,maxDist}) {
	let distToMouse = Math.sqrt(Math.pow(x-mousePos.x,2)+Math.pow(y-mousePos.y,2));
	let opacity= Math.exp(-decay*distToMouse/maxDist);
	opacity = Math.max(0.1,Math.min(opacity,0.9));
	
	let points = [];
	for(let i=0;i<6;i++) {
		let angle = (Math.PI/3)*i;
		points.push(`${x+r*Math.cos(angle)},${y+r*Math.sin(angle)}`);
	}
	return (
		<polygon
			className='-z-50'
			points = {points}
			stroke = "#00AAAA"
			strokeWidth = "2"
			strokeOpacity = {opacity}
			fillOpacity= "0"
		/>
	);
}

function HexagonRow({x,y,r,length,mousePos,decay,maxDist}) {
	let distToNext = r*Math.sqrt(3);
	let xoff = distToNext*Math.cos(Math.PI/6);
	let yoff = distToNext*Math.sin(Math.PI/6);
	let row = [];
	for(let i=0;i<length;i++) {
		row.push(<Hexagon x={x+xoff*i} y={i%2==0 ? y : y+yoff} r={r} 
		mousePos={mousePos} decay={decay} maxDist={maxDist}
		key={`${i},${y}`}/>);
	}
	return (
		row
	);
}

export default function HexagonGrid({x=0,y=0,r,numRows,numCols}) {
	let [mousePos,setMousePos] = useState({x:1,y:1});
	let [maxDist,setMaxDist] = useState(0.0);
	let decay=20;

	useEffect(()=> {
		setMaxDist(Math.sqrt(Math.pow(screen.width,2)+Math.pow(screen.height,2)));
		const handleMouseMove = (event) => {
			requestAnimationFrame(()=> {
				setMousePos({x:event.clientX,y:event.clientY});
			})
		}
		const handleTouchMove = (event) => {
			if (event.touches.length > 0) {
				const touch = event.touches[0];
				requestAnimationFrame(() => {
					setMousePos({ x: touch.clientX, y: touch.clientY });
				});
			}
		};
		window.addEventListener('mousemove',handleMouseMove);
		window.addEventListener('touchmove',handleTouchMove);
	},[]);

	

	let rows = [];
	let height = r*Math.sqrt(3);
	for(let i=0;i<numRows;i++) {
		rows.push(<HexagonRow x={x} y={y+height*i} r={r} length={numCols}
		mousePos={mousePos} decay={decay} maxDist={maxDist}
		key={`row:${i}`}/>);
	}
	return (
		<svg className="absolute w-screen h-full -z-50 sm:blur-sm opacity-90">
			{rows}
		</svg>
	);
}