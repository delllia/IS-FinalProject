import React from "react";

import Jumbo from "../components/Jumbo";
import Content from "../components/Content";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import UPT from "../assets/images/universitatea-politehnica-timisoara.jpg";
import SI from "../assets/images/SI.png";

function EducationPage(props) {
	return (
		<div className="pageContainer">
			<Jumbo title={props.title} />
			<Content>
				<Container className="py-3">
					<Row className="justify-content-center subtitle-class">
						<Col className="py-4" xs={4} md={3}>
							<img
								src={SI}
								alt="Scoala Informala de IT"
								width="150"
								height="70"
							></img>
						</Col>
						<Col>
							<h3 className="display-4 font-weight-light">
								The Informal School of IT
							</h3>
							<p>2020 - Web Development with JavaScript</p>
							<p>2019 - Intro in IT</p>
						</Col>
					</Row>
					<hr></hr>
					<Row className="justify-content-center subtitle-class">
						<Col className="py-5" xs={4} md={3}>
							<img src={UPT} alt="UPT" width="170" height="130"></img>
						</Col>
						<Col className="py-5">
							<h3 className="display-4 font-weight-light">
								Politechnics University of Timisoara
							</h3>
							<p>1999/2005 - Architecture</p>
						</Col>
					</Row>
				</Container>
			</Content>
		</div>
	);
}

export default EducationPage;
