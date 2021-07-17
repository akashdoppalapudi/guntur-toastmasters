import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (archives = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...archives, action.payload];
		case UPDATE:
			return archives.map((archive) =>
				archive._id === action.payload._id ? action.payload : archive
			);
		case DELETE:
			return archives.filter((archive) => archive._id !== action.payload);
		default:
			return archives;
	}
};
