import styled from "styled-components"

//modal
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const ModalContent = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
`

export const ModalText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
`

export const ModalButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`

export const ModalButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

export const ModalButtonCancel = styled(ModalButton)`
  background-color: #333;
`

export const ModalButtonDelete = styled(ModalButton)`
  background-color: #f00;
`
