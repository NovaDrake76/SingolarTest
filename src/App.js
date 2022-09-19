import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

import Home from "./pages/home/home";
import CreatePost from "./pages/createPost";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="createPost" element={<CreatePost />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
