import '../App.css';
import React from "react";
import Dashboard from './Dashboard'
import Detail from './Detail'
import NoMatch from './NoMatch'

import { Routes, Route, Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT,
  cache: new InMemoryCache()
})

const App = () => {
  
  return (
    <ApolloProvider client={client}>
        <div className="App">
          <div>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="books" element={<Dashboard/>} /> 
                <Route path="book/:bookName" element={<Detail/>} />
                <Route path="nomatch" element={<NoMatch/>} />
            </Routes>
           </div>
      </div>
    </ApolloProvider>
    
  )
}

export default App;

