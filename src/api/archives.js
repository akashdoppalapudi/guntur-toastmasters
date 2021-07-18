import axios from "axios";

const url = "https://guntur-toastmasters-api.herokuapp.com/archives";

export const fetchArchives = () =>
	axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } });

export const createArchive = (newArchive) =>
	axios.post(url, newArchive, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const updateArchive = (id, updatedArchive) =>
	axios.patch(`${url}/${id}`, updatedArchive, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const deleteArchive = (id) =>
	axios.delete(`${url}/${id}`, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});
