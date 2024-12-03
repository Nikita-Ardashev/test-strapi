import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '../utils/api';
import '@/styles/articleCard.sass';
import { Article_Plain } from '@/app/types/api/article';
interface IArticleCard {
	article: Article_Plain;
}

const ArticleCard = ({ article }: IArticleCard) => {
	return (
		<Link className="article-card" href={`pages/articles/${article.slug}`}>
			<Image
				src={`${API_URL}${article.image.url}`}
				alt={article.image.alternativeText ?? ''}
				width={200}
				height={200}
			/>
			<h2>{article.title}</h2>
		</Link>
	);
};

export default ArticleCard;
