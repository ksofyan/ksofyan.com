import React from "react";
import { Row, Col } from "antd";
import "./Hero.css";
import Navigation from "../Navigation/Navigation.js";

const Header = props => {
  return (
    <header className="herofull" id="home">
      <Navigation />
      <Row type="flex" align="middle">
        <Col span={24}>
          <p className="hero-welcome">WELCOME</p>
          <p className="hero-welcome2">My name is</p>
          <p className="hero-name">Karina Sofyan</p>
          <p className="hero-subtitle">
            I'm a Creative Problem Solver and a Full Stack Developer.
          </p>
          <div className="hero-arrow">
            <a href="#about">﹀</a>
          </div>
        </Col>
      </Row>
    </header>
  );
};
export default Header;
