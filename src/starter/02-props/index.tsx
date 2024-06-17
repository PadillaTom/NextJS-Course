import { type PropsWithChildren } from "react";

// type ComponentProps = {
// 	name: string;
// 	id: number;
// 	children?: React.ReactNode;
// };

type ComponentProps = PropsWithChildren<{
	name: string;
	id: number;
}>;

function Component(props: ComponentProps) {
	const { name, id, children } = props;
	return (
		<div>
			<h2>Name: {name}</h2>
			<h2>Id: {id}</h2>
			<p>{children}</p>
		</div>
	);
}
export default Component;
