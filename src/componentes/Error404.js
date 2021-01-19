import React from 'react'
import e404 from '../styles/images/e404.svg'
import  styled from 'styled-components'

const Error404 = () => {
  return (
    <ContenedorErro>
      <ImgError src={e404} alt="error"/>
    </ContenedorErro>
  )
}


const ContenedorErro = styled.div`


display:flex;
justify-content:center;
align-items:center;
padding:40px;


` 
const ImgError = styled.img`
width: 100%;
text-align:center;


`

export default Error404
