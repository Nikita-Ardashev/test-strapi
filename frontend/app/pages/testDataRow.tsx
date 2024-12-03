'use server';
import { apiGetArticles, apiGetUsers } from '../utils/api';
import { ArticleCard } from '@/components';
export default async function TestDataRow() {
	const articles = await apiGetArticles();
	const users = await apiGetUsers();
	return (
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
	);
}
