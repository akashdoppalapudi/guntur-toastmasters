import axios from "axios";

const url = "http://guntur-toastmasters-api.herokuapp.com/contacts";

export const fetchContacts = () => axios.get(url);

export const createContact = (newContact) => axios.post(url, newContact);

export const updateContact = (id, updatedContact) =>
	axios.patch(`${url}/${id}`, updatedContact);

export const deleteContact = (id) => axios.delete(`${url}/${id}`);
