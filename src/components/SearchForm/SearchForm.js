import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={searchName}
        type="text"
        autoComplete="off"
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
