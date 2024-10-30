import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import React from "react";

function Graphql() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      Graphql
      <button
        onClick={() => {
          client
            .query({
              query: gql`
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
              `,
            })
            .then((e) => console.log(e.data))
            .catch((e) => console.log(e));
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Graphql;
