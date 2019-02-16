import React, {Component} from "react";
import {Icon} from "antd";
import "./Navigation.css";

class Navigation extends Component {
	constructor(){
		super();
		this.state = {
			menuOpen:false
		};
	} 

	handleMenuFold = () => {
		const {menuOpen} = this.state;
		this.setState({menuOpen:!menuOpen});
	};

	render() {
		const {menuOpen} = this.state; 
		return (
			<nav>
				<div className="navbar">
					<a className="nav-title" href="#home"> 
						KSofyan
					</a>
					<div className="desktop-menu">
						<a className="nav-item" href="#home">
							HOME
						</a>
						<a className="nav-item" href="#about">
							ABOUT
						</a>
						<a className="nav-item" href="#projects">
							PROJECTS
						</a>
						<a className="nav-item" href="#skills">
							SKILLS
						</a>
						<a className="nav-item" href="#whyme">
							WHY ME? 
						</a>
						<a className="nav-item" href="#contact">
							CONTACT
						</a>
					</div>
					<div className= "mobile-menu-toggle nav-item">
						<Icon
							type={menuOpen ? "menu-fold" : "menu-unfold"}
							onClick={this.handleMenuFold}
						/>
					</div>
				</div> 
				<div
					className= {
						menuOpen ? "mobile-menu mobile-menu-visible": "mobile-menu"
					}
				>
				 	<a 
				 		className= "mobile-menu-link"
				 		onClick = {this.handleMenuFold}
				 		href= "#home"
				 	>
				 		HOME 
				 	</a>
				 	<a 
				 		className= "mobile-menu-link"
				 		onClick = {this.handleMenuFold}
				 		href= "#about"
				 	>
				 		ABOUT
				 	</a>
				 	<a 
				 		className= "mobile-menu-link"
				 		onClick = {this.handleMenuFold}
				 		href= "#projects"
				 	>
				 		PROJECTS
				 	</a>
				 	<a 
				 		className= "mobile-menu-link"
				 		onClick = {this.handleMenuFold}
				 		href= "#skills"
				 	>
				 		SKILLS
				 	</a>
				 	<a 
				 		className= "mobile-menu-link"
				 		onClick = {this.handleMenuFold}
				 		href= "#whyme"
				 	>
				 		WHY ME? 
				 	</a>
				 	<a 
				 		className= "mobile-menu-link"
				 		onClick = {this.handleMenuFold}
				 		href= "#contact"
				 	>
				 		CONTACT
				 	</a>

				</div>

			</nav> 

			);
	}

}

export default Navigation; 