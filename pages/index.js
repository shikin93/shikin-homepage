import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="my-12">
        <h2 className="font-bold text-6xl mb-3">Chosiin</h2>
        <p className="text-lg text-accentDark mb-12">I specialize in building web applications using the React JS framework. Developing user interfaces fast, responsive, and easy to use.</p>
        <Link href="/about">
          <button className="text-lg border-2 border-accentDark px-4 py-1 rounded-lg duration-500 hover:bg-accentDark hover:text-background">Get in Touch &rarr;</button>
        </Link>
      </section>
    </>
  );
};

export default Home;