import axios from "axios";

const url = "http://guntur-toastmasters-api.herokuapp.com/contacts";

export const fetchContacts = () =>
	axios.get(url, { headers: { "Access-Control-Allow-Origin": "*" } });

export const createContact = (newContact) =>
	axios.post(url, newContact, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const updateContact = (id, updatedContact) =>
	axios.patch(`${url}/${id}`, updatedContact, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});

export const deleteContact = (id) =>
	axios.delete(`${url}/${id}`, {
		headers: { "Access-Control-Allow-Origin": "*" },
	});
