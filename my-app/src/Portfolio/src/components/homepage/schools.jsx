import React from "react";

import Card from "../common/card";
import '@fortawesome/fontawesome-free/js/all.js'
import "./styles/works.css";
import INFO from "../../data/user";

const Schools = () => {
	return (
		<div className="works">
			<Card
				title="Schools"
				icon="fa-solid fa-graduation-cap"
				body={
					<div className="works-body">
						{INFO.schools.map((school,index)=>(
							<div className="work">
							<img
								src="./school.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">{school.name}</div>
							<div className="work-subtitle">
								{school.description}
							</div>
							<div className="work-duration">{school.duration}</div>
							</div>							
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Schools;
