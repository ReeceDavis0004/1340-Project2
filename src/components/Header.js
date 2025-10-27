import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../image.png"
import "./Header.css"

const Header = ({ }) => {
	const location = useLocation();
	const activePage = location.pathname.split('/')[1];
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location.pathname]);

	const navItems = [
		{ path: '/students', name: 'Students', id: 'students' },
		{ path: '/jobs', name: 'Jobs', id: 'jobs' },
		{ path: '/companies', name: 'Companies', id: 'companies' },
	];

	return (
		<header className="app-header">
			<Link className="logo-container" to="/">
				<img src={logo} alt="Texas Tech Logo" />
				<span>Red Raider JobConnect</span>
			</Link>
			<nav className="nav-links-desktop">
				{navItems.map((item) => (
					<Link key={item.id} to={item.path} className={`nav-link ${activePage === item.id ? 'active' : ''}`}>
						{item.name}
					</Link>
				))}
			</nav>
			<div className="menu-button-mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<i data-feather={isMenuOpen ? "x" : "menu"}></i>
			</div>

			{isMenuOpen && (
				<div className="nav-links-mobile">
					{navItems.map(item => (
						<Link key={Math.floor(Math.random() * 500000)} to={item.path} className="nav-link-mobile-item">
							{item.name}
						</Link>
					))}
					<div className="mobile-menu-footer">
					</div>
				</div>
			)}

		</header>
	);
};

export default Header;

