import { useState } from "react";
import "./style.css";
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    return null;
  });

  return (
    <div className="bodySearch">
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {filteredData.length > 0 ? (
            filteredData.map((val) => (
              <div className="template" key={val.id}>
                <img src={val.image} alt="" />
                <h3>{val.title}</h3>
                <p className="price">${val.price}</p>
              </div>
            ))
          ) : (
            <div className="notFoundMessage">
              <p>Sorry, we could not find any items matching {searchTerm}. Please try another search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
