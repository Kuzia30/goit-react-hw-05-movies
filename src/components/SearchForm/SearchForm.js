import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "./SearchForm.styled";

const SearchForm = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState("");

  const handleChange = (evt) => {
    setSearchName(evt.target.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchName.trim() === "") {
      return;
    }
    onSubmit(searchName);
    setSearchName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={searchName}
        type="text"
        autoComplete="off"
        autoFocus
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
