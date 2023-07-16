import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Schools from "../components/homepage/schools";
import '@fortawesome/fontawesome-free/js/all.js'
import INFO from "../data/user";
import '../cv.css'
import "./styles/homepage.css";

const Homepage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.name}'s Portfolio</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<br></br>
				<br></br>
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="cv-title homepage-title">
									{INFO.main.name}
								</div>
								<div className="cv-subtitle homepage-subtitle">
									{INFO.main.job}
								</div>
								<div className="cv-home-content homepage-subtitle">
									{INFO.main.description}
								</div>
								<div className="cv-subtitle homepage-subtitle">
									Contact
								</div>
								<div className="homepage-socials">
								<a
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-building"></i> &nbsp; {INFO.socials.office}
								</a>
								</div>
								<div className="homepage-socials">
								<a
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-mobile"></i> &nbsp; {INFO.socials.phone}
								</a>
								</div>
								<div className="homepage-socials">
								<a
								className="homepage-social-icon"
								>
								<i class="fa-solid fa-envelope"></i> &nbsp; {INFO.main.email}
								</a>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img //이미지 지정 가능하게
											src="homepage.jpg"
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
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								className="homepage-social-icon"
							>
							{INFO.socials.github}
							</a>
						</div>
						<div className="homepage-after-title">
							<div className="homepage-articles">
							<Schools />
							</div>
							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
