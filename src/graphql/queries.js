import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          ratingAverage
          forksCount
          reviewCount
          stargazersCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const SINGLE_REPOSITORIES = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      ratingAverage
      forksCount
      reviewCount
      stargazersCount
      ownerAvatarUrl
      url
    }
  }
`;

export const REVIEW_REPOSITORIES = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  {
    me {
      id
      username
    }
  }
`;
