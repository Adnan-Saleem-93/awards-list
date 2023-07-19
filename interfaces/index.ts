export interface INominee {
	category_id:string;
	id: string;
	title: string;
	photoUrL: string;
}

export interface ICategory {
	id: string;
	items: Array<INominee>;
	title: string;
}

export interface IContext {
	selectedNominee: INominee | null;
}

export interface ISelectedNominee{
	category_id: string;
	selectedNominee:INominee;
}