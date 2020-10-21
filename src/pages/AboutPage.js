import React from "react";

import Jumbo from "../components/Jumbo";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Content from "../components/Content";
import Pic from "../assets/images/DTMimg2.jpg";

function AboutPage(props) {
	return (
		<div className="pageContainer">
			<Jumbo title={props.title} />
			<Content>
				<Container className="py-5">
					<Row className="justify-content-left align-items-center">
						<Col md={3}>
							<Image
								className="round-pic flipping"
								src={Pic}
								width="200"
								height="200"
								roundedCircle
							/>
						</Col>
						<Col md={9}>
							<p>
								Hello, my name is Delia. I'm an architect with more than 10
								years of professional experience, running my own architectural
								design business since 2007. As an architect, I'm working
								consistently within established projects deadlines with the
								ability to remain focused under pressure.
							</p>
							<p>
								Beside architecture, I always have been passionate about web
								design, web applications and visual arts.
							</p>

							<p>
								My belief is that a true proffesional must be a good team player
								and always interested in self-improvement. For this reason I'm
								constantly learning new things, currently those things include
								gaining more experience with React, Node Express JS and Angular.
							</p>
							<p>
								I enjoy taking on new constructive challenges, good coffee and
								going on holidays with my family.
							</p>
						</Col>
					</Row>
				</Container>
			</Content>
		</div>
	);
}

export default AboutPage;
