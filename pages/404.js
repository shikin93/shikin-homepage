import Link from 'next/link';

const FourOhFour = () => {
  return (
    <section className='text-center mt-20'>
      <h1 className='text-8xl font-bold md:text-9xl'>404</h1>
      <h2 className="text-3xl mb-8 text-accentDark">Page Not Found</h2>
      <Link href="/">
        <button className="font-bold hover:text-accentDark">
          Go back home &rarr;
        </button>
      </Link>
    </section>
  );
};

export default FourOhFour;
