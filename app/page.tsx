import Link from "next/link";
import React from "react";

function Homepage() {
	return (
		<div>
			<h1 className="text-7xl">HomePage</h1>
			<Link href={"/about"}>About</Link>
			<Link href={"/info"}>Info</Link>
			<Link href={"/info/contact"}>Contact</Link>
		</div>
	);
}

export default Homepage;
