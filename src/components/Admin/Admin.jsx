import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AdminNavBar from "./AdminNavBar/AdminNavBar";
import AdminUpcomings from "./AdminUpcomings/AdminUpcomings";
import AdminArchives from "./AdminArchives/AdminArchives";
import AdminContacts from "./AdminContacts/AdminContacts";
import AdminNewsLetters from "./AdminNewsLetters/AdminNewsLetters";

const Admin = ({
	auth,
	currentArchiveId,
	setCurrentArchiveId,
	currentUpcomingId,
	setCurrentUpcomingId,
	currentContactId,
	setCurrentContactId,
	currentNewsLetterId,
	setCurrentNewsLetterId,
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
				<Route
					path="/admin-news-letters"
					exact
					component={() => (
						<AdminNewsLetters
							auth={auth}
							currentNewsLetterId={currentNewsLetterId}
							setCurrentNewsLetterId={setCurrentNewsLetterId}
						/>
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default Admin;
