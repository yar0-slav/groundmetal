import { apolloClient } from "@/components/api/apolloClient";
import {
  GET_BAGROVANIE_SLUGS,
  GET_INDIVIDUAL_BAGROVANIE_POST,
} from "@/graphql/queries";
import { PostSingle, Post } from "@/interfaces/interfaces";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  post: PostSingle;
}

export default function BagrovaniePost({ post }: Props) {
  const { title, images } = post;
  return (
    <Box>
      <Heading>{title}</Heading>
      {images.map((img, i: number) => {
        const {
          attributes: { url, width, height, name },
        } = img;
        return (
          <Image
            key={i}
            src={url}
            alt={name!}
            width={width}
            height={height}
          ></Image>
        );
      })}
    </Box>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({ query: GET_BAGROVANIE_SLUGS });

  const paths = data.bagrovaniePosts.data.map((post: Post) => {
    return { params: { praceSlug: post.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { praceSlug: string };
}) {
  const { data } = await apolloClient.query({
    query: GET_INDIVIDUAL_BAGROVANIE_POST,
    variables: { slugUrl: params.praceSlug },
  });

  const {
    title,
    img: { data: images },
  } = data.bagrovaniePosts.data[0].attributes;

  return {
    props: {
      post: {
        title: title,
        images: images,
      },
    },
  };
}
