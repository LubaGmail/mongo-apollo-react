import './App.css';
import React from "react";
import Layout from './pages/Layout'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT,
  cache: new InMemoryCache()
})

const App = () => {
  
  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
    
  )
}

export default App;

