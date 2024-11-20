import ArticleCard from '../components/articleCard/articleCard';
import { apiGetArticles, apiGetUsers } from '../utils/api';
import './home.sass';
export default async function Home() {
	const articles = await apiGetArticles();
	const users = await apiGetUsers();
	return (
		<section className="home">
			<h1>Our Blog</h1>
			<div className="home__data-row">
				<div className="home__articles">
					{articles.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</div>
				<div className="home__users">
					{users.map((u) => (
						<p key={u.id}>
							<span>id: {u.id}</span>
							<span>email: {u.email}</span>
							<span>username: {u.username}</span>
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
