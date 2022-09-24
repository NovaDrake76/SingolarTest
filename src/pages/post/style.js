import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const PostBody = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PostTitle = styled.h1`
  font-size: 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

export const PostAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`

export const PostAuthorInfoContent = styled.div`
  padding: 10px;
`

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
`

export const CommentTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
`

export const CommentBody = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
`

export const CommentAuthor = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
`
