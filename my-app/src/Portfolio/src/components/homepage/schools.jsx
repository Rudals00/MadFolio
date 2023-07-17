import React from "react";

import Card from "../common/card";
import '@fortawesome/fontawesome-free/js/all.js'
import "./styles/works.css";

const Schools = (props) => {
	const {list}=props
	return (
		<div className="works">
			<Card
				title="Schools"
				icon="fa-solid fa-graduation-cap"
				body={
					<div className="works-body">
						{list&&list.map((school)=>(
							<div className="work">
							<img
								src={process.env.PUBLIC_URL+"/school.png"}
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
