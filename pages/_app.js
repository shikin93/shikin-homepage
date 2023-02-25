import Layout from '../components/layouts/main';
import '../styles/globals.css';
import { Rubik } from '@next/font/google';
import { ThemeProvider } from 'next-themes';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  preload: false
});

const Website = ({ Component, pageProps }) => (
  <div className={`${rubik.variable} font-sans`}>
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </div>
);

export default Website;