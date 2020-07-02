import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/ui/characters/CharacterGrid";
import axios from "axios";
import Search from "../src/components/ui/Search";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetcItems = async () => {
      const result = await axios(
        ` https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetcItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
