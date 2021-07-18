import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (upcomings = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...upcomings, action.payload];
		case UPDATE:
			return upcomings.map((upcoming) =>
				upcoming._id === action.payload._id ? action.payload : upcoming
			);
		case DELETE:
			return upcomings.filter((upcoming) => upcoming._id !== action.payload);
		default:
			return upcomings;
	}
};
