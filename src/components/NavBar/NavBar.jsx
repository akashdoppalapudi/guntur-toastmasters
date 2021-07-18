import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<Navbar className={styles.NavBar} collapseOnSelect bg="none" expand="md">
			<Container fluid>
				<Navbar.Brand href="#">
					<Link className={styles.NavLink} to="/">
						<img
							className={styles.brandLogo}
							src="/toastmasters.png"
							alt="toastmasters logo"
						/>
						<h2 className={styles.BrandLink}>Guntur Toastmasters</h2>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					className={styles.ToggleButton}
					aria-controls="responsive-navbar-nav"
				/>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-around"
				>
					<Nav className="mr-auto">
						<Nav.Link className={styles.NavLinkContainer} href="#">
							<Link className={styles.NavLink} to="/">
								Home
							</Link>
						</Nav.Link>
						<Nav.Link className={styles.NavLinkContainer} href="#">
							<Link className={styles.NavLink} to="/upcoming">
								Upcoming
							</Link>
						</Nav.Link>
						<Nav.Link className={styles.NavLinkContainer} href="#">
							<Link className={styles.NavLink} to="/archives">
								Archives
							</Link>
						</Nav.Link>
						<Nav.Link className={styles.NavLinkContainer} href="#">
							<Link className={styles.NavLink} to="/contact">
								Contact
							</Link>
						</Nav.Link>
						<Nav.Link className={styles.NavLinkContainer} href="#">
							<Link className={styles.NavLink} to="/login">
								Login
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
