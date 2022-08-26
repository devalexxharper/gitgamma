import styled from 'styled-components'


export const HomeContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25em 0 0 .25em;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25em .25em 0;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`
export const Error = styled.span`  
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`

