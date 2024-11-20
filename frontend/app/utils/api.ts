import { Article, ArticleResponse } from '../types/article';
import { IUser } from '../types/user';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
export const API_TOKEN =
	'61a44568c1310936e3a0a9e9adfe3e2df78e660e20e3f136e527e554f1308505d4955aaa15bb713e594e79f1edf0c548686ad19e9bbc49132c5aa6472a535bf7e3059a006d5a047693cff513323af27af9b3ef7ce5ca8f368b68baa4277c1abf0941ac3ce2a2894ffba0d7b44e730e31c32f1b68231267c595bfd6999845795f';

export const apiGetArticles = async () => {
	const res = await fetch(`${API_URL}/api/articles?populate=*`, {
		next: { revalidate: 60 }, // опция для ISR
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data: ArticleResponse = await res.json();
	return data.data ?? [];
};

export const apiGetArticle = async (slug: string) => {
	const res = await fetch(
		`${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
		{
			next: { revalidate: 60 },
			headers: { Authorization: 'bearer ' + API_TOKEN },
		},
	);
	const article = await res.json();
	return article.data[0] as Article;
};

export const apiGetUser = async (id: number = 1) => {
	const res = await fetch(`${API_URL}/api/users?filters[id][$eq]=${id}`, {
		next: { revalidate: 60 }, // опция для ISR
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data = await res.json();
	return data[0] as IUser;
};
export const apiGetUsers = async () => {
	const res = await fetch(`${API_URL}/api/users`, {
		next: { revalidate: 60 }, // опция для ISR
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data = await res.json();
	return data as IUser[];
};
