import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import axios from 'axios'
import '../cv.css'
import "./styles/projects.css";

const Projects = () => {
	const [data,setdata]=useState({})
	const {id}=useParams()
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
				console.log("Error occured!");
			  }
			}); 
		  }
		  getUserdata()
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${data.name}'s Portfolio`}</title>
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
