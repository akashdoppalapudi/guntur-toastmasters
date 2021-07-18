import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import styles from "./Login.module.css";

const Login = ({ auth, setAuth }) => {
	const history = useHistory();
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const handleLogin = (e) => {
		e.preventDefault();
		if (credentials.username === process.env.REACT_APP_USERNAME) {
			if (credentials.password === process.env.REACT_APP_PASSWORD) {
				setAuth(true);
				history.push("/admin");
			} else {
				window.alert("Wrong Password!");
				setCredentials({ ...credentials, password: "" });
			}
		} else {
			window.alert("Wrong Credentials");
			setCredentials({ username: "", password: "" });
		}
	};
	return (
		<Container fluid>
			<Row className={styles.Login}>
				<Col md={{ span: 4, offset: 4 }} className={styles.formContainer}>
					<h2>Admin Login</h2>
					<Form onSubmit={handleLogin} className={styles.Form}>
						<Form.Group className="mb-3 mt-2" controlId="formBasicUsername">
							<Form.Control
								className={styles.userInput}
								type="text"
								placeholder="USERNAME"
								required={true}
								value={credentials.username}
								onChange={(e) =>
									setCredentials({ ...credentials, username: e.target.value })
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Control
								className={styles.userInput}
								type="password"
								placeholder="PASSWORD"
								required={true}
								value={credentials.password}
								onChange={(e) =>
									setCredentials({ ...credentials, password: e.target.value })
								}
							/>
						</Form.Group>
						<Button className={styles.button} variant="primary" type="submit">
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
