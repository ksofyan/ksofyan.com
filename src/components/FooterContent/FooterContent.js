import React from "react";
import {Row, Col, Icon, BackTop} from "antd";
import "./FooterContent.css";

const Footer = props => {

	return (
		<footer className="footerful">
			<Row className="footer-content" type="flex">
				<Col span={24}>
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