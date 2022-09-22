import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import {
  Container,
  InputContainer,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "./styles"

const CreatePost = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container>
      <Helmet>
        <title>Create Post</title>
      </Helmet>
      <h1>Create Post</h1>
      {success && <div className="success-message">Success! Post created!</div>}

      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleTitleChange}
          />
          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Body</Label>
          <TextArea
            id="content"
            type="text"
            placeholder="Post Content"
            name="content"
            value={values.content}
            onChange={handleContentChange}
          />
          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}
        </InputContainer>
        <Button type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default CreatePost
