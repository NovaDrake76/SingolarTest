import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import {
  Container,
  ProfileBody,
  ProfileInfo,
  ProfileText,
  ProfileTextContainer,
  AlbunsContainer,
  Album,
} from "./styles"

const Profile = ({ setAlbumInfo }) => {
  const [userInfo, setUserInfo] = useState({})
  const [profileInfoList, setProfileInfoList] = useState([])
  const [profileAlbuns, setProfileAlbuns] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setUserInfo(json))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (userInfo) {
      if (userInfo) {
        setProfileInfoList([
          {
            title: "Name",
            value: userInfo.name,
          },
          {
            title: "Email",
            value: userInfo.email,
          },
          {
            title: "Username",
            value: userInfo.username,
          },
          {
            title: "Phone",
            value: userInfo.phone,
          },
          {
            title: "Website",
            value: userInfo.website,
          },
          {
            title: "Company",
            value: userInfo.company?.name,
          },
          {
            title: "Address",
            value: `${userInfo.address?.street}, ${userInfo.address?.suite}, ${userInfo.address?.city}, ${userInfo.address?.zipcode}`,
          },
        ])
      }
    }
  }, [userInfo])

  const albumAux = (post) => {
    setAlbumInfo(post)
  }

  useEffect(() => {
    if (userInfo) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}/albums`)
        .then((response) => response.json())
        .then((json) => setProfileAlbuns(json))
    }
  }, [userInfo])

  return (
    <>
      <Helmet>
        <title>Profile | SingolarTest</title>
      </Helmet>
      <Container>
        <ProfileBody>
          <h2>Profile</h2>
          <ProfileInfo>
            {profileInfoList.map((item, index) => (
              <ProfileTextContainer key={index}>
                <ProfileText>{item.title}:</ProfileText>
                {item.value}
              </ProfileTextContainer>
            ))}
          </ProfileInfo>
          <h2>Albuns</h2>
          <AlbunsContainer>
            {profileAlbuns.map((item, index) => (
              <Album to={"/album"} key={index} onClick={() => albumAux(item)}>
                {item.title}
              </Album>
            ))}
          </AlbunsContainer>
        </ProfileBody>
      </Container>
    </>
  )
}

export default Profile
