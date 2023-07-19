import { INominee } from "../interfaces";
import styles from "../styles/AwardsSection.module.css";
import Nominee from "./Nominee";

type Props = {
	id: string;
	title: string;
	items: Array<INominee>;
};

function Category({ id, title, items }: Props) {
	return (
		<div className={styles.category}>
			<h1 className={styles.categoryTitle}>{title}</h1>
			<div className={styles.nominees}>
				{items.map((item: INominee, index: number): JSX.Element => {
					return <Nominee key={index} {...item} category_id={id} />;
				})}
			</div>
		</div>
	);
}

export default Category;
