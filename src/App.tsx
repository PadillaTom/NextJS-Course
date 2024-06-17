import Component from "./starter/05-challenge";

function App() {
	return (
		<main>
			{/* <Component type="advanced" name="susan" email="asd@asd.com"></Component> */}
			{/* <Component type="basic" name="susan" ></Component> */}
			<Component type="basic" name="susan"></Component>
			<Component type="advanced" name="susan" email="hello@hello.com"></Component>
		</main>
	);
}

export default App;
