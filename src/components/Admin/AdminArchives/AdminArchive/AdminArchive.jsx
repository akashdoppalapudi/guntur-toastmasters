import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";

import { deleteArchive } from "../../../../actions/archives";
import cardStyles from "../../../../styles/Card.module.css";

const AdminArchive = ({ archive, setCurrentArchiveId }) => {
	const dispatch = useDispatch();
	return (
		<Card className={cardStyles.Card}>
			<Card.Img
				className={cardStyles.CardImg}
				src={
					archive.image ||
					"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
				}
				alt="archive image"
			/>
			<Card.Body>
				<Card.Title>{archive.title}</Card.Title>
				<Card.Subtitle>Date: {archive.date}</Card.Subtitle>
				<Card.Text>{archive.description}</Card.Text>
				<div className={cardStyles.CardLinks}>
					{archive.MOMLink && (
						<a href={archive.MOMLink} target="_blank" rel="noreferrer noopener">
							MOM Link
						</a>
					)}
					{archive.agendaLink && (
						<a
							href={archive.agendaLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							More Link
						</a>
					)}
					{archive.videoLink && (
						<a
							href={archive.videoLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							Video Link
						</a>
					)}
				</div>
				<div className={cardStyles.CardLinks}>
					<Button
						variant="info"
						onClick={() => setCurrentArchiveId(archive._id)}
					>
						Edit
					</Button>
					<Button
						variant="danger"
						onClick={() => dispatch(deleteArchive(archive._id))}
					>
						Delete
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default AdminArchive;
