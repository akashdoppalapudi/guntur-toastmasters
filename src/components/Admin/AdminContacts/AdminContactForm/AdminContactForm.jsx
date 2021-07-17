import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";

import { createContact, updateContact } from "../../../../actions/contacts";
import formStyles from "../../../../styles/Form.module.css";

const AdminContactForm = ({ currentContactId, setCurrentContactId }) => {
	const [contactData, setContactData] = useState({
		name: "",
		designation: "",
		email: "",
		mobile: "",
		image: "",
	});
	const contact = useSelector((state) =>
		currentContactId
			? state.contacts.find((p) => p._id === currentContactId)
			: null
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (contact) setContactData(contact);
	}, [contact]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentContactId) {
			dispatch(updateContact(currentContactId, contactData));
		} else {
			dispatch(createContact(contactData));
		}
		clear();
	};

	const clear = () => {
		setCurrentContactId(null);
		setContactData({
			name: "",
			designation: "",
			email: "",
			mobile: "",
			image: "",
		});
	};

	return (
		<div className={formStyles.FormContainer}>
			<h2>{currentContactId ? "Update " : "Create a "}Contact</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="basicFormName">
					<Form.Control
						type="text"
						placeholder="Name"
						value={contactData.name}
						required={true}
						onChange={(e) =>
							setContactData({ ...contactData, name: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDesignation">
					<Form.Control
						type="text"
						placeholder="Designation"
						value={contactData.designation}
						required={true}
						onChange={(e) =>
							setContactData({ ...contactData, designation: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormEmail">
					<Form.Control
						type="email"
						placeholder="Email"
						value={contactData.email}
						required={true}
						onChange={(e) =>
							setContactData({ ...contactData, email: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormMobile">
					<Form.Control
						type="tel"
						pattern="[0-9]{10}"
						placeholder="Mobile"
						value={contactData.mobile}
						required={true}
						onChange={(e) =>
							setContactData({ ...contactData, mobile: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormFile">
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setContactData({ ...contactData, image: base64 })
						}
					></FileBase>
				</Form.Group>
				<div className={formStyles.FormButtons}>
					<Button type="submit" variant="primary">
						Submit
					</Button>
					<Button variant="warning" onClick={clear}>
						Clear
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default AdminContactForm;
