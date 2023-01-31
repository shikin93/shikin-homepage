import ProjectList from "../components/projectList";
import Link from "next/link";
import { supabase } from '../lib/supabaseClient';

const Home = ({ projects }) => {
  return (
    <>
      <section className="my-12">
        <h2 className="font-bold text-6xl mb-3">Chosiin</h2>
        <p className="text-lg text-accentDark mb-12">I specialize in building web applications using the React JS framework. Developing user interfaces fast, responsive, and easy to use.</p>
        <Link href="/about">
          <button className="text-lg border-2 border-accentDark px-4 py-1 rounded-lg duration-500 hover:bg-accentDark hover:text-background">Get in Touch &rarr;</button>
        </Link>
      </section>
      <section>
        <h2 className="text-4xl font-bold">Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await supabase.from('projects').select('*');

  return {
    props: {
      projects: data,
    }
  };
}

export default Home;