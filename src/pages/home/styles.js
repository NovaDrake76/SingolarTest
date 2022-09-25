import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  max-width: 1500px;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: white;
  margin-bottom: 40px;
`

export const Posts = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  &hover {
    color: #333;
  }
`

export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: gray;
    color: #fff;
  }
`

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  max-height: 70px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const PostText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`

export const SeeMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000;
  }
`
