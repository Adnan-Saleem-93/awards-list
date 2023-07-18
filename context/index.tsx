import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { INominee } from "../interfaces";

type StateType = {
	selectedNominee: INominee | null;
};
type ActionType = {
	type: string;
	payload: INominee;
};

const initialState: StateType = {
	selectedNominee: null,
};

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case "SET_SELECTED_NOMINEE":
			return { ...state, selectedNominee: action.payload };
		default:
			return state;
	}
};

export const AppContext = createContext<{
	state: StateType;
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
