import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image.png'

const Footer = () => {
	return (
		<footer className="app-footer">
			<div className="footer-content">
				<div className="footer-logo">
					<img src={logo} alt="Texas Tech Logo" />
					<span>Red Raider JobConnect</span>
				</div>
				<div className="footer-links">
					<Link to="/students">Students</Link>
					<Link to="/jobs">Jobs</Link>
					<Link to="/companies">Companies</Link>
				</div>
				<div className="footer-copyright">
					<p>&copy; {new Date().getFullYear()} Red Raider JobConnect. All Rights Reserved.</p>
					<p>A project for Texas Tech University in ENGR-1340.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;