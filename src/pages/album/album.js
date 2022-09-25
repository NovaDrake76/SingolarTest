import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import {
  Container,
  AlbumBody,
  AlbumItem,
  AlbumText,
  AlbumImage,
  AlbumItemContainer,
} from "./styles"

const Album = ({ albumInfo }) => {
  const [albumContent, setAlbumContent] = useState([])
  console.log(albumContent)

  useEffect(() => {
    if (albumInfo) {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumInfo.id}`
      )
        .then((response) => response.json())
        .then((json) => setAlbumContent(json))
    }
  }, [albumInfo])

  if (!albumInfo) {
    window.location.href = "/profile"
  }

  return (
    <>
      <Helmet>
        <title>Profile | SingolarTest</title>
      </Helmet>
      <Container>
        <AlbumBody>
          <h2>Album: {albumInfo.title}</h2>
          <AlbumItemContainer>
            {albumContent.map((image) => (
              <AlbumItem
                href={image.url}
                target="_blank"
                rel="noreferrer"
                key={image.id}
              >
                <AlbumImage src={image.thumbnailUrl} alt={image.title} />
                <AlbumText>{image.title}</AlbumText>
              </AlbumItem>
            ))}
          </AlbumItemContainer>
        </AlbumBody>
      </Container>
    </>
  )
}

export default Album
