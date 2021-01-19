import React from 'react'
import styled from 'styled-components'


const Inicio = () => {
  return (
    
      <ContenedorInicio>
        <TituloInicio>Pagina de Inicio</TituloInicio>
        <ParrafoInicio>Esta es la pagina principal de mi Blog</ParrafoInicio>
      </ContenedorInicio>
  )
    
}

const ContenedorInicio =styled.div`
color: #214151;
border: 1px solid #f8dc81;
padding:40px;
`

const TituloInicio = styled.h2`
font-size:1.5rem;
color: #214151;
text-align:center;
margin-bottom:20px;
`

const ParrafoInicio = styled.p`
font-size:0.9rem;
color:#214151;


`
export default Inicio
