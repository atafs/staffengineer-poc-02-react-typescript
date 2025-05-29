import { gql } from "@apollo/client";

export const SET_COUNTER = gql`
  mutation SetCounter($value: Int!) {
    setCounter(value: $value)
  }
`;
