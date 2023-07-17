import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Project from "../components/projects/project_designer";
import axios from 'axios'
import '../cv.css'
import "./styles/projects.css";

const Projects = () => {
	const [data,setdata]=useState({})
	const {id}=useParams()
	const navigate=useNavigate()
	useEffect(() => {
		async function getUserdata(){
			axios({
			  method:'post',
			  url:'/getcvdata',
			  data:{
				'id':id
			  }
			}).then(response=>{
			  if(response.data.result!="ERROR")
			  {
				setdata(response.data)
			  }
			  else{
				navigate("/")
			  }
			}); 
		  }
		  getUserdata()
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${data&&data.name}'s Portfolio`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" id={data.id}/>
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="cv-title projects-title">
							My Projects
						</div>
						<div className="cv-subtitle projects-subtitle">
							Here are my projects. You can visit github link or other related link as click.
						</div>
						<div className="all-projects-container">
						{data.projects&&data.projects.map((project,index)=>(
							<div className="all-projects-project" key={index}>
							<Project id={data.id} index={index} title={project.title} description={project.description} link={project.link}/>
							</div>
						))
						}
						</div>
					</div>
					<div className="page-footer">
						<Footer id={data.id}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
