import Head from 'next/head';
import Navbar from '../navbar';

const Main = ({ children }) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="description" content="Shikin's homepage" />
      <meta name="author" content="Chosiin" />
      <title>Shikin - Homepage</title>
    </Head>
    <header className="mx-auto md:max-w-2xl lg:max-w-3xl">
      <Navbar />
    </header>
    <main className="min-h-screen px-5 mx-auto md:max-w-2xl lg:max-w-3xl">
      {children}
    </main>
  </>
);

export default Main;
