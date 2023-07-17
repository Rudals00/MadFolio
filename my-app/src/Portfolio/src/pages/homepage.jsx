import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Schools from "../components/homepage/schools";
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import '../cv.css'
import "./styles/homepage.css";
import { useNavigate, useParams } from "react-router-dom";

const Homepage = () => {
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
			  if(response.data!="ERROR")
			  {
				setdata(response.data)
			  }
			  else{
				alert("You have to create one first!")
				navigate("/")
			  }
			}); 
		  }
		  if(id)
		  	getUserdata()
		  else{
			alert("Please Login first")
		  	navigate("/login")
		  }
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{data.name}'s Portfolio</title>
			</Helmet>

			<div className="page-content">
				<NavBar id={data.id} active="home" />
				<br></br>
				<br></br>
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="cv-title homepage-title">
									{data.name}
								</div>
								<div className="cv-subtitle homepage-subtitle">
									{data.job}
								</div>
								<div className="cv-home-content homepage-subtitle">
									{data.description}
								</div>
								<div className="cv-subtitle homepage-subtitle">
									Contact
								</div>
								<div className="homepage-socials">
								<a
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-building"></i> &nbsp; {data.office}
								</a>
								</div>
								<div className="homepage-socials">
								<div
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-mobile"></i> &nbsp; {data.phone}
								</div>
								</div>
								<div className="homepage-socials">
								<a
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-envelope"></i> &nbsp; {data.email}
								</a>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img //이미지 지정 가능하게
											src={process.env.PUBLIC_URL+"/homepage.jpg"}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="cv-subtitle homepage-subtitle">
									Link
								</div>
						<div className="homepage-socials">
						<div className="homepage-social-icon">
							<i class="fa-brands fa-github"></i></div>
							<a
								href={data.github}
								target="_blank"
								rel="noreferrer"
								className="homepage-social-icon"
							>
							{data.github}
							</a>
						</div>
						<div className="homepage-after-title">
							<div className="homepage-articles">
							<Schools list={data.schools}/>
							</div>
							<div className="homepage-works">
								<Works list={data.works}/>
							</div>
						</div>

						<div className="page-footer">
							<Footer id={data.id}/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
