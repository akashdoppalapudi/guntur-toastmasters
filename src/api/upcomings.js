import axios from "axios";

const url = "http://guntur-toastmasters-api.herokuapp.com/upcomings";

export const fetchUpcomings = () => axios.get(url);

export const createUpcoming = (newUpcoming) => axios.post(url, newUpcoming);

export const updateUpcoming = (id, updatedUpcoming) =>
	axios.patch(`${url}/${id}`, updatedUpcoming);

export const deleteUpcoming = (id) => axios.delete(`${url}/${id}`);
