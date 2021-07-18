import React from "react";
import { Card, Button } from "react-bootstrap";

import cardStyles from "../../../styles/Card.module.css";

const NewsLetter = ({ newsLetter }) => {
	return (
		<Card className={cardStyles.Card}>
			<Card.Body>
				<Card.Title>{newsLetter.title}</Card.Title>
				<Card.Subtitle>Date: {newsLetter.date}</Card.Subtitle>
				<Card.Text>{newsLetter.description}</Card.Text>
				<div className={cardStyles.CardLinks}>
					{newsLetter.docLink && (
						<a
							href={newsLetter.docLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							<Button variant="primary">News Letter</Button>
						</a>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default NewsLetter;
