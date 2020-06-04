import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import classNames from "classnames";

import Header from "../components/header";
import Footer from "../components/footer";
import Password from "../components/modals/password";
import Post from "../components/post";
import Pulse from "../components/pulse";
import Notification from "../components/notification";
import Metatags from "../components/metatags";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../controllers/endpoints";

import { Tooltip, Alert } from "antd";

const useUserState = createPersistedState("user");

const Home = (props) => {
  const router = useRouter();

  const [user, setUser] = useUserState(null);
  const [posts, setPosts] = useState(props.posts);
  const [activeCategory, setActiveCategory] = useState(props.activeCategory);

  const changeCategory = async (category) => {
    const title = category ? category.title : null;

    setActiveCategory(title);

    const request = await endpoints.posts({
      category: title || new String(),
    });

    const posts = request.data;

    setPosts(posts);

    if (title)
      Router.push("/?categoria=" + title, undefined, { shallow: true });
    if (title == null) Router.push("/", undefined, { shallow: true });
  };

  return (
    <div>
      <Metatags
        title={"Build Your Path - Storie di imprenditoria digitale"}

        description={
          "Confrontati con altri imprenditori e sviluppatori su come realizzare e far crescere le tue idee"
        }

        canonical={"https://buildyourpath.it"}
      />

      <Header verification={props.verification}/>

      <Password 
        visible={user == null && props.id && props.token}
        id={props.id}
        token={props.token}
      />

      <main>
        <div className="container">
          {props.verification && (
            <div>
              <br />

              <Alert
                message={
                  props.verification == "success"
                    ? "Verifica del profilo avvenuta con successo"
                    : "Problemi riscontrati durante la verifica del profilo"
                }

                description={
                  props.verification == "success"
                    ? "Benvenuto! Il tuo profilo è stato verificato con successo, ora sei un membro a tutti gli effetti della nostra community"
                    : "Qualcosa è andato storto durante la conferma del tuo profilo, verifica di aver copiato correttamente l'URL che ti è stato inviato nell'email"
                }

                type={props.verification}

                style={{
                  cursor: "pointer",
                }}

                onClick={() => router.push("/", undefined, { shallow: true })}

                showIcon
              />
            </div>
          )}

          <div className="nav">
            <div className="nav__categories js-dropdown"></div>

            <div className="nav__menu js-dropdown">
              <ul>
                <li
                  className={classNames({
                    active: activeCategory == null,
                  })}
                  onClick={() => changeCategory(null)}
                >
                  <a style={{ fontWeight: "bold" }}>Tutti i post</a>
                </li>

                {props.categories.map((category) => (
                  <li
                    key={category.title}
                    className={classNames({
                      active: activeCategory == category.title,
                    })}
                    onClick={() => changeCategory(category)}
                  >
                    <a>{category.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {user && (
              <Link href={"/scrivi"}>
                <Tooltip
                  title={"Scrivi qualcosa di fantastico"}
                  placement={"left"}
                  defaultVisible={true}
                >
                  <img
                    src={"/icons/create.svg"}
                    className={"icon createNewButton clickable"}
                  />
                </Tooltip>
              </Link>
            )}
          </div>

          <div className="posts">
            <div className="posts__head">
              <div className="posts__topic title">Titolo</div>
              <div className="posts__category">Categoria</div>
              <div className="posts__users">Utenti</div>
              <div className="posts__replies">Risposte</div>
              <div className="posts__views">Visualizzazioni</div>
            </div>

            {posts.map((post) => {
              const index = posts.indexOf(post);

              const options = [
                "posts__item",
                "posts__item bg-f2f4f6",
                "posts__item bg-fef2e0",
              ];

              const className = options[index % 3];

              return (
                <Post
                  key={post.id}
                  post={post}
                  className={className}
                  changeCategory={changeCategory}
                />
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps(request) {
  const categories = await endpoints.categories();
  const tags = await endpoints.tags();
  const posts = await endpoints.posts();

  return {
    props: {
      activeCategory: request.query.categoria || null,
      verification: request.query.verifica || null,
      id: request.query.id || null, token: request.query.token || null,
      categories: categories.data, tags: tags.data,
      posts: posts.data
    },
  };
}

export default Home;
