import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const BlogPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Shikin - Blog</title>
      </Head>
      <section className="my-12">
        <h1 className="text-5xl font-bold mb-8">Blog</h1>
        {
          posts.map((post, idx) => (
            <Link key={idx} href={post.url}>
              <div className="mb-3">
                <p className="text-lg font-semibold hover:underline">{post.title}</p>
                <time dateTime={post.date} className="text-sm text-accentDark">
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </div>
            </Link>
          ))
        }
      </section>
    </>
  );
};

export default BlogPage;