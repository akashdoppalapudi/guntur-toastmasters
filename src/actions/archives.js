import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api/archives";

export const getArchives = () => async (dispatch) => {
	try {
		const { data } = await api.fetchArchives();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createArchive = (archive) => async (dispatch) => {
	try {
		const { data } = await api.createArchive(archive);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updateArchive = (id, archive) => async (dispatch) => {
	try {
		const { data } = await api.updateArchive(id, archive);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteArchive = (id) => async (dispatch) => {
	try {
		await api.deleteArchive(id);
		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};
