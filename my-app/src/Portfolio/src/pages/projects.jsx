import React, {useState, useEffect } from "react";
import { Link,useNavigate, useParams,useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Project from "../components/projects/project_designer";
import EditBar from "../components/common/editbar";
import axios from 'axios'
import '../cv.css'
import "./styles/projects.css";

const Projects = () => {
	const [data,setdata]=useState({})
	const {id}=useParams()
	const navigate=useNavigate()
	const location=useLocation()
	const editable=location.state&&location.state.editable
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
			<div className="editbar-links"><Link to="/" className='editbar-home'>Main</Link></div>
				<NavBar active="projects" id={data.id} editable={editable}/>
				{editable&&<EditBar id={id}/>}
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
						<Footer id={data.id} editable={editable}/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
