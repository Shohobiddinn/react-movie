import { createContext, useReducer } from 'react';

const initialValue = {
	data: [],
	term: '',
	filter: 'all',
};

export const Context = createContext(initialValue);

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'GET_DATA':
			return { ...state, data: payload };
		case 'CREATE_MOVIE':
			return { ...state, data: [payload,...state.data] };
		default:
			return state;
	}
};

export default function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialValue);

	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
}
