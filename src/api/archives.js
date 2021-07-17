import axios from "axios";

const url = "https://guntur-toastmasters-api.herokuapp.com/archives";

export const fetchArchives = () => axios.get(url);

export const createArchive = (newArchive) => axios.post(url, newArchive);

export const updateArchive = (id, updatedArchive) =>
	axios.patch(`${url}/${id}`, updatedArchive);

export const deleteArchive = (id) => axios.delete(`${url}/${id}`);
