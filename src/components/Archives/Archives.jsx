import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Row, Col, Container } from "react-bootstrap";

import { getArchives } from "../../actions/archives";

import Archive from "./Archive/Archive";

const Archives = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getArchives());
	}, [dispatch]);
	const archives = useSelector((state) => state.archives);

	return !archives.length ? (
		<Spinner animation="border" />
	) : (
		<Container fluid>
			<Row>
				{archives.map((archive) => (
					<Col md={3} key={archive._id}>
						<Archive archive={archive} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Archives;
