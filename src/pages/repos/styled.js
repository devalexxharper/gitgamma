import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`
export const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
  text-align: center;
  font-size: 2rem;
  font-family: Montserrat;
  font-weight: 600;
  color: #333;
`
export const List = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  list-style: none;
  margin: 0 10px;
  padding: 0;
`
export const ListItem = styled.li`
  margin: .5rem 0;
  font-family: Montserrat;
  font-weight: 400; 
  padding: 5px;
  font-size: 12px;
  border-radius: 8px;
  background: #1b1b1b;
  color: #fff;
  border: 1px solid #333;
  padding: 5px;
`
export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  text-decoration: none;
  color: #fff;
  border-radius: 8px;
`
