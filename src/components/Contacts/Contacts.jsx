import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Row, Col, Container } from "react-bootstrap";

import { getContacts } from "../../actions/contacts";

import Contact from "./Contact/Contact";

const Contacts = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getContacts());
	}, [dispatch]);
	const contacts = useSelector((state) => state.contacts);

	return !contacts.length ? (
		<Spinner animation="border" />
	) : (
		<Container fluid>
			<Row>
				{contacts.map((contact) => (
					<Col md={3} key={contact._id}>
						<Contact contact={contact} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Contacts;
