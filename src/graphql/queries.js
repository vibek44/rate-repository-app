import { gql } from "@apollo/client";

export const REPOSITORY_SCHEMA_TYPES = gql`
  enum AllRepositoriesOrderBy {
    CREATED_AT
    RATING_AVERAGE
  }

  enum OrderDirection {
    ASC
    DESC
  }
`;

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $first: Int
    $after: String
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      totalCount
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
        cursor
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
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

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            repositoryId
            rating
            createdAt
            text
          }
        }
      }
    }
  }
`;
