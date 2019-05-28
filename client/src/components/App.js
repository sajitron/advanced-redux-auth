import React from 'react';
import Header from './Header';

export default ({ children }) => {
	// whatever is inside route is rendered under the header
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
