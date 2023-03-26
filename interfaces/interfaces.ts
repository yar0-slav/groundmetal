export interface Post {
  __typename: string;
  attributes: { __typename: string; urlSlug?: string; title?: string };
}

export interface PostSingle {
  images: PostImages,
  title: string,
}

interface PostImage {
  attributes: {
    width: number;
    height: number;
    url: string;
    name?: string;
    previewUrl?: string;
  };
}

interface PostImages extends Array<PostImage> {}
