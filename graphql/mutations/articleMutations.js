import { gql } from "@apollo/client";

const ADD_ARTICLE = gql`
  mutation AddArticle(
    $title: String!
    $image: String!
    $desc: String!
    $markdown: String!
  ) {
    addArticle(title: $title, image: $image, desc: $desc, markdown: $markdown) {
      id
      title
      image
      desc
      sanitizedHtml
      createdAt
      updatedAt
    }
  }
`;

const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      id
    }
  }
`;

export { ADD_ARTICLE, DELETE_ARTICLE };