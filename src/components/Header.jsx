import logo from "../assets/logo.svg";

const Header = () => {
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between item-center">
					{/* Logo */}
					<a href="#">
						<img src={logo} alt="" />
					</a>
					{/* Button */}
					<button className="btn btn-sm">Work with me</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
