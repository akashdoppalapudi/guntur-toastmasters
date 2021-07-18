import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Row, Col, Container } from "react-bootstrap";

import { getNewsLetters } from "../../actions/newsLetters";

import NewsLetter from "./NewsLetter/NewsLetter";

const NewsLetters = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getNewsLetters());
	}, [dispatch]);
	const newsLetters = useSelector((state) => state.newsLetters);

	return !newsLetters.length ? (
		<Spinner animation="border" />
	) : (
		<Container fluid>
			<Row>
				{newsLetters.map((newsLetter) => (
					<Col md={3} key={newsLetter._id}>
						<NewsLetter newsLetter={newsLetter} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default NewsLetters;
