"use client";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const Name = "auth";

const httpLink = createHttpLink({
  uri: "http://localhost:4004/graphql/",
});

const authLink = setContext((_, { headers }) => {
  const token = getCookie("MyToken");

  return {
    headers: {
      ...headers,
      [Name]: token,
    },
  };
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

import React from "react";
import { getCookie } from "../../utils/cookie";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>,
    </>
  );
};
