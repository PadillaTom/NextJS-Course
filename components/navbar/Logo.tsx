import React from "react";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";

import { Button } from "../ui/button";

function Logo() {
	return (
		<Button size={"icon"} asChild>
			<Link href="/">
				<VscCode></VscCode>
			</Link>
		</Button>
	);
}

export default Logo;
