// Types
export type CounterState = {
	count: number;
	status: string;
};
export const initialState: CounterState = {
	count: 0,
	status: "Pending",
};
type UpdateCountAction = {
	type: "increment" | "decrement" | "reset";
};
type SetStatusAction = {
	type: "setStatus";
	payload: "active" | "inactive";
};

type CounterAction = UpdateCountAction | SetStatusAction;

// Reducer
export const counterReducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		// Count
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		case "reset":
			return { ...state, count: 0 };

		// Status
		case "setStatus":
			return { ...state, status: action.payload };

		default: {
			const unhandledActionType: never = action;
			throw new Error("Error type: " + unhandledActionType);
		}
	}
};
