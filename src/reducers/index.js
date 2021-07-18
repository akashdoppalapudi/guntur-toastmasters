import { combineReducers } from "redux";

import archives from "./archives";
import upcomings from "./upcomings";
import contacts from "./contacts";
import newsLetters from "./newsLetters";

export default combineReducers({
	archives,
	upcomings,
	contacts,
	newsLetters,
});
