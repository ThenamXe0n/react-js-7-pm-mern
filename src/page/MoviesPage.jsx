import axios from "axios";
import TrendingCard from "../components/TrendingCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiPlusCircle } from "react-icons/pi";
import toast from "react-hot-toast";
import { storeContext } from "../contextApi/myStateContext";

const MoviesPage = () => {
  const {movieList,setMovieList} = useContext(storeContext)

  
  

  
  console.log("movie list", movieList);

  return (
    <section>
      <h1 className="text-4xl font-bold text-center p-4 bg-black text-white">
        Movies List
      </h1>
      <Link  to={"/add-movies"}>
        <button className="bg-green-700 text-white rounded-md p-4 flex items-center justify-center"> <PiPlusCircle/> Add New Movie</button>
      </Link>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-screen">
        {Array.isArray(movieList) &&
          movieList?.map((movie, movieIdx) => (
            <Link to={`/movie-display/${movie.id}`} key={movieIdx}>
              <TrendingCard srNo={movieIdx + 1} imgUrl={movie.posterUrl} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default MoviesPage;
