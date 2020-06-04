import Head from "next/head";
import React from "react";

const Metatags = (props) =>
  <Head>
    <title>{props.title}</title>

    <meta name="description" content={props.description} />

    <link rel="canonical" href={props.canonical} />

    <meta property="og:description" content={props.description}/>

    <meta property="og:image" content={props.image? props.image : "https://buildyourpath.it/images/og.jpg"} />
    <meta property="og:image:height" content="840" />
    <meta property="og:image:width" content="1680" />

    <meta property="og:site_name" content={props.title} />
    <meta property="og:title" content={props.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={props.canonical} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={props.description}/>
    <meta name="twitter:image" content={props.image? props.image : "https://buildyourpath.it/images/og.jpg"} />
    <meta name="twitter:title" content={props.title}/>
  </Head>
;

export default Metatags;
