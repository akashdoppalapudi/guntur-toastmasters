import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";

import styles from "./AdminNavBar.module.css";

const AdminNavBar = () => {
	return (
		<Container fluid>
			<Row className={styles.AdminNavBar}>
				<Col className={styles.buttonsContainer}>
					<Link to="/admin-upcomings">
						<Button variant="secondary">Upcomings</Button>
					</Link>
				</Col>
				<Col className={styles.buttonsContainer}>
					<Link to="/admin-archives">
						<Button variant="secondary">Archives</Button>
					</Link>
				</Col>
				<Col className={styles.buttonsContainer}>
					<Link to="/admin-contacts">
						<Button variant="secondary">Contacts</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default AdminNavBar;
