import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Stack from "../components/projects/stack";
import "../components/projects/styles/allProjects.css";
import INFO from "../data/user";
import '../cv.css'
import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.name}'s Portfolio`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="cv-title about-title">
									Developmet stacks
								</div>
								{INFO.stacks.map(item=>(
									<>
									<div className="cv-subtitle about-subtitle">
									{item.subtitle}
									</div>
									<div className="all-projects-container">
									{item.substacks.map((stack, index) => (
										<div className="all-projects-project" key={index}>
										<Stack
										logo={stack.logo}
										title={stack.title}
										description={stack.description}
										/>
									</div>
									))}											
									</div>
									</>									
								))}
								{INFO.additionls.map(data=>(
								<>
								<div className="cv-title about-title">
								{data.title}
								</div>
								{data.content.map(subdata=>(
									<>
									<div className="cv-subtitle about-subtitle">
									{subdata.subtitle}
									</div>
									<div className="cv-home-content">
									{subdata.content}
								</div>									
									</>
								))}
								</>
								))}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
