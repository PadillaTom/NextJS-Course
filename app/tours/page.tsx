import Link from "next/link";
import React from "react";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
};

const fetchTours = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const response = await fetch(url);
	return await response.json();
};

async function ToursPage() {
	const data: Tour[] = await fetchTours();

	return (
		<section>
			<h1 className="text-3xl mb-4">Tours</h1>
			{data.map((i) => {
				return (
					<Link key={i.id} href={`/tours/${i.id}`} className="hover:text-blue-500">
						<h2>{i.name}</h2>
					</Link>
				);
			})}
		</section>
	);
}

export default ToursPage;
