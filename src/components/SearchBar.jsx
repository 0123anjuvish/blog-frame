
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

const Search = () => {

  function Products({ products }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearchInputChange} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Categories({ categories }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search categories..." value={searchQuery} onChange={handleSearchInputChange} />
      <ul>
        {filteredCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
};

export default Search;