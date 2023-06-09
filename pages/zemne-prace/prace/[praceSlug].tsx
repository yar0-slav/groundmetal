import { apolloClient } from '@/components/api/apolloClient';
import { GET_BAGROVANIE_SLUGS, GET_INDIVIDUAL_BAGROVANIE_POST } from '@/graphql/queries';
import { PostSingle, Post } from '@/interfaces/interfaces';
import { Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  post: PostSingle;
}

export default function BagrovaniePost({ post }: Props) {
  const { heading, images } = post;
  return (
    <Box>
      <Heading>{heading}</Heading>
      {images.map((img, i: number) => {
        const {
          attributes: { url, width, height, name },
        } = img;
        return <Image key={i} src={url} alt={name!} width={width} height={height}></Image>;
      })}
    </Box>
  );
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({ query: GET_BAGROVANIE_SLUGS });

  const paths = data.zemnePraces.data.map((post: Post) => {
    return { params: { praceSlug: post.attributes.urlSlug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { praceSlug: string } }) {
  const { data } = await apolloClient.query({
    query: GET_INDIVIDUAL_BAGROVANIE_POST,
    variables: { slugUrl: params.praceSlug },
  });

  const {
    heading,
    img: { data: images },
  } = data.zemnePraces.data[0].attributes;

  return {
    props: {
      post: {
        heading: heading,
        images: images,
      },
    },
  };
}
