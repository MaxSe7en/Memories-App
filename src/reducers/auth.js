import { AUTH, LOGOUT } from "../constants/actionTypes";

//reducer takes (state, action) as parameters and has been destructured below

const initialState = { authData: null };
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH:
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));//store to local storage
			return { ...state, authData: action.data, loading: false, errors: null };
		case LOGOUT:
			localStorage.clear()
			return { ...state, authData: null};

		default:
			return state;
	}
};
