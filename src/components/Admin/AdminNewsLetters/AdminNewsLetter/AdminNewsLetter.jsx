import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";

import { deleteNewsLetter } from "../../../../actions/newsLetters";
import cardStyles from "../../../../styles/Card.module.css";

const AdminNewsLetter = ({ newsLetter, setCurrentNewsLetterId }) => {
	const dispatch = useDispatch();
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
							News Letter Link
						</a>
					)}
				</div>
				<div className={cardStyles.CardLinks}>
					<Button
						variant="info"
						onClick={() => setCurrentNewsLetterId(newsLetter._id)}
					>
						Edit
					</Button>
					<Button
						variant="danger"
						onClick={() => dispatch(deleteNewsLetter(newsLetter._id))}
					>
						Delete
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default AdminNewsLetter;
