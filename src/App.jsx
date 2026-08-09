
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      {/* Toast Notification */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Project Details */}
        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

export default App;

