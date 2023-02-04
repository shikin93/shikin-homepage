import Head from "next/head";
import Link from "next/link";
import { AiFillInstagram, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { HiExternalLink } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';

const tech = ["HTML5", "CSS3", "Javascript (ES6+)", "Node.js", "React", "Tailwindcss", "Git"];

const certifications = [
  {
    nama: "Web Programming Basics",
    credential: "https://www.dicoding.com/certificates/JLX1LVYYNX72"
  },
  {
    nama: "JavaScript Programming Basics",
    credential: "https://www.dicoding.com/certificates/JLX11RYRNX72"
  },
  {
    nama: "Front-End Web Basics",
    credential: "https://www.dicoding.com/certificates/4EXG912R9ZRL"
  },
  {
    nama: "React Basic",
    credential: "https://www.dicoding.com/certificates/NVP79NVVWZR0"
  },
  {
    nama: "React Web Application Fundamental",
    credential: "https://www.dicoding.com/certificates/4EXG934G1ZRL"
  },
  {
    nama: "React Web Developer Expert",
    credential: "https://www.dicoding.com/certificates/NVP79NNQ4ZR0"
  }
];

const About = () => {
  return (
    <>
      <Head>
        <title>Shikin / About me</title>
      </Head>
      <section className="my-12">
        <h1 className="text-5xl font-bold">About me</h1>
        <section className="my-8 text-lg">
          <p>Hai, I&apos;m Chosiin</p>
          <p className="my-4">I&apos;m passionate about Coding, and I love spending my free time to Coding and learn about technology. I build web applications with React and I love sharing about web development specifically React.</p>
        </section>
        <aside className="my-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link href="https://www.instagram.com/shikin.93/">
              <div className="border-2 border-accentDark rounded-lg p-4 flex gap-1 hover:bg-accentDark hover:text-background">
                <AiFillInstagram className="text-2xl" />
                Instagram
              </div>
            </Link>
            <Link href="mailto:official.shiin@gmail.com">
              <div className="border-2 border-accentDark rounded-lg p-4 flex gap-1 hover:bg-accentDark hover:text-background">
                <AiFillMail className="text-2xl" />
                Mail
              </div>
            </Link>
            <Link href="#">
              <div className="border-2 border-accentDark rounded-lg p-4 flex gap-1 hover:bg-accentDark hover:text-background">
                <AiFillLinkedin className="text-2xl" />
                Linkedin
              </div>
            </Link>
          </div>
        </aside>
        <section className="my-8">
          <h2 className="border-b-4 w-fit border-b-accentDark pb-2 mb-3 text-2xl font-bold">Technologies I&apos;m using recently</h2>
          <ul>
            {
              tech.map((item) => (
                <li key={item} className="flex items-center gap-2 mb-3">
                  <BsArrowUpRight />
                  {item}
                </li>
              ))
            }
          </ul>
        </section>
        <section className="my-8">
          <h2 className="border-b-4 w-fit border-b-accentDark pb-2 mb-4 text-2xl font-bold">Certificate of Education</h2>
          <ul>
            {
              certifications.map((item) => (
                <Link key={item.nama} href={item.credential} target="_blank">
                  <li className="flex items-end gap-2 mb-3 hover:underline">
                    <HiExternalLink className="text-xl" />
                    <p>{item.nama}</p>
                  </li>
                </Link>

              ))
            }
          </ul>
        </section>
      </section>
    </>
  );
};

export default About;
