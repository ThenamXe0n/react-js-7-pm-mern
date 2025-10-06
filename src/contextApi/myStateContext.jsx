import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const storeContext = createContext();

export const MyStoreProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [formOpenStatus, setFormOpenStatus] = useState(false);

  async function getMoviesApi() {
    try {
      let response = await axios.get("http://localhost:8080/movies");
      setMovieList(response.data);
      toast.success("data loaded successfully from context");
    } catch (error) {
      toast.error(error.message);
    }
  }
console.log(movieList)
  useEffect(() => {
    getMoviesApi();
  }, []);


  return (
    <storeContext.Provider
      value={{
        movieList,
        setMovieList,
        selectedMovie,
        setSelectedMovie,
        formOpenStatus,
        setFormOpenStatus,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
