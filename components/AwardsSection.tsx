import { useEffect, useState } from "react";
import styles from "../styles/AwardsSection.module.css";
import Category from "./Category";
import { ICategory } from "../interfaces";

const AwardsSection = () => {
	const [awards, setAwards] = useState<ICategory[] | []>([]);
	const getAwards = async () => {
		try {
			const response = await fetch(`http://localhost:3000/api/ballots`);
			const result: { items: ICategory[] | [] } = await response.json();
			const data: ICategory[] | [] = result?.items;

			setAwards(data);
		} catch (error: any) {
			alert(error.message);
		}
	};
	useEffect(() => {
		getAwards();
	}, []);

	return (
		<section>
			{awards?.map((category: ICategory, index: number): JSX.Element => {
				return <Category key={index} {...category} />;
			})}
		</section>
	);
};

export default AwardsSection;
