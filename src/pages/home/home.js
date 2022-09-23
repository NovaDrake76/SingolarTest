import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import DeleteModal from "../../components/deleteModal/modal"

import {
  Container,
  Title,
  Posts,
  Post,
  PostTitle,
  PostText,
  PostAuthor,
  PostHeader,
  IconContainer,
} from "./styles"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [modalAux, setModalAux] = useState(false)
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .then(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const openModal = (post) => {
    setModal(true)
    setPost(post)
    setModalAux(!modalAux)
  }

  return (
    <>
      <Helmet>
        <title>Home | SingolarTest</title>
      </Helmet>

      <Container>
        {modal ? <DeleteModal post={post} modalAux={modalAux} /> : null}

        <Title>Posts</Title>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Posts>
            {posts.map((post) => (
              <Post key={post.id}>
                <PostHeader>
                  <IconContainer>
                    <FiEdit />
                  </IconContainer>
                  <IconContainer onClick={() => openModal(post)}>
                    <RiDeleteBin5Line />
                  </IconContainer>
                </PostHeader>
                <PostTitle>{post.title}</PostTitle>
                <PostText>{post.body}</PostText>
                <PostAuthor>
                  {users.map((user) =>
                    user.id === post.userId ? user.name : null
                  )}
                </PostAuthor>
              </Post>
            ))}
          </Posts>
        )}
      </Container>
    </>
  )
}

export default Home
