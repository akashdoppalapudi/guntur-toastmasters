import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";

import { deleteUpcoming } from "../../../../actions/upcomings";
import cardStyles from "../../../../styles/Card.module.css";

const AdminUpcoming = ({ upcoming, setCurrentUpcomingId }) => {
	const dispatch = useDispatch();
	return (
		<Card className={cardStyles.Card}>
			<Card.Img
				className={cardStyles.CardImg}
				src={
					upcoming.image ||
					"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
				}
				alt="upcoming image"
			/>
			<Card.Body>
				<Card.Title>{upcoming.title}</Card.Title>
				<Card.Subtitle>Date: {upcoming.date}</Card.Subtitle>
				<Card.Text>{upcoming.description}</Card.Text>
				<div className={cardStyles.CardLinks}>
					<a
						href={upcoming.agendaLink}
						target="_blank"
						rel="noreferrer noopener"
					>
						Agenda Link
					</a>
					<a href={upcoming.meetLink} target="_blank" rel="noreferrer noopener">
						Meet Link
					</a>
				</div>
				<div className={cardStyles.CardLinks}>
					<Button
						variant="info"
						onClick={() => setCurrentUpcomingId(upcoming._id)}
					>
						Edit
					</Button>
					<Button
						variant="danger"
						onClick={() => dispatch(deleteUpcoming(upcoming._id))}
					>
						Delete
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default AdminUpcoming;
