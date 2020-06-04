import Head from "next/head";
import NProgress from "next-nprogress/component";

import "../styles/bootstrap.min.css";
import "../styles/antd.css";
import "../styles/bootstrap-grid.css";
import "../styles/landing.css";
import "../styles/global.css";

const App = ({ Component, pageProps }) => (
    <div>
      <NProgress
        color="#f25353"
        spinner
      />

      <Head>
        <title>Build Your Path</title>
      </Head>

      <Component {...pageProps} />
    </div>
);
 
export default App;