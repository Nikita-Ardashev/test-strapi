export interface IUser {
	id: number;
	documentId: string;
	username: string;
	email: string;
	provider: 'local';
	confirmed: boolean;
	blocked: boolean;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
}
