// types/article.ts
interface Image {
	url: string;
	alternativeText: string | null;
	width: number;
	height: number;
}

export interface Article {
	id: number;
	title: string;
	content: [
		{
			type: 'paragraph';
			children: [
				{
					type: 'text';
					text: string;
				},
			];
		},
	];
	slug: string;
	image: Image;
	createdAt: string;
	updatedAt: string;
}

export interface ArticleResponse {
	data: Article[];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}
