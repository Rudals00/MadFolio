import React from "react";

import Stack from "./stack";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const Stacklists = () => {
	return (
		<div className="all-projects-container">
			{INFO.stacks.map((stack, index) => (
				<div className="all-projects-project" key={index}>
					<Stack
						logo={stack.logo}
						title={stack.title}
						description={stack.description}
					/>
				</div>
			))}
		</div>
	);
};

export default Stacklists;
