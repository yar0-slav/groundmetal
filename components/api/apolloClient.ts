import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://strapi-production-9d17.up.railway.app/graphql",
  cache: new InMemoryCache(),
});