import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import {
  Container,
  PostBody,
  Comment,
  CommentAuthor,
  CommentBody,
  CommentTitle,
  CommentsContainer,
  PostAuthorInfo,
  PostBottom,
  PostText,
  PostTitle,
  PostAuthorInfoContent,
} from "./style"

const Post = ({ postInfo }) => {
  const [authorInfo, setAuthorInfo] = React.useState({})

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setAuthorInfo(data))
  }, [])

  useEffect(() => {
    console.log(authorInfo)
  }, [authorInfo])

  return (
    <div>
      <Helmet>
        <title>Post | SingolarTest</title>
      </Helmet>
      <Container>
        {postInfo && (
          <PostBody>
            <PostTitle>{postInfo.title}</PostTitle>
            <PostText>{postInfo.body}</PostText>
            <PostBottom>
              {authorInfo.name && (
                <PostAuthorInfo>
                  <PostAuthorInfoContent>
                    {authorInfo.name}
                    {authorInfo.username}
                    {authorInfo.email}
                    {authorInfo.address.street}
                    {authorInfo.address.suite}
                    {authorInfo.address.city}
                    {authorInfo.address.zipcode}
                    {authorInfo.address.geo.lat}
                    {authorInfo.address.geo.lng}
                    {authorInfo.phone}
                    {authorInfo.website}
                    {authorInfo.company.name}
                    {authorInfo.company.catchPhrase}
                    {authorInfo.company.bs}
                  </PostAuthorInfoContent>
                </PostAuthorInfo>
              )}
            </PostBottom>

            <CommentsContainer>
              <Comment>
                <CommentTitle>Comment Title</CommentTitle>
                <CommentBody>Comment Body</CommentBody>
                <CommentAuthor>Author</CommentAuthor>
              </Comment>
            </CommentsContainer>
          </PostBody>
        )}
      </Container>
    </div>
  )
}

export default Post
