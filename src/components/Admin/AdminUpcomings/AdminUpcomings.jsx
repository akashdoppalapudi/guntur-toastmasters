import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { getUpcomings } from "../../../actions/upcomings";

import AdminUpcomingForm from "./AdminUpcomingForm/AdminUpcomingForm";
import AdminUpcoming from "./AdminUpcoming/AdminUpcoming";

const AdminUpcomings = ({ auth, currentUpcomingId, setCurrentUpcomingId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUpcomings());
	}, [currentUpcomingId, dispatch]);
	const upcomings = useSelector((state) => state.upcomings);

	if (!auth) {
		<Redirect to="/login" />;
	}
	return (
		<Container fluid>
			<Row>
				<Col md={3}>
					<AdminUpcomingForm
						currentUpcomingId={currentUpcomingId}
						setCurrentUpcomingId={setCurrentUpcomingId}
					/>
				</Col>
				{upcomings.map((upcoming) => (
					<Col md={3} key={upcoming._id}>
						<AdminUpcoming
							upcoming={upcoming}
							setCurrentUpcomingId={setCurrentUpcomingId}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AdminUpcomings;
