import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";

import { deleteContact } from "../../../../actions/contacts";
import cardStyles from "../../../../styles/Card.module.css";

const AdminContact = ({ contact, setCurrentContactId }) => {
	const dispatch = useDispatch();
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
				<Card.Text>+91 {contact.mobile}</Card.Text>
				<div className={cardStyles.CardLinks}>
					<Button
						variant="info"
						onClick={() => setCurrentContactId(contact._id)}
					>
						Edit
					</Button>
					<Button
						variant="danger"
						onClick={() => dispatch(deleteContact(contact._id))}
					>
						Delete
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default AdminContact;
