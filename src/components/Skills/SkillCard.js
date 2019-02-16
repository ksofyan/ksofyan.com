import React from "react";
import {Row, Col, Icon} from "antd";
import "./SkillCard.css"

const SkillCard = ({name, description, icon}) => {

	return (
		<article >

		  <div className = "skill-card-full">
			<Col span={24} className="skills-card">
				<Row type="flex" justify="centre" align="middle">
					<Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills-title">
						<header>
							<Icon type={icon} style={{fontSize:40}} />
							{name}
						</header>
					</Col>
					<Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills-details">
						<span className="skills-list"> {description} </span>
					</Col>
				</Row>
			</Col>
		 </div>

		</article>

		)
}

export default SkillCard; 


