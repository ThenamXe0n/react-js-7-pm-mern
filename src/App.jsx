import { useEffect } from "react";
import NavBar from "./components/NavBar";
import ContactPage from "./page/ContactPage";
import HomePage from "./page/HomePage";
// import poster from "./assets/image.png"
import AOS from "aos";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";

function App({ a, b }) {
  useEffect(() => {
    AOS.;
  });
  return (
    <>
      <section className="h-screen bg-amber-300 w-screen"></section>
      <section>
        <h1
          data-aos="flip-right"
          className=" bg-blue-600 font-black text-center text-5xl"
        >
          hellow tailwindcss
        </h1>
        <CiMenuKebab size={45} color="red" />
        <CiMenuFries />
      </section>
      <section className="h-screen bg-green-300 w-screen"></section>
    </>
  );
}

export default App;
