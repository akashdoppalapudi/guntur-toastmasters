import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/upcomings";

export const getUpcomings = () => async (dispatch) => {
	try {
		const { data } = await api.fetchUpcomings();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createUpcoming = (upcoming) => async (dispatch) => {
	try {
		const { data } = await api.createUpcoming(upcoming);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateUpcoming = (id, upcoming) => async (dispatch) => {
	try {
		const { data } = await api.updateUpcoming(id, upcoming);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteUpcoming = (id) => async (dispatch) => {
	try {
		await api.deleteUpcoming(id);
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};
