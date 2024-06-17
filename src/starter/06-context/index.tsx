import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
	return (
		<ThemeProvider>
			<Component></Component>
		</ThemeProvider>
	);
}

function Component() {
	const context = useTheme();
	console.log(context);

	return (
		<div>
			<h2>React & Typescript</h2>
			<h2>Context API</h2>

			<button
				type="button"
				className="btn btn-center"
				onClick={() => {
					if (context.theme === "dark") {
						context.setTheme("system");
						return;
					}
					context.setTheme("dark");
				}}
			>
				Toggle Theme
			</button>
		</div>
	);
}
export default ParentComponent;
