import axios from 'axios';
import { Payload } from '../types/common/Payload';
import { Article_Plain } from '../types/api/article';
import { prisma } from '../lib/prisma';
import qs from 'qs';
import { User_Plain } from '../types/common/User';
export const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
export const API_TOKEN =
	'b0f3282b165b15f5113d8a4d1d1950cb416530c0f2ae3f8cd24a740885fcbed6fa768c665b31073d55d24001ab230ad7fa484ca406329d42278ea00c3b9220f6645d818c9c5779c76732039c04ead5c8f041667bdc992e93dd21687da3b65acaa957c6cdce7bca02c805393b6444c4104202eeae94fe1b4f4d7138564e78283e';
// '61a44568c1310936e3a0a9e9adfe3e2df78e660e20e3f136e527e554f1308505d4955aaa15bb713e594e79f1edf0c548686ad19e9bbc49132c5aa6472a535bf7e3059a006d5a047693cff513323af27af9b3ef7ce5ca8f368b68baa4277c1abf0941ac3ce2a2894ffba0d7b44e730e31c32f1b68231267c595bfd6999845795f';
export const apiGetAny = async (nameTable: string) => {
	const res = await axios.get(`${API_URL}/api/${nameTable}`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data = await res.data;
	return data;
};

export const apiGetArticles = async () => {
	const res = await axios.get(`${API_URL}/api/articles?populate=*`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const data: Payload<Article_Plain[]> = await res.data;
	return data.data ?? [];
};

export const apiGetArticle = async (slug: string) => {
	const query = qs.stringify({
		filters: {
			slug: {
				$eq: slug,
			},
		},
	});
	const res = await axios.get(`${API_URL}/api/articles?${query}&populate=*`, {
		headers: { Authorization: 'bearer ' + API_TOKEN },
	});
	const article = await res.data;
	return article.data[0] as Article_Plain;
};

export const apiGetUser = async (id: number = 1) => {
	const user = await prisma.up_users.findFirst({
		where: { id },
	});
	return user;
};

export const apiGetUsers = async () => {
	const users = await prisma.up_users.findMany();
	return users;
};

export const apiGetProfile = async (jwt: string | null) => {
	if (jwt === null) return;
	const res = await axios.get(`${API_URL}/api/users/me`, {
		headers: { Authorization: 'bearer ' + jwt },
	});
	const profile = await res.data;
	return profile as User_Plain;
};

export const apiLogin = async (identifier: string, password: string) => {
	const res = await axios.post(`${API_URL}/api/auth/local`, { identifier, password });
	const { jwt } = await res.data;
	return jwt as string;
};

export const apiCourse = async (name: string) => {
	const res = axios.get(
		`${API_URL}/api/courses?filters[section][$eq]=${name}&populate[0]=course_contents&populate[1]=course_contents.videos&populate[2]=course_contents.videos.video_timestamps&populate[3]=course_contents.materials`,
		{ headers: { Authorization: 'bearer ' + API_TOKEN } },
	);
	const course = (await res).data;
	return course;
};
