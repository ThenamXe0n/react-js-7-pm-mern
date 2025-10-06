import { Link, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactPage from "./page/ContactPage";
import ServiesPage from "./page/ServiesPage";
import HomePage from "./page/HomePage";
import Layout from "./components/Layout";
import NotFoundPage from "./page/NotFoundPage";
import LoginPage from "./page/LoginPage";
import Counter from "./components/Counter";
import ConditionalStates from "./components/ConditionalStates";
import HooksUseEffect from "./components/hooks/HooksUseEffect";
import UseRefHook from "./components/hooks/UseRefHook";
import ConditionStyling from "./components/conditionalRendering/ConditionalStyling";
import ShopSection from "./components/apiHandeling/ShopSection";
import MoviesPage from "./page/MoviesPage";
import AddMovieForm from "./components/forms/AddMovieForm";
import MovieDisplayPage from "./page/MovieDisplayPage";
import ManageMoviesPage from "./page/admin/ManageMoviesPage";
import PropDrillingExample from "./components/PropDrillingExample";
import ImageSlider from "./components/sliders/ImageSlider";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/service" element=<ServiesPage /> />
        <Route path="*" element=<NotFoundPage /> />
      </Routes> */}
      <Routes>
        <Route
          path="/"
          element=<Layout>
            <HomePage />
          </Layout>
        />
        <Route
          path="/sevices"
          element=<Layout>
            <ServiesPage />
          </Layout>
        />
        <Route path="/login" element=<LoginPage /> />
        <Route
          path="/counter-app"
          element={
            <>
              <Counter />
              <Counter />
            </>
          }
        />
        <Route path="/condition-states" element=<ConditionalStates /> />
        <Route path="/useEffect" element={<HooksUseEffect />} />
        <Route path="/useRef-practice" element={<UseRefHook />} />
        <Route path="/conditional-styling" element={<ConditionStyling />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/add-movies" element={<AddMovieForm />} />
        <Route path="/movie-display/:id" element={<MovieDisplayPage />} />
        <Route
          path="/dashboard/manage-movies"
          element={
            <Layout>
              <ManageMoviesPage />
            </Layout>
          }
        />
        <Route path="/propdrilling-example" element={<PropDrillingExample />} />
        <Route path="/slider" element={<ImageSlider />} />
      </Routes>
    </>
  );
}

export default App;
