import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Home from "./pages/home/home"
import CreatePost from "./pages/createPost/createPost"
import Profile from "./pages/profile"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="createPost" element={<CreatePost />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
    </div>
  )
}

export default App
