import React from 'react';
import './header.sass';
import { API_URL, apiGetUser } from '@/app/utils/api';
import Link from 'next/link';
const user = await apiGetUser();
const Header = () => {
	return (
		<header className="header">
			<p>TESTStrapi</p>
			<div>
				<Link href={`${API_URL}/admin`} target="_blank">
					Админ панель
					<svg aria-hidden="true" height="7" viewBox="0 0 6 6" width="7">
						<path
							className="link-svg"
							d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
							fill="white"
						></path>
					</svg>
				</Link>
				<span>
					<p>{user.username}</p>
					<p>{user.email}</p>
				</span>
			</div>
		</header>
	);
};

export default Header;
