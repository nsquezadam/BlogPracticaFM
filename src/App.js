import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import AcercaDe from './componentes/AcercaDe'
import Blog from './componentes/Blog'
import Error404 from './componentes/Error404'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Post from './componentes/Post'

const App = () => {
  return (
    <BrowserRouter>
    <ContenedorPrincipal>
     <Header />
      <Main>
        <Switch>
      <Route path="/" exact={true} component={Inicio}/>
      <Route path="/blog" component={Blog} />
      <Route path="/post/:id" component={Post} />
      <Route path="/acerca-de" component={AcercaDe} />
      <Route component={Error404}/>
      </Switch>
      </Main>
    </ContenedorPrincipal>
    </BrowserRouter>
  )
}



const ContenedorPrincipal =  styled.div`
padding:40px;
width: 90%;
max-width:700px;


`

const Main =  styled.main`
background: #eff7e1;
padding:40px;
border-radius: 10px;
box-shadow:0px 0px 5px rgba(129,129,129, 0.1);

`

export default App
