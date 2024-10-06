import { FaSearch } from "react-icons/fa";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-links">
					<a href="/" className="navbar-link">
						AEON
					</a>
					<a href="/" className="navbar-link">
						Showcase
					</a>
					<a href="/" className="navbar-link">
						Docs
					</a>
					<a href="/" className="navbar-link">
						Blog
					</a>
					<a href="/" className="navbar-link">
						Analytics
					</a>
					<a href="/" className="navbar-link">
						Commerce
					</a>
					<a href="/" className="navbar-link">
						Templates
					</a>
					<a href="/" className="navbar-link">
						Enterprise
					</a>
				</div>
				<div className="search-container">
					<div className="search-wrapper">
						<input type="text" placeholder="Search documentation..." className="search-input" />
						<FaSearch className="search-icon" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
