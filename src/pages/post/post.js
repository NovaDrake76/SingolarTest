import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Oval } from "react-loader-spinner"

import {
  Container,
  PostBody,
  PostBottom,
  SecondaryTitle,
  PostText,
  PostTitle,
  AuthorInfo,
  AuthorText,
  RelatedPostsContainer,
  RelatedPosts,
  RelatedPost,
  RelatedPostTitle,
  CommentsContainer,
  CommentsContainerContent,
  Comment,
  CommentBody,
  CommentEmail,
  CommentName,
  CommentTop,
} from "./styles"

const Post = ({ postInfo, setPostInfo }) => {
  const [authorInfo, setAuthorInfo] = useState({})
  const [relatedPosts, setRelatedPosts] = useState([])
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  const postInfoAux = (post) => {
    setPostInfo(post)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${postInfo.userId}`)
      .then((res) => res.json())
      .then((data) => setAuthorInfo(data))
      .catch((err) => console.log(err))

    fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${postInfo.userId}`
    )
      .then((response) => response.json())
      .then((data) => setRelatedPosts(data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err))

    fetch(`https://jsonplaceholder.typicode.com/posts/${postInfo.id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err))
  }, [postInfo])

  useEffect(() => {
    console.log(authorInfo)
  }, [authorInfo])

  if (!postInfo) {
    window.location.href = "/"
  }

  return (
    <div>
      <Helmet>
        <title>Post | SingolarTest</title>
      </Helmet>
      <Container>
        {loading ? (
          <Oval
            height={80}
            width={80}
            color="white"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#fff"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          <>
            {postInfo && (
              <PostBody>
                <PostTitle>{postInfo.title}</PostTitle>
                <PostText>{postInfo.body}</PostText>
                <PostBottom>
                  <SecondaryTitle>About the author:</SecondaryTitle>
                  <AuthorInfo>
                    <AuthorText>Name: {authorInfo.name}</AuthorText>
                    <AuthorText>Username: {authorInfo.username}</AuthorText>
                    <AuthorText>Email: {authorInfo.email}</AuthorText>
                    <AuthorText>Phone: {authorInfo.phone}</AuthorText>
                    <AuthorText>Website: {authorInfo.website}</AuthorText>
                  </AuthorInfo>
                </PostBottom>
                <RelatedPostsContainer>
                  <SecondaryTitle>Posts from this Author:</SecondaryTitle>

                  <RelatedPosts>
                    {relatedPosts.map((post) => (
                      <RelatedPost
                        key={post.id}
                        to={``}
                        onClick={() => postInfoAux(post)}
                      >
                        <RelatedPostTitle>{post.title}</RelatedPostTitle>
                      </RelatedPost>
                    ))}
                  </RelatedPosts>
                </RelatedPostsContainer>
                <CommentsContainer>
                  <SecondaryTitle>Comments:</SecondaryTitle>
                  <CommentsContainerContent>
                    {comments.map((comment) => (
                      <Comment key={comment.id}>
                        <CommentTop>
                          <CommentName>{comment.name}</CommentName>
                          <CommentEmail>{comment.email}</CommentEmail>
                        </CommentTop>
                        <CommentBody>{comment.body}</CommentBody>
                      </Comment>
                    ))}
                  </CommentsContainerContent>
                </CommentsContainer>
              </PostBody>
            )}
          </>
        )}
      </Container>
    </div>
  )
}

export default Post
