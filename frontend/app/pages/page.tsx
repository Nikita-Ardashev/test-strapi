import './home.sass';
import React from 'react';
import TestDataRow from './testDataRow';
import AnyData from './anyData';

const Home = async () => {
	return (
		<section className="home">
			<h1>Данные из БД</h1>
			<TestDataRow />
			<AnyData />
		</section>
	);
};
export default Home;
