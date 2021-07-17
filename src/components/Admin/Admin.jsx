import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AdminNavBar from "./AdminNavBar/AdminNavBar";
import AdminUpcomings from "./AdminUpcomings/AdminUpcomings";
import AdminArchives from "./AdminArchives/AdminArchives";
import AdminContacts from "./AdminContacts/AdminContacts";

const Admin = ({
	auth,
	currentArchiveId,
	setCurrentArchiveId,
	currentUpcomingId,
	setCurrentUpcomingId,
	currentContactId,
	setCurrentContactId,
}) => {
	if (!auth) {
		return <Redirect to="/login" />;
	}
	return (
		<BrowserRouter>
			<AdminNavBar />
			<Switch>
				<Route
					path="/admin-upcomings"
					exact
					component={() => (
						<AdminUpcomings
							auth={auth}
							currentUpcomingId={currentUpcomingId}
							setCurrentUpcomingId={setCurrentUpcomingId}
						/>
					)}
				/>
				<Route
					path="/admin-archives"
					exact
					component={() => (
						<AdminArchives
							auth={auth}
							currentArchiveId={currentArchiveId}
							setCurrentArchiveId={setCurrentArchiveId}
						/>
					)}
				/>
				<Route
					path="/admin-contacts"
					exact
					component={() => (
						<AdminContacts
							auth={auth}
							currentContactId={currentContactId}
							setCurrentContactId={setCurrentContactId}
						/>
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Admin;
