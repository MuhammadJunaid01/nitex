// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MainLayout, Services } from "./ui/index";
import AOS from "aos";
import "aos/dist/aos.css";
import NotFound from "./pages/NotFound";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <MainLayout>
        <Services />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

function App() {
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
