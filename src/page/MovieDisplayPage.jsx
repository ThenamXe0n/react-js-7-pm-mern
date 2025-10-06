import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CgBackspace } from "react-icons/cg";
import { useNavigate, useParams } from "react-router-dom";
import { storeContext } from "../contextApi/myStateContext";

const MovieDisplayPage = () => {
  const { movieList } = useContext(storeContext);
  console.log(movieList);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedMovie = movieList.find((movie) => {
    return movie.id === id;
  });

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <section className="h-screen w-screen ">
      <div
        onClick={handleGoBack}
        className="bg-blue-600 size-16 flex items-center justify-center text-white z-[888] fixed top-6 left-6 "
      >
        <CgBackspace size={24} />
      </div>
      <div className="bg-black text-white p-24">
        <iframe
          src={selectedMovie?.videoUrl}
          className="w-full h-[80vh] mb-8 border border-white"
        ></iframe>
        <h1 className="text-4xl capitalize font-semibold">
          {selectedMovie?.name}
        </h1>
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
