import Head from "next/head";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import NavBar from "../components/NavBar";
import "../scss/style.scss";

const Index = ({ title, slug }) => (
  <section>
    <Head>
      <title>index</title>
    </Head>
    <NavBar />
    <h1 className="">Hello World!!!</h1>
    dsds
    <input className="border border-green " />
    <Link as={`/post/${slug}`} href={`/post?title=${title}`}>
      <a> Post</a>
    </Link>
  </section>
);

Index.getInitialProps = async function() {
  const title = "Title on nextjs";
  const slug = "post-next-js";
  return { title, slug };
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default Index;
