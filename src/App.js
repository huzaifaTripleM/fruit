import logo from './logo.svg';
import './App.css';
import AddFruit from './components/addFruit';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

function App() {


  const client = new ApolloClient({
    uri: "https://my-example-url.com", // Your running GraphQL server URL
    cache: new InMemoryCache()
  });




  return (

    <ApolloProvider client = {client}>
        <AddFruit/>
    </ApolloProvider>
  );
}

export default App;
