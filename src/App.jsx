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
      </Routes>
    </>
  );
}

export default App;
