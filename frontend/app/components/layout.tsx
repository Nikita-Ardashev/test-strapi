import React from 'react';
import Header from './header';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};
export default Layout;
