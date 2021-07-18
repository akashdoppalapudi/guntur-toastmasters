import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (newsLetters = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...newsLetters, action.payload];
		case UPDATE:
			return newsLetters.map((newsLetter) =>
				newsLetter._id === action.payload._id ? action.payload : newsLetter
			);
		case DELETE:
			return newsLetters.filter(
				(newsLetter) => newsLetter._id !== action.payload
			);
		default:
			return newsLetters;
	}
};
