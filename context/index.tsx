import {
	Dispatch,
	ReactNode,
	createContext,
	useContext,
	useReducer,
} from "react";
import { ISelectedNominee } from "../interfaces";

type StateType = {
	selectedNominees: ISelectedNominee[] | [];
	showModal: boolean;
};
type ActionType = {
	type: string;
	payload: any;
};

const initialState: StateType = {
	selectedNominees: [],
	showModal: false,
};

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case "SET_SELECTED_NOMINEE":
			if (!state.selectedNominees.length) {
				let selectedNominees = [...state.selectedNominees, action.payload];
				return { ...state, selectedNominees };
			} else {
				if (
					!state.selectedNominees.find(
						(x) => x.category_id === action.payload.category_id
					)
				) {
					let selectedNominees = [...state.selectedNominees, action.payload];
					return { ...state, selectedNominees };
				} else {
					let matchedCategoryIndex = state.selectedNominees.findIndex(
						(x) => x.category_id === action.payload.category_id
					);
					let selectedNominees = [...state.selectedNominees];
					selectedNominees[matchedCategoryIndex].selectedNominee =
						action.payload.selectedNominee;
					return { ...state, selectedNominees };
				}
			}
		case "SET_SHOW_MODAL": {
			return { ...state, showModal: action.payload };
		}
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

export function useGlobalContext() {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error(
			"useGlobalContext should be used inside the ContextProvider."
		);
	}

	return context;
}

export const setSelectedNominee = (
	dispatch: Dispatch<ActionType>,
	value: ISelectedNominee
) => dispatch({ type: "SET_SELECTED_NOMINEE", payload: value });

export const setShowModal = (dispatch: Dispatch<ActionType>, value: boolean) =>
	dispatch({ type: "SET_SHOW_MODAL", payload: value });
