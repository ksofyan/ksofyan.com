import React from "react";
import {Row, Col, Icon, BackTop} from "antd";
import "./FooterContent.css";

const Footer = props => {

	return (
		<footer className="footerful">
			<Row className="footer-content" type="flex">
				<Col span={24}>
					<a 
						href= "https://www.linkedin.com/in/carinasofyan"
						target= "_blank"
						rel ="noopener noreferrer"
					>
						<Icon type="linkedin" theme="filled" style={{fontSize:18}}/>
						<span className="footer_text">Linkedin</span>
					</a>
					<a 
						href= "https://github.com/ksofyan"
						target= "_blank"
						rel ="noopener noreferrer"
					>
						<Icon type="github" theme="filled" style={{fontSize:18}}/>
						<span className="footer_text">Github</span>
					</a>
					<span className="footer-link">
					 	<Icon type="copyright" stype={{fontSize:15}}/>
					 	2019 Karina Ramadhan
					</span>
				</Col>
			</Row>
			<BackTop visibilityHeight="1000"/>
		</footer>
		)

}

export default Footer;