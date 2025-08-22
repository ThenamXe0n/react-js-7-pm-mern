import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
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
