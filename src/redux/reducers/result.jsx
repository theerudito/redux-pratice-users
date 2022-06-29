const inicialState = {
	data: [],
	isLoading: false,
	error: [],
	searchItem: [],
	offset: 0
};

export const resultReducer = (state = inicialState, action) => {
	switch (action.type) {
		case "GETDATA":
			return {
				...state.data,
				data: action.payload.user
			};
		case "NEXTDATA":
			return {
				...state.data,
				data: action.payload.user,
				offset: action.payload.offset
			};
		case "PREWDATA":
			return {
				...state.data,
				data: action.payload.user,
				offset: action.payload.offset
			};

		default:
			return state;
	}
};
