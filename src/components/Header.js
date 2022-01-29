import React from "react";

export default function Header(props) {
	return (
		<>
			<nav className="navbar">
				<div className="container">
					<div className="logo">eshop cart</div>
					<ul className="nav">
						<li>
							<a href="#/cart">
								Cart{" "}
								{props.countCartItems ? (
									<button className="badge">{props.countCartItems}</button>
								) : (
									""
								)}
							</a>
						</li>
					
					</ul>
				</div>
			</nav>
		</>
	);
}
