import { combineReducers } from "redux";

import archives from "./archives";
import upcomings from "./upcomings";
import contacts from "./contacts";

export default combineReducers({
	archives,
	upcomings,
	contacts,
});
