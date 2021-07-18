import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { getContacts } from "../../../actions/contacts";

import AdminContactForm from "./AdminContactForm/AdminContactForm";
import AdminContact from "./AdminContact/AdminContact";

const AdminContacts = ({ auth, currentContactId, setCurrentContactId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getContacts());
	}, [currentContactId, dispatch]);
	const contacts = useSelector((state) => state.contacts);
	if (!auth) {
		<Redirect to="/login" />;
	}
	return (
		<Container fluid>
			<Row>
				<Col md={3}>
					<AdminContactForm
						currentContactId={currentContactId}
						setCurrentContactId={setCurrentContactId}
					/>
				</Col>
				{contacts.map((contact) => (
					<Col md={3} key={contact._id}>
						<AdminContact
							contact={contact}
							setCurrentContactId={setCurrentContactId}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AdminContacts;
