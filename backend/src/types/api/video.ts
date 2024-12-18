// Interface automatically generated by schemas-to-ts

import { VideoTimestamp } from './video-timestamp';
import { CourseContent } from './course-content';
import { VideoTimestamp_Plain } from './video-timestamp';
import { CourseContent_Plain } from './course-content';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export interface Video {
	id: number;
	attributes: {
		createdAt: Date;
		updatedAt: Date;
		publishedAt?: Date;
		title?: string;
		src?: string;
		video_timestamps: { data: VideoTimestamp[] };
		course_content?: { data: CourseContent };
	};
}
export interface Video_Plain {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	publishedAt?: Date;
	title?: string;
	src?: string;
	video_timestamps: VideoTimestamp_Plain[];
	course_content?: CourseContent_Plain;
}

export interface Video_NoRelations {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	publishedAt?: Date;
	title?: string;
	src?: string;
	video_timestamps: number[];
	course_content?: number;
}

export interface Video_AdminPanelLifeCycle {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	publishedAt?: Date;
	title?: string;
	src?: string;
	video_timestamps: AdminPanelRelationPropertyModification<VideoTimestamp_Plain>;
	course_content?: AdminPanelRelationPropertyModification<CourseContent_Plain>;
}
