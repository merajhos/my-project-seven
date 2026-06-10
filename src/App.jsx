import {  Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Home from "./pages/home/Home";
import FriendDetails from "./pages/friendDetails/FriendDetails";
import Timeline from "./pages/timeLine/Timeline";
import { Stats } from "./pages/stats/Stats";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      
      <Toaster position="top-right" />
      
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home></Home>} />
        <Route path="/timeline" element={ <Timeline></Timeline>} />
        <Route path="/stats" element={<Stats></Stats>} />
        <Route path="/friend/:id" element={ <FriendDetails></FriendDetails>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;