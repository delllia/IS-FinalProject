import React from "react";

import Jumbo from "../components/Jumbo";
import Content from "../components/Content";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faBootstrap,
	faAngular,
	faHtml5,
	faCss3,
	faJs,
} from "@fortawesome/free-brands-svg-icons";
import CardSkill from "../components/CardSkill";

function SkillsPage(props) {
	return (
		<div className="pageContainer">
			<Jumbo title={props.title} />
			<Content>
				<Container>
					<Row md={3}>
						<Col className="p-2">
							<CardSkill
								title={<FontAwesomeIcon icon={faHtml5} size="5x" />}
								text="HTML5"
								label="HTML5"
								number="95"
							/>
						</Col>
						<Col className="p-2">
							<CardSkill
								title={<FontAwesomeIcon icon={faCss3} size="5x" />}
								text="CSS3"
								label="CSS3"
								number="85"
							/>
						</Col>
						<Col className="p-2">
							<CardSkill
								title={<FontAwesomeIcon icon={faJs} size="5x" />}
								text="JAVASCRIPT"
								label="JAVASCRIPT"
								number="75"
							/>
						</Col>
					</Row>
					<Row md={3}>
						<Col className="p-2">
							<CardSkill
								title={<FontAwesomeIcon icon={faBootstrap} size="5x" />}
								text="BOOTSTRAP"
								label="BOOTSTRAP"
								number="70"
							/>
						</Col>
						<Col className="p-2">
							<CardSkill
								title={<FontAwesomeIcon icon={faReact} size="5x" />}
								text="REACT JS"
								label="REACT"
								number="65"
							/>
						</Col>
						<Col className="p-2">
							<CardSkill
								title={<FontAwesomeIcon icon={faAngular} size="5x" />}
								text="ANGULAR"
								label="ANGULAR"
								number="40"
							/>
						</Col>
					</Row>
				</Container>
			</Content>
		</div>
	);
}

export default SkillsPage;
