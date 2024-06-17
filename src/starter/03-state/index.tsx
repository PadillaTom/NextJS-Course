import { useState } from "react";

// When using states by default TS will infer the type, but
// when working with generic (empty array), it is ebtter to specify it ourselves

type Link = {
	id: number;
	url: string;
	text: string;
};

const navlinks = [
	{
		id: 1,
		url: "hello",
		text: "Hello Text",
	},
	{
		id: 2,
		url: "hello",
		text: "Chau Text",
	},
	{
		id: 3,
		url: "hello",
		text: "Bonjour Text",
	},
];

function Component() {
	// const [text, setText] = useState("Hello");

	// In this case, when wanting to start from an empty array,
	// is good to specify the type of the elements.
	// const [list, setList] = useState<string[]>([]);

	const [links, setLinks] = useState<Link[]>(navlinks);

	return (
		<div>
			<h2 className="mb-1">React & Typescript</h2>
			<button
				className="btn btn-center"
				onClick={() => {
					// setText("TEST");
					// console.log(text);
					//
					// setList(["TEST", "ARRAY"]);
					// console.log(list);
					//
					// Scenario: We do not pass a property to the object, ts will complain
					setLinks([
						...links,
						{
							id: 4,
							url: "hello",
							text: "Au Revoir TEXT", // Comment this to trigger error
						},
					]);
				}}
			>
				Click me!
			</button>
		</div>
	);
}
export default Component;
