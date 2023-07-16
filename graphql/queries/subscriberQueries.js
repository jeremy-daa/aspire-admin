import { gql } from "@apollo/client";

const GET_SUBSCRIBERS = gql`
  query getSubscribers {
    subscribers {
      id
      email
      createdAt
      updatedAt
    }
  }
`;

export { GET_SUBSCRIBERS };