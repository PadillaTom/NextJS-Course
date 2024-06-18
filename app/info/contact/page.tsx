import Link from "next/link";
import React from "react";

const ContactPage = () => {
	return (
		<div>
			<h2>Contact Page</h2>
			<Link href={"/"} className="text-xl text-blue-500 inline-block mt-8">
				Back to Home
			</Link>
		</div>
	);
};

export default ContactPage;
