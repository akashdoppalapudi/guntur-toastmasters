import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";

import { createUpcoming, updateUpcoming } from "../../../../actions/upcomings";
import formStyles from "../../../../styles/Form.module.css";

const AdminUpcomingForm = ({ currentUpcomingId, setCurrentUpcomingId }) => {
	const [upcomingData, setUpcomingData] = useState({
		title: "",
		description: "",
		date: "",
		agendaLink: "",
		meetLink: "",
		image: "",
	});
	const upcoming = useSelector((state) =>
		currentUpcomingId
			? state.upcomings.find((p) => p._id === currentUpcomingId)
			: null
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (upcoming) setUpcomingData(upcoming);
	}, [upcoming]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentUpcomingId) {
			dispatch(updateUpcoming(currentUpcomingId, upcomingData));
		} else {
			dispatch(createUpcoming(upcomingData));
		}
		clear();
	};

	const clear = () => {
		setCurrentUpcomingId(null);
		setUpcomingData({
			title: "",
			description: "",
			date: "",
			agendaLink: "",
			meetLink: "",
			image: "",
		});
	};

	return (
		<div className={formStyles.FormContainer}>
			<h2>{currentUpcomingId ? "Update " : "Create an "}Upcoming</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="basicFormTitle">
					<Form.Control
						type="text"
						placeholder="Title"
						value={upcomingData.title}
						required={true}
						onChange={(e) =>
							setUpcomingData({ ...upcomingData, title: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDescription">
					<Form.Control
						type="text"
						placeholder="Description"
						value={upcomingData.description}
						required={true}
						onChange={(e) =>
							setUpcomingData({ ...upcomingData, description: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDate">
					<Form.Control
						type="text"
						placeholder="Date (dd/mm/yyyy)"
						value={upcomingData.date}
						required={true}
						onChange={(e) =>
							setUpcomingData({ ...upcomingData, date: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormLink">
					<Form.Control
						type="url"
						placeholder="Link to Agenda Document"
						value={upcomingData.agendaLink}
						required={false}
						onChange={(e) =>
							setUpcomingData({ ...upcomingData, agendaLink: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormLink">
					<Form.Control
						type="url"
						placeholder="Link to Meeting"
						value={upcomingData.meetLink}
						required={false}
						onChange={(e) =>
							setUpcomingData({ ...upcomingData, meetLink: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormFile">
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setUpcomingData({ ...upcomingData, image: base64 })
						}
					></FileBase>
				</Form.Group>
				<div className={formStyles.FormButtons}>
					<Button type="submit" variant="primary">
						Submit
					</Button>
					<Button variant="warning" onClick={clear}>
						Clear
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default AdminUpcomingForm;
