import styles from "../styles/Main.module.css";
import AwardsSection from "./AwardsSection";

const Main = () => {
	return (
		<section className={styles.main}>
			<h1 className={styles.header}>Awards 2021</h1>
			<AwardsSection />
		</section>
	);
};

export default Main;
