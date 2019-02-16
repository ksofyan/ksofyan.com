import React from "react";
import {Row, Col, Icon} from "antd";
import "./About.css";
// import KarinaImage from "./karina.png"

const About = props => {
	return(
		<section className="aboutfull">
			<article className="about">
				<Row type="flex">
					 <Col xs={24} sm={24} md={12} lg={12} xl={12} className="about-header">
				         <span id="about">
				           <Icon style={{ fontSize: "50" }} /> About
				         </span>
			          </Col>
			          <Col span={50} className="about-card">
			          	 <p>
			          	  <mark className="about-contents-header">a Traveller</mark>
			          	   <br />
			          	  <mark className="about-contents-header">a Yogi</mark>
			          	   <br />
			              <mark className="about-contents-header">a Tech Enthusiast</mark>
			              <br />
			               <br />
			               <br />
			              The improvements in technology over the last short 15 years have
			              been huge. We interact with technology on a daily basis and the
			              tech industry now has one of the most significant impacts on the
			              world. The industry is constantly changing and{" "}
			              <mark className="highlight">
			                "I believe that change is good, and that learning should never
			                stop".
			              </mark>{" "}
			              I love learning new things on a daily basis as a Developer and
			              being at the forefront of this phenomenal industry. Over the last
			              several years things have begun moving incredibly fast and web
			              development is becoming even more important as Web Apps replace
			              traditional software.
			            </p>
			          </Col>
				</Row>
			</article>
		</section> 

		)
}

export default About; 