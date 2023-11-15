"use client";
import SearchBox from "@/components/SearchBox";
import SearchResult from "@/components/SearchResult";
import { useState } from "react";

export default function Search() {
  const [results, setResults] = useState([]);
  return (
    <>
      <SearchBox setResults={setResults} />
      <SearchResult results={results} />
    </>
  );
}
