import React, { useMemo } from "react";
import styles from "../styles/Main.module.css";
import { setShowModal, useGlobalContext } from "../context";

const SubmitButton = () => {
	const {
		state: { selectedNominees },
		dispatch,
	} = useGlobalContext();

	const isSelected = useMemo(() => {
		return selectedNominees.length ? true : false;
	}, [selectedNominees]);

	const handleOpen = () => {
		setShowModal(dispatch, true);
	};

	return (
		<button
			className={styles.stickyButton}
			onClick={handleOpen}
			style={{ right: isSelected ? "1rem" : "-30rem" }}
		>
			Submit Ballot
		</button>
	);
};

export default SubmitButton;
