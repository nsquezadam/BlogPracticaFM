import React from 'react'
import posts from '../data/posts'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Blog = () => {




  return (
    <ContainerPosts>
    <TituloBlog>Blog</TituloBlog>
    <PostsList>
      {posts.map((post) => {
        return( 
        <EveryPost key={post.id}>
         <Link to={`/post/${post.id}`}>{post.titulo}</Link>
          </EveryPost>

          )})}
    </PostsList>
  </ContainerPosts>
  )
}
const ContainerPosts = styled.div`
   border: 1px solid #f8dc81;
   display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  height:40vh;
  padding:40px;

`
const TituloBlog = styled.h2`
font-size:1.5rem;
color: #214151;
text-align:center;
margin-bottom:20px;


`
const PostsList = styled.ul`
text-decoration:none;
list-style:none;
`
const EveryPost = styled.li`
margin-bottom:30px;

a{
  color:#214151;
}
a:hover{
  color:#a2d0c1;
}


`

export default Blog
