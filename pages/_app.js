import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import '../styles/app.scss';  // import bulma 
// >>> 不用在每個.js import 'bulma/css/bulma.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
