import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { getNewsLetters } from "../../../actions/newsLetters";

import AdminNewsLetterForm from "./AdminNewsLetterForm/AdminNewsLetterForm";
import AdminNewsLetter from "./AdminNewsLetter/AdminNewsLetter";

const AdminNewsLetters = ({
	auth,
	currentNewsLetterId,
	setCurrentNewsLetterId,
}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getNewsLetters());
	}, [currentNewsLetterId, dispatch]);
	const newsLetters = useSelector((state) => state.newsLetters);
	if (!auth) {
		<Redirect to="/login" />;
	}
	return (
		<Container fluid>
			<Row>
				<Col md={3}>
					<AdminNewsLetterForm
						currentNewsLetterId={currentNewsLetterId}
						setCurrentNewsLetterId={setCurrentNewsLetterId}
					/>
				</Col>
				{newsLetters.map((newsLetter) => (
					<Col md={3} key={newsLetter._id}>
						<AdminNewsLetter
							newsLetter={newsLetter}
							setCurrentNewsLetterId={setCurrentNewsLetterId}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AdminNewsLetters;
