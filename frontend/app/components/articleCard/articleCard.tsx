import Link from 'next/link';
import { Article } from '../../types/article';
import Image from 'next/image';
import { API_URL } from '../../utils/api';
import './articleCard.sass';
interface IArticleCard {
	article: Article;
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
