import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  let isLoggedIn = localStorage.getItem("isLogged");

  if (!isLoggedIn) {
    return (
      <>
        <Navigate to={"/login"} />
      </>
    );
  }

  return (
    <>
      <section className="h-[80vh] bg-gray-500 flex">
        <div className="w-1/2">
          <h1>Hello</h1>
          <p>lorthjhjk hkjhkjh khkjhkjh sdf</p>
        </div>
        <div className="w-1/2">
          <img src="./assets/image.png" alt="photo" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
