import React from "react";

import Jumbo from "../components/Jumbo";
import { render } from "@testing-library/react";
import Content from "../components/Content";
import MyForm from "../components/FormSpree";

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: "",
			disable: false,
			emailSent: null,
		};
	}

	render() {
		return (
			<div className="pageContainer">
				<Jumbo title={this.props.title} />
				<Content>
					<MyForm />
				</Content>
			</div>
		);
	}
}

export default ContactPage;
