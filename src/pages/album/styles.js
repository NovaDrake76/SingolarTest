import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const AlbumBody = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: start;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
  }
`

export const AlbumItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const AlbumItem = styled.a`
  width: 180px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  text-decoration: none;
  color: black;
`
export const AlbumImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

export const AlbumText = styled.span`
  font-size: 18px;
  color: #000;
  padding: 10px;
  text-align: center;
`
