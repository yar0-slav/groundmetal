import { gql } from "@apollo/client";

export const GET_BAGROVANIE_POSTS = gql`
  query {
    bagrovaniePosts {
      data {
        attributes {
          title
          urlSlug
        }
      }
    }
  }
`;

export const GET_BAGROVANIE_SLUGS = gql`
  query {
    bagrovaniePosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

export const GET_INDIVIDUAL_BAGROVANIE_POST = gql`
  query ($slugUrl: String!) {
    bagrovaniePosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          img {
            data {
              attributes {
                name
                width
                height
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;
