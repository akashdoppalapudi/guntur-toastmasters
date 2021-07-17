import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Upcomings from "./components/Upcomings/Upcomings";
import Archives from "./components/Archives/Archives";
import Contacts from "./components/Contacts/Contacts";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import styles from "./App.module.css";

const App = () => {
	const [currentArchiveId, setCurrentArchiveId] = useState(null);
	const [currentUpcomingId, setCurrentUpcomingId] = useState(null);
	const [currentContactId, setCurrentContactId] = useState(null);
	const [auth, setAuth] = useState(null);

	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<main className={styles.main}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/upcoming" exact component={Upcomings} />
						<Route path="/archives" exact component={Archives} />
						<Route path="/contact" exact component={Contacts} />
						<Route
							path="/login"
							exact
							component={() => <Login auth={auth} setAuth={setAuth} />}
						/>
						<Route
							path="/admin"
							exact
							component={() => (
								<Admin
									auth={auth}
									currentArchiveId={currentArchiveId}
									setCurrentArchiveId={setCurrentArchiveId}
									currentContactId={currentContactId}
									setCurrentContactId={setCurrentContactId}
									currentUpcomingId={currentUpcomingId}
									setCurrentUpcomingId={setCurrentUpcomingId}
								/>
							)}
						/>
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
