import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageMovieCard = ({
  setSelected,
  setFormOpenStatus,
  setMovieList,
  id,
  poster,
  desc = "sdfsdfsdfkhjhsdkjhfjksdhjfhsdkjhfjksdhfkjshdkjfhsdkjhf kjhskjdfhjkhsdkfhsdjkhfjk kjsdhfkjhsdkjhsdjfkhfkj kjhsdkjhkjsdhf kjsd fkjfh",
  title = "3 idiots",
}) => {

 

  async function handleDelete() {
    if (!confirm("Are you sure to delete this movie?")) {
      toast.error("movie deletion cancelled");
      return;
    }
    try {
      let response = await axios.delete(`http://localhost:8080/movies/${id}`);
      setMovieList((prev) => {
        return prev.filter((movie) => movie.id !== response.data.id);
      });
      toast.success(`${response.data.name} movie deleted successfully`);
    } catch (error) {
      toast.error(`${error.message},failed to delete movie`);
    }
  }

  function handlFormOpen(){
    setSelected()
    setFormOpenStatus(true)
  }

  return (
    <>
      <div className="min-h-80 h-[450px] rounded-md bg-white min-w-40">
        <div className="border-2 w-11/12 rounded-md m-2 h-2/3">
          <img className="h-full w-full object-cover" src={poster} />
        </div>
        <div className="m-2">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p title={desc} className="line-clamp-1 truncate">
            {desc}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Link
              to={`/movie-display/${id}`}
              className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
            >
              view
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            >
              delete
            </button>
            <button onClick={handlFormOpen} className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
              edit
            </button>
          </div>
        </div>
      </div>
      {/* =======================popup (modal)============== */}
  
    </>
  );
};

export default ManageMovieCard;
