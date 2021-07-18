import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";

import { createArchive, updateArchive } from "../../../../actions/archives";
import formStyles from "../../../../styles/Form.module.css";

const AdminArchiveForm = ({ currentArchiveId, setCurrentArchiveId }) => {
	const [archiveData, setArchiveData] = useState({
		title: "",
		description: "",
		date: "",
		MOMLink: "",
		agendaLink: "",
		videoLink: "",
		image: "",
	});
	const archive = useSelector((state) =>
		currentArchiveId
			? state.archives.find((p) => p._id === currentArchiveId)
			: null
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (archive) setArchiveData(archive);
	}, [archive]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentArchiveId) {
			dispatch(updateArchive(currentArchiveId, archiveData));
		} else {
			dispatch(createArchive(archiveData));
		}
		clear();
	};

	const clear = () => {
		setCurrentArchiveId(null);
		setArchiveData({
			title: "",
			description: "",
			date: "",
			MOMLink: "",
			agendaLink: "",
			videoLink: "",
			image: "",
		});
	};

	return (
		<div className={formStyles.FormContainer}>
			<h2>{currentArchiveId ? "Update " : "Create an "}Archive</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="basicFormTitle">
					<Form.Control
						type="text"
						placeholder="Title"
						value={archiveData.title}
						required={true}
						onChange={(e) =>
							setArchiveData({ ...archiveData, title: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDescription">
					<Form.Control
						type="text"
						placeholder="Description"
						value={archiveData.description}
						required={true}
						onChange={(e) =>
							setArchiveData({ ...archiveData, description: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormDate">
					<Form.Control
						type="text"
						placeholder="Date (dd/mm/yyyy)"
						value={archiveData.date}
						required={true}
						onChange={(e) =>
							setArchiveData({ ...archiveData, date: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormLink">
					<Form.Control
						type="url"
						placeholder="Link to MOM Document"
						value={archiveData.MOMLink}
						required={false}
						onChange={(e) =>
							setArchiveData({ ...archiveData, MOMLink: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormLink">
					<Form.Control
						type="url"
						placeholder="Link to More"
						value={archiveData.agendaLink}
						required={false}
						onChange={(e) =>
							setArchiveData({ ...archiveData, agendaLink: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormLink">
					<Form.Control
						type="url"
						placeholder="Link to Video"
						value={archiveData.videoLink}
						required={false}
						onChange={(e) =>
							setArchiveData({ ...archiveData, videoLink: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="basicFormFile">
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setArchiveData({ ...archiveData, image: base64 })
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

export default AdminArchiveForm;
