import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all.js'
import "./styles/project.css";

const Stack = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
						<i class="fa-solid fa-code"></i>
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{/* <div className="project-link">
							<div className="project-link-icon">
							<i class="fa-solid fa-link"></i>
							</div>

							<div className="project-link-text">{linkText}</div>
						</div> */}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Stack;
