import { apolloClient } from "@/components/api/apolloClient";
import LandingLayout from "@/components/layouts/LandingLayout";
import { GET_BAGROVANIE_POSTS } from "@/graphql/queries";
import Link from "next/link";
import { useRouter } from "next/router";
import { Post } from "../../../interfaces/interfaces";


export default function Prace({ posts }: { posts: any }) {
  const router = useRouter();
  return (
    <>
      <LandingLayout>
        <p>Prace</p>
        {posts.map((post: Post, i: number) => {
          const {
            attributes: { heading, urlSlug },
          } = post;
          return <Link key={i} href={`${router.pathname}/${urlSlug}`}>{heading}</Link>;
        })}
      </LandingLayout>
    </>
  );
}

export async function getServerSideProps() {

  const { data } = await apolloClient.query({
    query: GET_BAGROVANIE_POSTS,
  });

  return {
    props: { posts: data.zemnePraces?.data },
  };
}
