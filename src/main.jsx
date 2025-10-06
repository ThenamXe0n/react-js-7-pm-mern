import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./page/HomePage.jsx";
import ServiesPage from "./page/ServiesPage.jsx";
import { Link, RouterProvider, BrowserRouter } from "react-router-dom";
import ContactPage from "./page/ContactPage.jsx";
import Layout from "./components/Layout.jsx";
import { Toaster } from "react-hot-toast";
import { MyStoreProvider } from "./contextApi/myStateContext.jsx";

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <HomePage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/services",
//     element: (
//       <Layout>
//         <ServiesPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <Layout>
//         <ContactPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <section className="h-screen bg-black flex flex-col items-center justify-center text-white">
//         <h4 className="text-green-700 text-4xl font-bold mb-20">
//           404 Page Not Found
//         </h4>
//         <Link to="/">
//           <button className="bg-white text-black p-2 rounded-md">
//             Go to home
//           </button>
//         </Link>
//       </section>
//     ),
//   },
// ]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <MyStoreProvider>
      <App />
      <Toaster
        toastOptions={{
          style: { background: "black", color: "white" },
        }}
        removeDelay={500}
        position="bottom-center"
      />
    </MyStoreProvider>
  </BrowserRouter>
  // </StrictMode>
);
