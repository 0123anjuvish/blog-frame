import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import list from "./dropdown/RecipeData/recdata";
import hList from "./dropdown/HealthData/hltdata";
import etnList from "./dropdown/EtnData/etndata";
import eduList from "./dropdown/EduData/edudata";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (event === "health") {
      setData(hList);
      setPage("/health");
    }
    if (event === "recipe") {
      setData(list);
      setPage("/recipe");
    }
    if (event === "etn") {
      setData(etnList);
      setPage("/etn");
    }
    if (event === "edu") {
      setData(eduList);
      setPage("/edu");
    }
    console.log(data, page, event);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value;
    console.log(searchTerm);
    let obj = null;
    if (page) {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        let obj = data[i].filter(
          (e) => e.title.toLowerCase() === searchTerm.toLowerCase()
        );

        console.log(data[i], obj[0]);

        if (obj.length > 0) {
          navigate(`${page}/${obj[0].id}`);
        }
      }
    }
  };

  return (
    <form className="d-flex" onSubmit={handleSearch}>
      <select className="selct" onChange={(e) => handleClick(e.target.value)}>
        <option value="">Open this select menu</option>
        <option value="health">Health</option>
        <option value="recipe">Recipe</option>
        <option value="etn">Entertainment</option>
        <option value="edu">Education</option>
      </select>

      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by blog catagories....."
        aria-label="Search"
        name="search"
      />
      <button className="btn1r">
        <BsSearch />
      </button>
    </form>
  );
};
export default Search;
