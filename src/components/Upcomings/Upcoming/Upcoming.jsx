import React from "react";
import { Card, Button } from "react-bootstrap";

import cardStyles from "../../../styles/Card.module.css";

const Upcoming = ({ upcoming }) => {
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
					{upcoming.agendaLink && (
						<a
							href={upcoming.agendaLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							<Button variant="primary">Agenda Doc</Button>
						</a>
					)}
					{upcoming.meetLink && (
						<a
							href={upcoming.meetLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							<Button variant="primary">Meet Here</Button>
						</a>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default Upcoming;
