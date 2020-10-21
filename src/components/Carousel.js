import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import am from "../assets/images/am-page2.png";
import rps from "../assets/images/rps.png";
import kendo from "../assets/images/kendo.png";
import "./carousel-style.css";

// class Carousel extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}

// 	render() {
// 		return <p>Carousel works!</p>;
// 	}
// }
function Carousel() {
	return (
		<div className="cardDeck">
			<CardDeck>
				<Card className="card shadow card-anim">
					<div className="overflow">
						<Card.Img className="card-img" variant="top" src={am} />
					</div>
					<Card.Body>
						<Card.Title>Archi-Max</Card.Title>
						<Card.Text>Presentation site</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							HTML5, CSS, BOOTSTRAP, JQUERY, JAVASCRIPT
						</small>
					</Card.Footer>
				</Card>
				<Card className="card shadow card-anim">
					<div className="overflow">
						<Card.Img className="card-img" variant="top" src={kendo} />
					</div>
					<Card.Body>
						<Card.Title>Kendo Workshop</Card.Title>
						<Card.Text>Presentation site</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">
							HTML5, CSS, JQUERY, JAVASCRIPT, KENDO UI
						</small>
					</Card.Footer>
				</Card>
				<Card className="card shadow card-anim">
					<div className="overflow">
						<Card.Img className="card-img" variant="top" src={rps} />
					</div>
					<Card.Body>
						<Card.Title>RPS Game</Card.Title>
						<Card.Text>Game</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">HTML5, CSS, JQUERY, JAVASCRIPT</small>
					</Card.Footer>
				</Card>
			</CardDeck>
		</div>
	);
}

export default Carousel;
