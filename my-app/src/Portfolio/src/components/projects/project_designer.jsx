import React from "react";
import { Link } from "react-router-dom";
import "./styles/project_designer.css";

const Project = (props) => {
	const { id,index, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
                        <img
							src={"/"+id+"_"+index+".png"}
							alt="about"
                            className="project-image"
						/>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
							<i class="fa-solid fa-link"></i>
							</div>
							<div className="project-link-text">Learn more</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;