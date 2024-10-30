import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});
function Graphql() {
  const query = gql`
    query getData {
      getTodo {
        completed
        id
        title
        userId
        user {
          id
          name
          username
        }
      }
    }
  `;
  const { loading, data } = useQuery(query);
  return (
    <div>
      Graphql
      <button
        onClick={() => {
          console.log(data.getTodo);
        }}
      >
        Click
      </button>
    </div>
  );
}

export function GraphQlWrapper() {
  return (
    <ApolloProvider client={client}>
      <Graphql />
    </ApolloProvider>
  );
}
