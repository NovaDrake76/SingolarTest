import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  max-width: 1280px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  gap: 20px;
`

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 10px;
`

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
`

export const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
`

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  background-color: #fff;
  cursor: pointer;
`
