import { useState } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledSearch,
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleChange = e => {
    setSearchRequest(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchRequest);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSearch>
        <StyledInput
          type="text"
          value={searchRequest}
          onChange={handleChange}
          placeholder="Enter request and recieve images."
        />

        <StyledButton type="submit">Search</StyledButton>
      </StyledSearch>
    </StyledForm>
  );
};
