import React, { useEffect, useState } from "react";
import ManageMovieCard from "../../components/ManageMovieCard";
import toast from "react-hot-toast";
import axios from "axios";
import { BiTrash } from "react-icons/bi";

const ManageMoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [formOpenStatus, setFormOpenStatus] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({
    name: "3idiots",
    videoUrl: "htto://kjhsjhfj.com",
  });
  const [movieDetails, setMovieDetails] = useState({});
  console.log("movie details", movieDetails);

  async function getMoviesApi() {
    try {
      let response = await axios.get("http://localhost:8080/movies");
      setMovieList(response.data);
      toast.success("data loaded successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleChangeValues(e) {
    setMovieDetails((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    console.log(movieDetails);
  }

  async function handleUpdateMovie(e) {
    e.preventDefault();
    console.log(movieDetails);
    try {
      const response = await axios.patch(
        `http://localhost:8080/movies/${selectedMovie.id}`,
        movieDetails
      );
      toast.success(`movie updated ${response.data.name}`);
      setFormOpenStatus(false);
      setSelectedMovie({});
      setMovieDetails({});

      //update movie state
      setMovieList((prev) => {
        let idx = prev.findIndex((movie) => movie.id === selectedMovie.id);
        let updateMovieList = [...prev];
        updateMovieList.splice(idx, 1, response.data);
        return updateMovieList;
      });
    } catch (error) {
      toast.error("something went wrond . failed to update");
      console.log(error.message);
    }
  }

  useEffect(() => {
    getMoviesApi();
    //clearup function
    return () => {
      getMoviesApi();
    };
  }, []);

  return (
    <section className="w-screen min-h-screen bg-blue-300">
      <h1 className="text-4xl font-bold text-center  capitalize">
        Manage all movies
      </h1>
      <div className="w-full mt-lg-4 h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {movieList.map((movie, idx) => (
          <ManageMovieCard
            setSelected={() => setSelectedMovie(movie)}
            setFormOpenStatus={setFormOpenStatus}
            setMovieList={setMovieList}
            key={idx}
            id={movie.id}
            title={movie.name}
            poster={movie.posterUrl}
          />
        ))}
      </div>
      {formOpenStatus && (
        <div className="h-screen w-screen flex items-center justify-center fixed top-0 left-0 bg-black/60 backdrop-blur-md">
          <form
            onSubmit={handleUpdateMovie}
            className="bg-gray-600 w-1/2 h-fit p-6 rounded-md min-h-64 min-w-96"
          >
            <div
              onClick={() => {
                setFormOpenStatus(false);
                setSelectedMovie({});
              }}
              className="bg-red-600 text-white rounded-md p-2 w-fit float-end"
            >
              <BiTrash />
            </div>
            <h5 className="text-center font-bold text-white">Add Movies</h5>

            <div className="flex flex-col my-2">
              <label htmlFor="name" className="text-lg capitalize text-white">
                movie name
              </label>
              <input
                onChange={handleChangeValues}
                name="name"
                id="name"
                defaultValue={selectedMovie.name}
                type="text"
                placeholder="enter movie name"
                className="bg-white p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="videoUrl"
                className="text-lg capitalize text-white"
              >
                movie url
              </label>
              <input
                onChange={handleChangeValues}
                name="videoUrl"
                id="videoUrl"
                defaultValue={selectedMovie.videoUrl}
                type="text"
                placeholder="enter movie iframe url"
                className="bg-white p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="posterUrl"
                className="text-lg capitalize text-white"
              >
                movie poster url
              </label>
              <input
                onChange={handleChangeValues}
                name="posterUrl"
                id="posterUrl"
                defaultValue={selectedMovie.posterUrl}
                type="text"
                placeholder="enter movie poster url (http)"
                className="bg-white p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col my-2">
              <label
                htmlFor="posterUrl"
                className="text-lg capitalize text-white"
              >
                description
              </label>
              <input
                defaultValue={selectedMovie.description}
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
        </div>
      )}
    </section>
  );
};

export default ManageMoviesPage;
