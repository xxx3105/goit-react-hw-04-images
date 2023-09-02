import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    width: 'auto',
    height: 'auto',
    maxWidth: '80%',
    maxHeight: '80vh',
    margin: '0 auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    //overflow: 'hidden',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s ease-in-out',
  },
};

export const ModalStyled = ({
  isOpen,
  onRequestClose,
  contentLabel,
  onKeyDown,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
      onKeyDown={onKeyDown}
    >
      <img src={src} alt={alt} width="100%" height="100%" />
    </Modal>
  );
};
