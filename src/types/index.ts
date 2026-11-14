export interface IMetaHead {
	title: string;
	description: string;
	ogImageUrl?: string;
}

export interface IHeroProps {
	name: string;
}

export interface IExperience {
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	skills?: string[];
}
export interface IExperiences {
	/** Section anchor id; the heading gets `${id}-title` */
	id: string;
	title: string;
	details: IExperience[];
	/** Show only the first N entries in full; the rest collapse into one-line summaries */
	detailedCount?: number;
}

export type TechCategory =
	| "Languages"
	| "Frameworks"
	| "Databases & Caching"
	| "Artificial Intelligence"
	| "Cloud & Infrastructure"
	| "Monitoring & CI/CD";

export interface ITechnology {
	name: string;
	category: TechCategory;
}

export interface ITechnologies {
	title: string;
	technologies: ITechnology[];
}
