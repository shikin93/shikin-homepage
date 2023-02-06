import Layout from '../components/layouts/main';
import '../styles/globals.css';
import { Rubik } from '@next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  preload: false
});

const Website = ({ Component, pageProps }) => (
  <div className={`${rubik.variable} font-sans`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);

export default Website;