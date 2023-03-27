import { gql } from "@apollo/client";

export const GET_BAGROVANIE_POSTS = gql`
  query {
    zemnePraces {
      data {
        attributes {
          heading
          urlSlug
        }
      }
    }
  }
`;

export const GET_BAGROVANIE_SLUGS = gql`
  query {
    zemnePraces {
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
    zemnePraces(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          heading
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
