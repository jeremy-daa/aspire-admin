import { gql } from "@apollo/client";

const DELETE_SUBSCRIBER = gql`
  mutation DeleteSubscriber($id: ID!) {
    deleteSubscriber(id: $id) {
      id
    }
  }
`;

export { DELETE_SUBSCRIBER };