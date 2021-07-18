import axios from "axios";

const url = "https://guntur-toastmasters-api.herokuapp.com/news-letters";

export const fetchNewsLetters = () =>
	axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } });

export const createNewsLetter = (newNewsLetter) =>
	axios.post(url, newNewsLetter, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const updateNewsLetter = (id, updatedNewsLetter) =>
	axios.patch(`${url}/${id}`, updatedNewsLetter, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const deleteNewsLetter = (id) =>
	axios.delete(`${url}/${id}`, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});
