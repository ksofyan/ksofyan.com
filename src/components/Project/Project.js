import React from "react";
import {Row, Col} from "antd";

import "./Project.css"

const Project = props => {
	return (
		<div className ="projectfull">
		 	<section className="project">
		 	 	<Row type="flex">
		 	 		<Col xs={24} sm={24} md={12} lg={12} xl={12} className="project-header">
					 	<span id="project">
			              Projects
			            </span>
		 	 		</Col>
		 	 	</Row>
		 	</section>
		</div>
		)
}

export default Project; 
