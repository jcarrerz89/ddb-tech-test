import { Component, Fragment } from "react";

import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink, 
  from } from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import CareersList from './careersList/CareersList';

const errorLink = onError(({ graphqlErrors, networkError}) => { 
  if (graphqlErrors) { 
    graphqlErrors.map(({message, location, path}) => { 
      alert(`graphql error ${message}`)
    });
  }
});
const link = from([
  errorLink, 
  new HttpLink({uri: 'http://localhost:4000/graphql'})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="hero">
            <div className="hero-content">
              <h1>Oportunities availables</h1>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <CareersList></CareersList>
            </div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
