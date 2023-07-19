import styles from "../styles/Main.module.css";
import AwardsSection from "./AwardsSection";
import Modal from "./Modal";
import SubmitButton from "./Submit-Button";

const Main = () => {
	return (
		<section className={styles.main}>
			<h1 className={styles.header}>Awards 2021</h1>
			<AwardsSection />
			<SubmitButton />
			<Modal />
		</section>
	);
};

export default Main;
