import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
 
       <ContenedorHeader>
      <Titulo>Mi Blog Personal</Titulo>
      <Menu>
        <NavLink to="/" exact={true}>Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca-de">Acerca de mi</NavLink>
      </Menu>
      </ContenedorHeader>
   
  )
}

const ContenedorHeader = styled.header`

text-align:center;
margin-bottom:40px;

`
const Titulo = styled.h1`
margin-bottom:10px;
font-size:1.625rem;
color:#214151; 
text-transform:uppercase;
`

const Menu= styled.nav`
a{
  text-decoration: none;
  margin: 0 10px;
  color:#214151 ;
}
a:hover{
  color:#a2d0c1;
  /* color: #f8dc81; */
}
a.active {
  border-bottom:2px solid #f8dc81;
  padding-bottom: 3px;

}

`

export default Header
