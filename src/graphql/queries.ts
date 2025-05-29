// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_COUNTER = gql`
  query GetCounter {
    getCounter
  }
`;
