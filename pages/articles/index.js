import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
  ]);

  return {
    props: { allPosts },
  };
}

const BlogPage = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>Shikin - Blog</title>
      </Head>
      <section className="my-12">
        <h1 className="text-5xl font-bold mb-8">Blog</h1>
        {
          allPosts.map((post, idx) => (
            <div className="mb-3" key={idx}>
              <Link
                as={`/articles/${post.slug}`}
                href="/articles/[slug]"
              >
                <h2 className="text-lg font-semibold hover:underline">{post.title}</h2>
              </Link>
              <time dateTime={post.date} className="text-sm text-accentDark">
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </div>
          ))
        }
      </section>
    </>
  );
};

export default BlogPage;