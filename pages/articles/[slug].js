import Head from "next/head";
import ErrorPage from 'next/error';
import { format, parseISO } from "date-fns";
import { getAllPosts, getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import { useRouter } from "next/router";
import markdownStyle from './markdownStyle.module.css';

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

const Post = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="my-12">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-2">{post.title}</h1>
          <time dateTime={post.date} className="text-sm bg-accentGreen p-2 rounded-lg dark:text-font">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div className={markdownStyle['markdown']} dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
};

export default Post;