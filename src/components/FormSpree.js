import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status: "",
		};
	}

	render() {
		const { status } = this.state;
		return (
			<div className="py-3">
				<Form
					onSubmit={this.submitForm}
					action="https://formspree.io/..."
					method="POST"
				>
					<Form.Group>
						<Form.Label htmlFor="full-name">Full Name</Form.Label>
						<Form.Control id="full-name" name="name" type="text" />
					</Form.Group>

					<Form.Group>
						<Form.Label htmlFor="email">Email</Form.Label>
						<Form.Control id="email" name="email" type="email" />
					</Form.Group>

					<Form.Group>
						<Form.Label htmlFor="message">Message</Form.Label>
						<Form.Control
							id="message"
							name="message"
							type="text"
							as="textarea"
							rows="4"
						/>
					</Form.Group>

					{status === "SUCCESS" ? (
						<p>Thanks!</p>
					) : (
						<Button className="d-inline-block" variant="primary" type="submit">
							Send
						</Button>
					)}
					{status === "ERROR" && <p>Ooops! There was an error.</p>}
				</Form>
			</div>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}
}
