import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ProfileBody = styled.div`
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
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ProfileTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ProfileText = styled.span`
  font-size: 20px;
  font-weight: 500;
`
export const AlbunsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`

export const Album = styled(Link)`
  padding: 20px;
  height: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-decoration: none;
  color: black;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    margin-top: -10px;
  }
`
