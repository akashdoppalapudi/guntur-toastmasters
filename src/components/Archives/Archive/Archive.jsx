import React from "react";
import { Card, Button } from "react-bootstrap";

import cardStyles from "../../../styles/Card.module.css";

const Archive = ({ archive }) => {
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
					<a href={archive.MOMLink} target="_blank" rel="noreferrer noopener">
						<Button variant="primary">MOM Doc</Button>
					</a>
					<a
						href={archive.agendaLink}
						target="_blank"
						rel="noreferrer noopener"
					>
						<Button variant="primary">More</Button>
					</a>
					<a href={archive.videoLink} target="_blank" rel="noreferrer noopener">
						<Button variant="primary">Watch</Button>
					</a>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Archive;
