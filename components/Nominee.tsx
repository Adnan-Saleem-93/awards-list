import Image from "next/image";
import { INominee } from "../interfaces";
import styles from "../styles/AwardsSection.module.css";

function Nominee({ id, title, photoUrL }: INominee) {
	return (
		<div className={styles.singleNominee}>
			<h1 className={styles.nomineeTitle}>{title}</h1>
			<Image
				loader={() => photoUrL}
				src={photoUrL}
				alt={title}
				width={120}
				height={120}
				className={styles.nomineeImage}
			/>
			<div className={styles.selectButton}>Select Nominee</div>
		</div>
	);
}

export default Nominee;
