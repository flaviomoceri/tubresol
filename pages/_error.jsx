import React, { useState, useEffect } from "react";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";
import Metatags from "../components/metatags";

import { Result, Button } from "antd";

const Error = (props) => {
  return (
    <div>
      <Metatags
        title={"Qualcosa non va"}
        description={"Questa pagina non esiste. Forse la hai sognata?"}
        canonical={"https://buildyourpath.it/errore"}
      />

      <Header />

      <main>
        <div className="container">
          <Result
            status="404"
            title="404"
            subTitle="Questa pagina non esiste"
            extra={<Link href={"/"}><div className={'redButton clickable'} style={{width: 200, margin:"auto"}}>Torna alla home</div></Link>}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Error;
