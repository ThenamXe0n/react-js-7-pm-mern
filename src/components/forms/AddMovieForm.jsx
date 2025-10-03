import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddMovieForm = () => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    videoUrl: "",
    casts: [],
    posterUrl: "",
  });

  function handleChangeValues(e) {
    console.log(e.target.id);
    setMovieDetails((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    console.log(movieDetails);
  }

  async function handleAddMovie(e) {
    e.preventDefault();
    let movieAdded = await axios.post(
      "http://localhost:8080/movies",
      movieDetails
    );
    console.log("movie added : ", movieAdded.data);
    toast.success("movie added successfully");
    navigate("/movies");
  }
  console.log("movieDetails ", movieDetails);
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={handleAddMovie}
        className="bg-gray-600 p-6 rounded-md min-h-64 min-w-96"
      >
        <h5 className="text-center font-bold text-white">Add Movies</h5>

        <div className="flex flex-col my-2">
          <label htmlFor="name" className="text-lg capitalize text-white">
            movie name
          </label>
          <input
            onChange={handleChangeValues}
            name="name"
            id="name"
            type="text"
            placeholder="enter movie name"
            className="bg-white p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="videoUrl" className="text-lg capitalize text-white">
            movie url
          </label>
          <input
            onChange={handleChangeValues}
            name="videoUrl"
            id="videoUrl"
            type="text"
            placeholder="enter movie iframe url"
            className="bg-white p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="posterUrl" className="text-lg capitalize text-white">
            movie poster url
          </label>
          <input
            onChange={handleChangeValues}
            name="posterUrl"
            id="posterUrl"
            type="text"
            placeholder="enter movie poster url (http)"
            className="bg-white p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="posterUrl" className="text-lg capitalize text-white">
            description
          </label>
          <input
            onChange={handleChangeValues}
            name="posterUrl"
            id="posterUrl"
            type="text"
            placeholder="enter movie poster url (http)"
            className="bg-white p-2 rounded-md"
          />
        </div>

        <button className="bg-black text-white rounded-md w-full my-3 capitalize p-2">
          Add movie
        </button>
      </form>
    </section>
  );
};

export default AddMovieForm;
