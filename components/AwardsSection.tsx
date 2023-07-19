import { useEffect, useState } from "react";
import styles from "../styles/AwardsSection.module.css";
import Category from "./Category";
import { ICategory } from "../interfaces";

const AwardsSection = () => {
	const [awards, setAwards] = useState<ICategory[] | []>([]);
	const getAwards = async () => {
		try {
			let BASE_URL =
				process.env.NODE_ENV === "development"
					? "http://localhost:3000/api"
					: "https://awards-list.netlify.app/api";
			const response = await fetch(`${BASE_URL}/ballots`);
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
		<section style={{ width: "100%" }}>
			{awards?.map((category: ICategory, index: number): JSX.Element => {
				return <Category key={index} {...category} />;
			})}
		</section>
	);
};

export default AwardsSection;
