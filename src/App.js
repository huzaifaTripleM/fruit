import logo from './logo.svg';
import './App.css';
import AddFruit from './components/addFruit';
import User from './components/user'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

function App() {


  const client = new ApolloClient({
    uri: "https://merchapi-login-dev.azurewebsites.net/api/graphql", // Your running GraphQL server URL
    cache: new InMemoryCache()
  });


  return (

    <ApolloProvider client = {client}>
        <User/>
    </ApolloProvider>
  );
}

export default App;
