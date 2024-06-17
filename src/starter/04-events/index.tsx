import { useState } from "react";

type Person = {
	name: string;
};

function Component() {
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");

	// Setting up a function reference: We must specify the EVENT type and Element.
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const formData = new FormData(e.target as HTMLFormElement);
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		console.log("====================================");
		console.log(data);
		console.log("====================================");

		// If we want to use some data from a FORM, we should always say what TYPE it will be, because
		// in formData.get() we will get a FormDataEntryValue that won't match the Person types.
		// Cast it to a String to match types in Person.
		const text = formData.get("text") as string;
		const person: Person = {
			name: text,
		};
		console.log("====================================");
		console.log(person);
		console.log("====================================");
	};

	return (
		<div>
			<h2>React & Typescript</h2>
			<h2>Events</h2>

			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-input mb-1"
					name="text"
					value={text}
					// Inline: No need to specify any event type or element. TS will do it automatically
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<input
					type="email"
					className="form-input mb-1"
					name="email"
					value={email} // Referencing a function, we must declare a funciton and specify events and elements typess
					onChange={handleChange}
				/>
				<button className="btn btn-block" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
export default Component;
