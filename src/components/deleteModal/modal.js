import React, { useState, useEffect } from "react"
import { Slide, toast } from "react-toastify"

import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalText,
  ModalButtons,
  ModalButtonDelete,
  ModalButtonCancel,
} from "./style"

const DeleteModal = ({ post, modalAux }) => {
  const [close, setClose] = useState(true)
  const notify = () =>
    toast.success("Post deleted! - Check the console", {
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

  useEffect(() => {
    setClose(false)
  }, [modalAux])

  function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    setClose(true)
    notify()
  }

  function closeModal() {
    setClose(true)
  }

  return (
    <>
      {close ? null : (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Confirm Delete</ModalTitle>
            <ModalText>Are you sure you want to delete this post?</ModalText>
            <ModalButtons>
              <ModalButtonDelete onClick={() => deletePost(post.id)}>
                Delete
              </ModalButtonDelete>
              <ModalButtonCancel onClick={() => closeModal()}>
                Cancel
              </ModalButtonCancel>
            </ModalButtons>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}

export default DeleteModal
