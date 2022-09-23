import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteModal from "../../components/deleteModal/modal";
import { Link } from "react-router-dom";

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
  PageContent,
} from "./styles";

const Home = ({ setPostInfo }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalAux, setModalAux] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const openModal = (post) => {
    setModal(true);
    setPost(post);
    setModalAux(!modalAux);
  };

  const editPost = (post) => {
    setPostInfo(post);
  };

  return (
    <>
      <Helmet>
        <title>Home | SingolarTest</title>
      </Helmet>

      <Container>
        {modal ? <DeleteModal post={post} modalAux={modalAux} /> : null}

        <PageContent>
          <Title>Posts</Title>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Posts>
              {posts.map((post) => (
                <Post key={post.id}>
                  <PostHeader>
                    <Link to={`editPost`}>
                      <IconContainer onClick={() => editPost(post)}>
                        <FiEdit />
                      </IconContainer>
                    </Link>
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
        </PageContent>
      </Container>
    </>
  );
};

export default Home;
