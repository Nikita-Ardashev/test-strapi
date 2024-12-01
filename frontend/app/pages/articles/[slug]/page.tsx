import { API_URL, apiGetArticle } from '@/app/utils/api';
import Image from 'next/image';

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const article = await apiGetArticle((await params).slug);
	return (
		<div>
			<h1>{article.title}</h1>
			<Image
				src={`${API_URL}${article.image.url}`}
				alt={article.image.alternativeText ?? ''}
				width={200}
				height={200}
			/>
			<div>{article.content[0].children[0].text}</div>
		</div>
	);
}
