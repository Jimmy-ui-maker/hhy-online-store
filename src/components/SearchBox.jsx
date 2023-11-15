"use client"
import { useState } from "react";

export default function SearchBox({setResults}) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3000/api/allProducts", {
      cache: "no-store",
    }).then((response) =>
      response.json().then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.title.toLowerCase().includes(value) 
          );
        });
        setResults(results);
      })
    );
  };
  
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="c-search col-lg-3 col-8 mt-2  p-1 rounded-3">
            <div className="input-group ">
              <input
                type="search"
                className="form-control shadow-none"
                placeholder="Search your product here..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <span className="input-group-text bi bi-search"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
