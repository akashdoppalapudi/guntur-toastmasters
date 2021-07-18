import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/newsLetters";

export const getNewsLetters = () => async (dispatch) => {
	try {
		const { data } = await api.fetchNewsLetters();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createNewsLetter = (newsLetter) => async (dispatch) => {
	try {
		const { data } = await api.createNewsLetter(newsLetter);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateNewsLetter = (id, newsLetter) => async (dispatch) => {
	try {
		const { data } = await api.updateNewsLetter(id, newsLetter);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteNewsLetter = (id) => async (dispatch) => {
	try {
		await api.deleteNewsLetter(id);
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};
