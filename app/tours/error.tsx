"use client";
function error({ error }: { error: Error }) {
	return <div>There was an error: {error.message}</div>;
}

export default error;
