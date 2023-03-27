import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // uri: "https://strapi-production-9d17.up.railway.app/graphql",
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});