import React from "react";

import Card from "../common/card";
import '@fortawesome/fontawesome-free/js/all.js'
import "./styles/works.css";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon="fa-solid fa-briefcase"
				title="Work"
				body={
					<div className="works-body">
						{INFO.works.map((work,index)=>(
							<div className="work">
							<img
								src="./work.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">{work.name}</div>
							<div className="work-subtitle">
								{work.description}
							</div>
							<div className="work-duration">{work.duration}</div>
						</div>							
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
