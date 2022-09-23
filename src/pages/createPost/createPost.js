import React, { useState } from "react"
import { Helmet } from "react-helmet"
import {
  Container,
  InputContainer,
  Form,
  Label,
  Input,
  TextArea,
  Button,
  SuccessMessage,
  ErrorMessage,
  LogArea,
} from "./styles"

const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [log, setLog] = useState("")

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
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }
    setSubmitted(true)
  }

  return (
    <Container>
      <Helmet>
        <title>Create Post</title>
      </Helmet>
      <h1>Create Post</h1>

      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            disabled={success}
            name="title"
            value={values.title}
            onChange={handleTitleChange}
          />
          {submitted && !values.title && (
            <ErrorMessage id="first-name-error">
              Please enter a first name
            </ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Body</Label>
          <TextArea
            id="content"
            type="text"
            placeholder="Post Content"
            name="content"
            disabled={success}
            value={values.content}
            onChange={handleContentChange}
          />
          {submitted && !values.content && (
            <ErrorMessage id="first-name-error">
              Please enter the content of the post
            </ErrorMessage>
          )}
        </InputContainer>
        <Button type="submit" value="Submit" disabled={success}>
          Submit
        </Button>
      </Form>
      {success && (
        <SuccessMessage className="success-message">
          Success! Post created!
        </SuccessMessage>
      )}
      {log !== "" && <LogArea>{JSON.stringify(log)}</LogArea>}
    </Container>
  )
}

export default CreatePost
