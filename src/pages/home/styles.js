import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 40px;
`;

export const Posts = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  max-height: 70px;

  //put a line break if the text is too long
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PostText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
`;