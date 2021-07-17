import React from "react";
import { Card } from "react-bootstrap";

import cardStyles from "../../../styles/Card.module.css";

const Contact = ({ contact }) => {
	return (
		<Card className={cardStyles.Card}>
			<Card.Img
				className={cardStyles.CardImg}
				src={
					contact.image ||
					"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
				}
				alt="contact image"
			/>
			<Card.Body>
				<Card.Title>{contact.designation}</Card.Title>
				<Card.Subtitle>{contact.name}</Card.Subtitle>
				<Card.Text>Email : {contact.email}</Card.Text>
				<Card.Text>Mobile : +91 {contact.mobile}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Contact;
