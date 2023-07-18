export interface INominee {
	id: string;
	title: string;
	photoUrL: string;
}

export interface ICategory {
	id: string;
	items: Array<INominee>;
	title: string;
}