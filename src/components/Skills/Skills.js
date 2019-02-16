import React from "react";
import {Row, Col, Icon} from "antd";
import SkillList from "./SkillList";
import "./Skill.css"

const Skills = props => {
	return (
		<div className ="skillsfull">
		 	<section className="skills">
		 	 	<Row type="flex">
		 	 		<Col xs={24} sm={24} md={12} lg={12} xl={12} className="skills-header">
					 	<span id="skills">
			              <Icon type="fire" style={{ fontSize: "50" }} /> Skills
			            </span>
		 	 		</Col>
		 	 		<Col xs={24} sm={24} md={12} lg={12} xl={12} className="skills-header">
					 	<span className="skills-description">Here's how I build.</span>
		 	 		</Col>
		 	 		<SkillList />
		 	 	</Row>
		 	</section>
		</div>
		)
}

export default Skills; 