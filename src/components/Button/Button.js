import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  const handleClick = e => {
    e.preventDefault(); // Предотвращаем стандартное поведение браузера
    handleLoadMore();
  };

  return <StyledButton onClick={handleClick}>Load More</StyledButton>;
};

export default Button;
