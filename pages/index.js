import ProjectList from "../components/projectList";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="my-12">
        <h2 className="font-bold text-6xl mb-3">Chosiin</h2>
        <p className="text-lg mb-12">I specialize in building web applications using the React JS framework. Developing user interfaces fast, responsive, and easy to use.</p>
        <Link href="/about">
          <button className="border-2 border-font dark:border-background text-lg px-4 py-1 rounded-lg duration-500 hover:bg-accentGreen hover:text-font">Get in Touch &rarr;</button>
        </Link>
      </section>
      <section className="my-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <ProjectList />
      </section>
    </>
  );
};

export default Home;