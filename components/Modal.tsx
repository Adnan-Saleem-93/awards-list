import React from "react";
import styles from "../styles/Modal.module.css";
import { setShowModal, useGlobalContext } from "../context";
import ModalComponent from "react-overlays/Modal";

const renderBackdrop = (props: any) => (
	<div className={styles.backdrop} {...props} />
);

const Modal = () => {
	const {
		state: { showModal },
		dispatch,
	} = useGlobalContext();
	const handleClose = () => {
		setShowModal(dispatch, false);
	};
	return (
		<ModalComponent
			className={styles.modal}
			show={showModal}
			onHide={handleClose}
			renderBackdrop={renderBackdrop}
		>
			<div>
				<div className={styles.modalHeader}>
					<div>
						<span className={styles.close} onClick={handleClose}>
							x
						</span>
					</div>
				</div>
				<div className={styles.modalContent}>
					<p className={styles.text}>Success</p>
				</div>
			</div>
		</ModalComponent>
	);
};

export default Modal;
