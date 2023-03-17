// import React, { useEffect, useState } from "react";
// import list from "./dropdown/RecipeData/recdata";
// import { Link } from "react-router-dom";
// console.log(list);
// const allData = [...list.map((item) => ({ type: "recipe", ...item }))];
// console.log("alldata", allData);

// function Search(props) {
//   const [searchResults, setSearchResults] = useState([]);

//   const searchQuery = props.query || "";
//   console.log("anju", searchQuery);
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setSearchResults([]);
//       return;
//     }

//     setSearchResults(search(searchQuery));
//   }, [searchQuery]);

//   function search(query) {
//     console.log("878787878", props.query);
//     const results = [];
//     for (const item of allData) {
//       console.log("my item title is", item.title);
//       if (
//         item.title &&
//         item.title.toLowerCase().includes(query.toLowerCase())
//       ) {
//         results.push(item);
//       }
//       console.log(searchQuery, "000000", item.title);
//     }
//     console.log("Search results:", results);
//     return results;
//   }

 
//   if (searchQuery.trim() === "") {
//     return null;
//   }
//   console.log("here is my search result is:", searchResults);
//   return (
//     <div>
//       {searchResults.length > 0 ? (
//         <ul>
//           {searchResults.map((item) => (
//             <li key={item.id}>
//               <Link to={`/recipe/${item.id}`}>
//                 {item.title} ({item.img})
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// }

// export default Search;
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Search = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [redirectToRecipe, setRedirectToRecipe] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Search logic
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    setRedirectToRecipe(true);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (redirectToRecipe) {
    return (
      <Navigate
      to={{
        pathname: `/recipe/${searchResults[0].id}`,
        state: { searchResults },
      }}
    />
    );
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

