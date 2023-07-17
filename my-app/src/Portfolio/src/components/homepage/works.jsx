import React from "react";

import Card from "../common/card";
import '@fortawesome/fontawesome-free/js/all.js'
import "./styles/works.css";

const Works = (props) => {
	const {list}=props
	return (
		<div className="works">
			<Card
				icon="fa-solid fa-briefcase"
				title="Work"
				body={
					<div className="works-body">
						{list&&list.map((work)=>(
							<div className="work">
							<img
								src={process.env.PUBLIC_URL+"/work.png"}
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
