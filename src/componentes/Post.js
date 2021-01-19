import React from 'react'
import posts from '../data/posts'
import {useParams, Redirect} from 'react-router-dom'
import styled from 'styled-components'


const Post = () => {
  const {id} = useParams();

  return (
    <>
    {posts[id-1]?
    <ContainerPost>

    <TituloPost>{posts[id-1].titulo}</TituloPost>
    <ParrafoPost>{posts[id-1].texto}</ParrafoPost>
    </ContainerPost>
    :
    <Redirect to="/"/> 
    }
    </>

  )
}
const ContainerPost = styled.div`
width: 80%auto;
border: 2px solid #a2d0c1;
padding:20px;


`
const TituloPost = styled.h2`
font-size:1.5rem;
color:#214151 ;
text-align:center;
margin-bottom:10px;

`
const ParrafoPost = styled.p`
font-size:0.9rem;
color:#214151;

`


export default Post
