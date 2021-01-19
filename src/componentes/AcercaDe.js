import React from 'react'
import styled from 'styled-components'

const AcercaDe = () => {
  return (
    <ContainerAcercaDextBorder>
    <ContainerAcercaD>
    <SubTituloAcercaD>Acerca de</SubTituloAcercaD>
    <TextoAcercaD>Holii!! me LLamo NatyQM soy una BabyJunior Frontend Developer</TextoAcercaD>
  </ContainerAcercaD>
  </ContainerAcercaDextBorder>
  )
}


const ContainerAcercaDextBorder = styled.div`

border:1px solid #a2d0c1;
padding:10px;
`

const ContainerAcercaD = styled.div`
border:1px solid #f8dc81;
color: #214151;
padding:20px;

`
const SubTituloAcercaD= styled.h2`
font-size:1.45rem;
text-align:center;
margin-bottom:10px;
`
const TextoAcercaD = styled.p`
font-size:0.9rem;

`
export default AcercaDe
