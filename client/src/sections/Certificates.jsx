import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Certs as certs } from '../components/Data';
import ModalBox from '../components/ModalBox';
import '../scss/certificates.scss';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const openModal = cert => setSelectedCert(cert);
    const closeModal = () => setSelectedCert(null);

    return (
        <>
            <section className="certificates container section" id="certificates">
                <h2 className="section-title" data-aos="fade-right">My Certificates</h2>
                <div className='certificate grid'>
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="certificate-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            onClick={() => openModal(cert)}
                        >
                            <div className="certificate-title">
                                <div>
                                    <h3 className="certificate-name">{cert.title}</h3>
                                    <p className='certificate-issuer'>{cert.issuer}</p>
                                </div>
                                <span className="certificate-icon">{cert.icon}</span>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>
            <AnimatePresence>
                {selectedCert && (
                    <ModalBox project={selectedCert} onClose={closeModal} btnLabel="View Certificate Issue" />
                )};
            </AnimatePresence>
        </>
    )
}

export default Certificates