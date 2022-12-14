import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Slide, toast } from "react-toastify"
import { Link } from "react-router-dom"

import {
  Container,
  InputContainer,
  Form,
  Label,
  Title,
  Input,
  TextArea,
  Button,
  ErrorMessage,
  ButtonsContainer,
} from "./styles"

const ChangePost = ({ toEdit, postInfo }) => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [log, setLog] = useState("")
  const [toastText, setToastText] = useState("")

  const notify = () =>
    toast.success(`Post ${toastText}! - Check the console`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    })

  if (toEdit && !postInfo) {
    window.location.href = "/"
  }

  const handleTitleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      title: event.target.value,
    }))
  }

  const handleContentChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      content: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (values.title && values.content) {
      if (toEdit === false) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: values.title,
            body: values.content,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => setLog(json))
          .catch((err) => console.log(err))
      } else {
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "PUT",
          body: JSON.stringify({
            id: 1,
            title: values.title,
            body: values.content,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((err) => console.log(err))
      }
      setSuccess(true)
      notify()

      setTimeout(() => {
        setSuccess(false)
      }, 1000)
    }
    setSubmitted(true)
  }

  useEffect(() => {
    console.log(log)
  }, [log])

  useEffect(() => {
    if (toEdit === true) {
      setValues({
        title: postInfo.title,
        content: postInfo.body,
      })
    } else {
      setValues({
        title: "",
        content: "",
      })
    }
  }, [toEdit, postInfo])

  useEffect(() => {
    if (toEdit) {
      setToastText("edited")
    } else {
      setToastText("created")
    }
  }, [toEdit])

  return (
    <Container>
      <Helmet>
        {toEdit ? <title>Edit Post</title> : <title>Create Post</title>}
      </Helmet>
      {toEdit ? <Title>Edit Post</Title> : <Title>Create Post</Title>}

      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Title</Label>
          <Input
            type="text"
            placeholder="Title"
            disabled={success}
            name="title"
            value={values.title}
            onChange={handleTitleChange}
          />
          {submitted && !values.title && (
            <ErrorMessage>Please enter a first name</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Body</Label>
          <TextArea
            type="text"
            placeholder="Post Content"
            name="content"
            disabled={success}
            value={values.content}
            onChange={handleContentChange}
          />
          {submitted && !values.content && (
            <ErrorMessage>Please enter the content of the post</ErrorMessage>
          )}
        </InputContainer>
        <ButtonsContainer>
          <Link to={"/"}>
            <Button>Go Back</Button>
          </Link>

          <Button type="submit" value="Submit" disabled={success}>
            {toEdit ? "Edit Post" : "Create Post"}
          </Button>
        </ButtonsContainer>
      </Form>
    </Container>
  )
}

export default ChangePost
