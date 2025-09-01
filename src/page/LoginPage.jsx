import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); //hook
  function handleLoggin() {
    localStorage.setItem("isLogged", true);
    navigate("/");
  }

  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="h-1/2 w-fit p-10 border rounded-md">
        <h1 className="text-center text-3xl font-bold uppercase">Login Page</h1>
        <form className="mt-4">
          <div className="flex flex-col">
            <label className="text-lg">Email</label>
            <input
              className="border-2 border-gray-500 p-1 rounded-[4px]"
              type="email"
              placeholder="enter your email"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg">Password</label>
            <input
              className="border-2 placeholder:text-cyan-500 border-gray-500 p-1 rounded-[4px]"
              type="password"
              placeholder="enter your password"
            />
          </div>
          <button
            className="border px-8 py-1 mt-4 rounded-md bg-blue-800 text-white"
            onClick={handleLoggin}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
