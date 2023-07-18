import React, { useState,useEffect } from "react";
import { Link,useParams,useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from 'axios';
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Stack from "../components/projects/stack";
import EditBar from "../components/common/editbar";
import '../cv.css'
import "./styles/about.css";


const About = () => {
	const [data,setdata]=useState({})
	const {id}=useParams()
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
				<title>{`About | ${data&&data.name}'s Portfolio`}</title>
			</Helmet>

			<div className="page-content">
			<div className="editbar-links"><Link to="/" className='editbar-home'>Main</Link></div>
				<NavBar active="about" id={data.id} editable={editable}/>
				{editable&&<EditBar id={id}/>}
				<div className="content-wrapper">

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="cv-title about-title">
									Developmet stacks
								</div>
								{data.stacks&&data.stacks.map(item=>(
									<>
									<div className="cv-subtitle about-subtitle">
									{item.subtitle}
									</div>
									<div className="all-stacks-container">
									{item.substacks.map((stack, index) => (
										<div className="all-stacks-project" key={index}>
										<Stack
										logo={stack.logo}
										title={stack.title}
										description={stack.description}
										/>
									</div>
									))}											
									</div>
									</>									
								))}
								{data.additionls&&data.additionls.map(data=>(
								<>
								<div className="cv-title about-title">
								{data.title}
								</div>
								{data.content.map(subdata=>(
									<>
									<div className="cv-subtitle about-subtitle">
									{subdata.subtitle}
									</div>
									<div className="cv-home-content">
									{subdata.content}
								</div>									
									</>
								))}
								</>
								))}
							</div>
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

export default About;
