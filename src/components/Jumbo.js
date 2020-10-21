import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./jumbo-style.css";

function Jumbo(props) {
	return (
		<Jumbotron className="bg-transparent jumbotron-fluid p-0">
			<Container fluid={true}>
				<Row className="justify-content-center py-5">
					<Col md={6} sm={12}>
						<h1 className="display-1 font-weight-bolder title-class">
							{props.title}
						</h1>
						{props.subTitle && (
							<h3 className="display-4 font-weight-light subtitle-class">
								{props.subTitle}
							</h3>
						)}
						{props.text && (
							<h3 className="lead font-weight-light text-class">
								{props.text}
							</h3>
						)}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
}

export default Jumbo;
