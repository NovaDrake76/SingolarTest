import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const PostBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: start;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PostTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`

export const PostText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
`
export const PostBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const SecondaryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: gray;
  margin-bottom: 4px;
`
export const AuthorInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
  margin: 0;
`

export const AuthorText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #000;
`
export const RelatedPostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const RelatedPosts = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  padding: 10px;
`

export const RelatedPost = styled(Link)`
  min-width: 200px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: start;
  text: white;
  text-decoration: none;
`

export const RelatedPostTitle = styled.h4`
  font-size: 20px;
  font-weight: 400;
  color: #333;
  max-height: 70px;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  mt
`

export const CommentsContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: start;
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
`

export const CommentTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const CommentName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`

export const CommentEmail = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: gray;
`

export const CommentBody = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #000;
`
