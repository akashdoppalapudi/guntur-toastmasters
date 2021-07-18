import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { getArchives } from "../../../actions/archives";

import AdminArchiveForm from "./AdminArchiveForm/AdminArchiveForm";
import AdminArchive from "./AdminArchive/AdminArchive";

const AdminArchives = ({ auth, currentArchiveId, setCurrentArchiveId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getArchives());
	}, [currentArchiveId, dispatch]);
	const archives = useSelector((state) => state.archives);
	if (!auth) {
		<Redirect to="/login" />;
	}
	return (
		<Container fluid>
			<Row>
				<Col md={3}>
					<AdminArchiveForm
						currentArchiveId={currentArchiveId}
						setCurrentArchiveId={setCurrentArchiveId}
					/>
				</Col>
				{archives.map((archive) => (
					<Col md={3} key={archive._id}>
						<AdminArchive
							archive={archive}
							setCurrentArchiveId={setCurrentArchiveId}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AdminArchives;
