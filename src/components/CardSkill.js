import React from "react";

import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

function CardSkill(props) {
	return (
		<Card
			className="justify-content-center"
			style={{ border: "0", width: "10rem", height: "15rem" }}
		>
			<Card.Body className="cardS">
				<Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: "center" }}>{props.text}</Card.Text>
				<Card.Footer className="bg-transparent">
					<ProgressBar variant="info" now={props.number} label={props.number} />
				</Card.Footer>
			</Card.Body>
		</Card>
	);
}

export default CardSkill;
