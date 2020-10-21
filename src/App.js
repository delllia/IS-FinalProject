import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Delia Tirla",
			headerLinks: [
				{ title: "Home", path: "/" },
				{ title: "About", path: "/about" },
				{ title: "Education", path: "/education" },
				{ title: "Contact", path: "/contact" },
			],
			home: {
				title: "Be deterMined",
				subTitle: "Anything is possible.",
				text: "Checkout my projects below",
			},
			about: {
				title: "About me",
			},
			education: {
				title: "My Education",
			},
			skills: {
				title: "My Skills",
			},
			contact: {
				title: "Let's Talk",
			},
		};
	}

	render() {
		return (
			<Router>
				<Container className="p-0" fluid={true}>
					<Navbar className="border-bottom" bg="transparent" expand="lg">
						<Navbar.Brand>Delia Tirla</Navbar.Brand>
						<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav className="ml-auto">
								<Link className="nav-link" to="/">
									Home
								</Link>
								<Link className="nav-link" to="/about">
									About
								</Link>
								<Link className="nav-link" to="/education">
									Education
								</Link>
								<Link className="nav-link" to="/skills">
									Skills
								</Link>
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<Switch>
						<Route exact path="/">
							<HomePage
								title={this.state.home.title}
								subTitle={this.state.home.subTitle}
								text={this.state.home.text}
							/>
						</Route>
						<Route path="/about">
							<AboutPage title={this.state.about.title} />
						</Route>
						<Route path="/education">
							<EducationPage title={this.state.education.title} />
						</Route>
						<Route path="/skills">
							<SkillsPage title={this.state.skills.title} />
						</Route>
						<Route path="/contact">
							<ContactPage title={this.state.contact.title} />
						</Route>
					</Switch>

					<Footer />
				</Container>
			</Router>
		);
	}
}

export default App;
