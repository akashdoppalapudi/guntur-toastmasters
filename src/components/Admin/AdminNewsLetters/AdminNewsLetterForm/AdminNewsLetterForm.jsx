import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import {
	createNewsLetter,
	updateNewsLetter,
} from "../../../../actions/newsLetters";
import formStyles from "../../../../styles/Form.module.css";

const AdminNewsLetterForm = ({
	currentNewsLetterId,
	setCurrentNewsLetterId,
}) => {
	const [newsLetterData, setNewsLetterData] = useState({
		title: "",
		description: "",
		date: "",
		docLink: "",
	});
	const newsLetter = useSelector((state) =>
		currentNewsLetterId
			? state.newsLetters.find((p) => p._id === currentNewsLetterId)
			: null
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (newsLetter) setNewsLetterData(newsLetter);
	}, [newsLetter]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentNewsLetterId) {
			dispatch(updateNewsLetter(currentNewsLetterId, newsLetterData));
		} else {
			dispatch(createNewsLetter(newsLetterData));
		}
		clear();
	};

	const clear = () => {
		setCurrentNewsLetterId(null);
		setNewsLetterData({
			title: "",
			description: "",
			date: "",
			docLink: "",
		});
	};

	return (
		<div className={formStyles.FormContainer}>
			<h2>{currentNewsLetterId ? "Update " : "Create a "}NewsLetter</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="basicFormTitle">
					<Form.Control
						type="text"
						placeholder="Title"
						value={newsLetterData.title}
						required={true}
						onChange={(e) =>
							setNewsLetterData({ ...newsLetterData, title: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDescription">
					<Form.Control
						type="text"
						placeholder="Description"
						value={newsLetterData.description}
						required={true}
						onChange={(e) =>
							setNewsLetterData({
								...newsLetterData,
								description: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDate">
					<Form.Control
						type="text"
						placeholder="Date (dd/mm/yyyy)"
						value={newsLetterData.date}
						required={true}
						onChange={(e) =>
							setNewsLetterData({ ...newsLetterData, date: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormLink">
					<Form.Control
						type="url"
						placeholder="Link to Document"
						value={newsLetterData.docLink}
						required={false}
						onChange={(e) =>
							setNewsLetterData({ ...newsLetterData, docLink: e.target.value })
						}
					/>
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

export default AdminNewsLetterForm;
