import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Oval } from "react-loader-spinner"

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
  const [loading, setLoading] = useState(true)
  console.log(albumContent)

  useEffect(() => {
    if (albumInfo) {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumInfo.id}`
      )
        .then((response) => response.json())
        .then((json) => setAlbumContent(json))
        .then(() => setLoading(false))
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
        )}
      </Container>
    </>
  )
}

export default Album
