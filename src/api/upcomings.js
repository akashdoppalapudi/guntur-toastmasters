import axios from "axios";

const url = "http://guntur-toastmasters-api.herokuapp.com/upcomings";

export const fetchUpcomings = () =>
	axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } });

export const createUpcoming = (newUpcoming) =>
	axios.post(url, newUpcoming, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const updateUpcoming = (id, updatedUpcoming) =>
	axios.patch(`${url}/${id}`, updatedUpcoming, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const deleteUpcoming = (id) =>
	axios.delete(`${url}/${id}`, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});
