/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../scss/modal.scss";

const ModalBox = ({ project, onClose, btnLabel }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const handleEsc = e => {
            if (e.key === 'Escape') onClose();
        }

        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        }
    }, [onClose]);

    if (!project) return null;

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <h2>{project?.title}</h2>
                <span className="modal-skills">{project?.skills}</span>
                <p>{project?.description}</p>
                <img src={project?.image} alt={project?.title} className="modal-image" />
                <div className="modal-buttons">
                    <motion.a 
                        href={project.link} 
                        target="_blank" 
                        className="modal-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {btnLabel}
                    </motion.a>
                    <motion.button 
                        className="modal-close" 
                        onClick={onClose}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Close
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ModalBox