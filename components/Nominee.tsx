import Image from "next/image";
import { INominee } from "../interfaces";
import styles from "../styles/AwardsSection.module.css";
import { setSelectedNominee, useGlobalContext } from "../context";
import { useMemo } from "react";

function Nominee(props: INominee) {
	const { id, title, photoUrL } = props;
	const {
		state: { selectedNominees },
		dispatch,
	} = useGlobalContext();

	const handleSelectNominee = () => {
		setSelectedNominee(dispatch, {
			category_id: props.category_id,
			selectedNominee: { ...props },
		});
	};
	const isSelectedNominee = useMemo(() => {
		return selectedNominees?.find((x) => x.selectedNominee.id === id)
			? true
			: false;
	}, [selectedNominees, id]);

	const selectButtonClass = useMemo(() => {
		return isSelectedNominee ? styles.selected : styles.non_selected;
	}, [isSelectedNominee]);

	return (
		<div
			className={styles.singleNominee}
			style={{
				backgroundColor: isSelectedNominee ? "#017969" : "#009b86",
			}}
		>
			<h1 className={styles.nomineeTitle}>{title}</h1>
			<Image
				loader={() => photoUrL}
				src={photoUrL}
				alt={title}
				width={120}
				height={120}
				className={styles.nomineeImage}
			/>
			<div
				className={`${styles.selectButton} ${selectButtonClass}`}
				onClick={handleSelectNominee}
			>
				{isSelectedNominee ? "Selected" : "Select Nominee"}
			</div>
		</div>
	);
}

export default Nominee;
