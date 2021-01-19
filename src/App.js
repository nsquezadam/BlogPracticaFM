import React from 'react'
import {BrowserRouter, Route, } from 'react-router-dom'
import styled from 'styled-components'

import AcercaDe from './componentes/AcercaDe'
import Blog from './componentes/Blog'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'

const App = () => {
  return (
    <BrowserRouter>
    <ContenedorPrincipal>
     <Header />
      <Main>
      <Route path="/" exact={true} component={Inicio}/>
      <Route path="/blog" component={Blog} />
      <Route path="/acerca-de" component={AcercaDe} />
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
