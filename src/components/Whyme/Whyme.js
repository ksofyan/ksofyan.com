import React from "react";
import {Row, Col} from "antd";

import "./Whyme.css"

const Whyme = props => {
	return (
		<div className ="whymefull">
		 	<section className="whyme">
		 	 	<Row type="flex">
		 	 		<Col xs={24} sm={24} md={12} lg={12} xl={12} className="whyme-header">
					 	<span id="whyme">
			              Why Me? 
			            </span>
		 	 		</Col>
		 	 	</Row>
		 	</section>
		</div>
		)
}

export default Whyme; 
