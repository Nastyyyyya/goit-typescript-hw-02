import style from "./ImageModal.module.css";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    className={style.modal}
    overlayClassName={style.overlay}
  >
    {image && (
      <div className={style.content}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={style.image}
        />
        <p>Author: {image.user?.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    )}
  </Modal>
);

export default ImageModal;
