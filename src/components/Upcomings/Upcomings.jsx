import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Row, Col, Container } from "react-bootstrap";

import { getUpcomings } from "../../actions/upcomings";

import Upcoming from "./Upcoming/Upcoming";

const Upcomings = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUpcomings());
	}, [dispatch]);
	const upcomings = useSelector((state) => state.upcomings);

	return !upcomings.length ? (
		<Spinner animation="border" />
	) : (
		<Container fluid>
			<Row>
				{upcomings.map((upcoming) => (
					<Col md={3} key={upcoming._id}>
						<Upcoming upcoming={upcoming} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Upcomings;
