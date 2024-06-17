// Challenge is:
// Create a type that has dynamic properties based on a given property.
// Example: ProfileCard has TYPE property. Depending on which one it is, I will have EMAIL or not.
// <Component type="advanced" name="susan" email="asd@asd.com"></Component>
// <Component type="basic" name="susan" ></Component>

// SOLUTION: HAVE TWO DIFFERENT TYPES

type BasicProfileCardProps = {
	type: "basic";
	name: string;
};
type AdvancedProfileCardProps = {
	type: "advanced";
	name: string;
	email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
	const { type, name } = props;

	if (type === "basic") {
		return (
			<article className="alert alert-success">
				<h2>User: {name}</h2>
			</article>
		);
	}

	return (
		<article className="alert alert-danger">
			<h2>User: {name}</h2>
			<h2>Email: {props.email}</h2>
		</article>
	);
}
export default Component;
