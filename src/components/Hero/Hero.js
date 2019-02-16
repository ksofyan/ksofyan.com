import React from "react";
import { Row, Col, Icon } from "antd";
import "./Hero.css";
import Navigation from "../Navigation/Navigation.js";

const Header = props => {
  return (
    <header className="herofull" id="home">
      <Navigation />
      <Row type="flex" align="middle">
        <Col span={24}>
          <p className="hero-intro">Hey there! My name is</p>
          <p className="hero-name">Karina Ramadhan</p>
          <p className="hero-subtitle">
            I'm a Creative Problem Solver and Full Stack Developer.
          </p>
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
          <div className="hero-arrow">
            <a href="#portfolio">﹀</a>
          </div>
        </Col>
      </Row>
    </header>
  );
};
export default Header;
