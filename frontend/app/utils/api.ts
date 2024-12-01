import axios from 'axios';
import { Payload } from '../types/common/Payload';
import { Article_Plain } from '../types/api/article';
import { User_Plain } from '../types/common/User';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
export const API_TOKEN =
	'61a44568c1310936e3a0a9e9adfe3e2df78e660e20e3f136e527e554f1308505d4955aaa15bb713e594e79f1edf0c548686ad19e9bbc49132c5aa6472a535bf7e3059a006d5a047693cff513323af27af9b3ef7ce5ca8f368b68baa4277c1abf0941ac3ce2a2894ffba0d7b44e730e31c32f1b68231267c595bfd6999845795f';

export const apiGetAny = async (nameTable: string) => {
	const res = await axios.get(`${API_URL}/api/${nameTable}?populate=*`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data = await res.data;
	return data;
};

export const apiGetArticles = async () => {
	const res = await axios.get(`${API_URL}/api/articles?populate=*`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data: Payload<Article_Plain> = await res.data;
	return data.data ?? [];
};

export const apiGetArticle = async (slug: string) => {
	const res = await axios.get(
		`${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
		{
			headers: { Authorization: 'bearer ' + API_TOKEN },
		},
	);
	const article = await res.data;
	return article.data[0] as Article_Plain;
};

export const apiGetUser = async (id: number = 1) => {
	const res = await axios.get(`${API_URL}/api/users?filters[id][$eq]=${id}`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data = await res.data;
	return data[0] as User_Plain;
};
export const apiGetUsers = async () => {
	const res = await axios.get(`${API_URL}/api/users`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data = await res.data;
	return data as User_Plain[];
};
