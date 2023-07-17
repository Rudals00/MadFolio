import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all.js'
import "./styles/stack.css";

const Stack = (props) => {
	const {title, description} = props;

	return (
		<React.Fragment>
			<div className="stack">
					<div className="stack-container">
						<div className="stack-logo">
						<i class="fa-solid fa-code"></i>
						</div>
						<div className="stack-title">{title}</div>
						<div className="stack-description">{description}</div>
					</div>
			</div>
		</React.Fragment>
	);
};

export default Stack;
