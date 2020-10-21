import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function Footer() {
	return (
		<footer className="mt-5">
			<Container fluid={true}>
				<Row
					className="border-top justify-content-between p-3"
					xs={2}
					sd={2}
					md={2}
				>
					<Col className="p-0" md={3} sm={3}>
						@2020
					</Col>
					<Col className="p-0 d-flex justify-content-end" md={3}>
						This website was made by Delia Tirla.
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
