import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  Title,
  Posts,
  Post,
  PostTitle,
  PostText,
  PostAuthor,
} from "./styles";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <Helmet>
        <title>Home | SingolarTest</title>
      </Helmet>

      <Container>
        <Title>Posts</Title>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Posts>
            {posts.map((post) => (
              <Post key={post.id}>
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
  );
};

export default Home;
