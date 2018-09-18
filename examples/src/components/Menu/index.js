import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div>
			<Link to="/buttons">buttons</Link>
			<Link to="/post">post</Link>
			<Link to="/sandbox">sandbox</Link>
		</div>
	);
};

export default Menu;
