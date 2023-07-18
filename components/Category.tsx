import { INominee } from "../interfaces";
import styles from "../styles/AwardsSection.module.css";
import Nominee from "./Nominee";

type Props = {
	title: string;
	items: Array<INominee>;
};

function Category({ title, items }: Props) {
	return (
		<div className={styles.category}>
			<h1 className={styles.categoryTitle}>{title}</h1>
			<div className={styles.nominees}>
				{items.map((item: INominee, index: number): JSX.Element => {
					return <Nominee key={index} {...item} />;
				})}
			</div>
		</div>
	);
}

export default Category;
