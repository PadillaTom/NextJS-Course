import Link from "next/link";
import React from "react";

const AboutPage = () => {
	return (
		<div>
			<h2>About Page</h2>
			<Link href={"/"} className="text-xl text-blue-500 inline-block mt-8">
				Back to Home
			</Link>
		</div>
	);
};

export default AboutPage;
