import React, { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Home from "./pages/home/home"
import ChangePost from "./pages/changePost/changePost"
import Profile from "./pages/profile"
import Post from "./pages/post/post"

function App() {
  const [postInfo, setPostInfo] = useState()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setPostInfo={setPostInfo} />} />

        <Route path="createPost" element={<ChangePost toEdit={false} />} />
        <Route
          path="editPost"
          element={<ChangePost toEdit={true} postInfo={postInfo} />}
        />
        <Route path="profile" element={<Profile />} />
        <Route
          path="post"
          element={<Post postInfo={postInfo} setPostInfo={setPostInfo} />}
        />
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
      />
    </div>
  )
}

export default App
