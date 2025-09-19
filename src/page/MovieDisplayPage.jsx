import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDisplayPage = () => {
  const params = useParams()
  const [selectedMovie, setSelectedMovie] = useState({});
  let id = "22bb";
  async function getMoviesApi() {
    try {
      let response = await axios.get(`http://localhost:8080/movies/${params.id}`);
      console.log(response.data);
      setSelectedMovie(response.data);
    } catch (error) {
      console.alert(error.message);
    }
  }

  useEffect(() => {
    getMoviesApi();
  }, []);

  console.log("use para value===>",params.id)

  return (
    <section className="h-screen w-screen ">
      <div className="bg-black text-white p-24">
        <iframe
          src={selectedMovie.videoUrl}
          className="w-full h-[80vh] mb-8 border border-white"
        ></iframe>
        <h1 className="text-4xl capitalize font-semibold">{selectedMovie.name}</h1>
        <p className="my-8">
          <strong>Casts : Manoj bajpayee,sdfds</strong> |{" "}
          <span className="text-yellow-600">
            <strong>Genre : </strong>Comedy,crime
          </span>{" "}
        </p>
        <p>
          An ingenious murderer, Carl Bhojraj, breaks out of prison, so
          determined Detective Zende chases the escapee once more through
          Mumbai.
        </p>
      </div>
    </section>
  );
};

export default MovieDisplayPage;
