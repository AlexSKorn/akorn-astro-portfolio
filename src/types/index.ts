export interface IMetaHead {
	title: string;
	description: string;
	ogImageUrl: string;
}

export interface IHeroProps {
	name: string;
	about: string;
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
	title: string;
	details: IExperience[];
}

export interface ITechnicalSkills {
	title: string;
	skills: ITechSkill[];
}

export interface ITechSkill {
	title: string;
	skills: string;
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
	icon: string;
	category: TechCategory;
}

export interface ITechnologies {
	title: string;
	technologies: ITechnology[];
}

export interface IProject {
	title: string;
	isFeatured: boolean;
	thumbnail: string;
	githubUrl: string;
	liveUrl: string;
	description?: string;
	technologies?: string[];
	achievements?: string[];
}
export interface IProjects {
	projects: IProject[];
}

export interface IProjectDetails {
	projectDetail: IProject;
}
