import React from "react";
import {Row, Col, Icon} from "antd"; 
import "./Contact.css"

const Contact = props => {
	return (
    <header className="herofull" id="home">
      <Row type="flex" align="middle">
        <Col span={24}>
        <p className="hero-name">Lets Connect!</p>
          <a
            href="https://www.linkedin.com/in/carinasofyan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Icon
              type="linkedin"
              theme="filled"
              style={{ fontSize: 50 }}
              className="hero-icon"
            />
            <span className="contact-text"> Linkedin</span>
          </a>
          <span className="hero-dot">·</span>
          <a
            href="https://github.com/ksofyan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Icon
              type="github"
              theme="filled"
              style={{ fontSize: 50 }}
              className="hero-icon"
            />
            <span className="contact-text"> Github</span>
          </a>
          <span className="hero-dot">·</span>
          <a
            href="https://www.instagram.com/karinasofyan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Icon
              type="instagram"
              theme="filled"
              style={{ fontSize: 50 }}
              className="hero-icon"
            />
            <span className="contact-text"> Instagram</span>
          </a>
        </Col>
      </Row>
    </header>
		);
};

export default Contact; 