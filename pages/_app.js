import Layout from '../components/layouts/main';
import '../styles/globals.css';

const Website = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default Website;