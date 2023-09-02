import React, { useState } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import { ModalStyled } from '../ModalStyled/ModalStyled';

export const ImageGalleryItem = ({
  imageKey,
  webformatURL,
  largeImageURL,
  tags,
}) => {
  const [isModalOpen, setIstModalOpen] = useState(false);

  const openModal = () => {
    setIstModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIstModalOpen(false);
    document.body.style.overflow = '';
  };

  const closerOfModal = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <li>
      <GalleryItem
        key={imageKey}
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />
      <ModalStyled
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={tags}
        onKeyDown={closerOfModal}
        src={largeImageURL}
        alt={tags}
      />
    </li>
  );
};
