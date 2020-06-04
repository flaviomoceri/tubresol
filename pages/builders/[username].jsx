import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";

import classNames from "classnames";

import Head from "next/head";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Post from "../../components/post";
import Avatar from "../../components/avatar";
import Patch from "../../components/patch";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../../controllers/endpoints";

import { Tabs } from "antd";

import Metatags from "../../components/metatags";

const { TabPane } = Tabs;

const useUserState = createPersistedState("user");

const User = (props) => {
  const router = useRouter();

  const [user, setUser] = useUserState(null);
  const [viewer, setViewer] = useState(props.viewer);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(function () {
    if (props.redirect) router.push("/errore");
  }, []);

  const updateViewerByUsername = async (username) => {
    const profile = await endpoints.profile(username);

    setViewer(profile.data); setActiveTab("1");

    router.push("/builders/[username]", `/builders/${profile.data.username}`, {
      shallow: true,
    });
  };

  return (
    <div>
      { props.redirect == false && 
        <div>
          <Head>
            <meta name="robots" content="nofollow" />
          </Head>

          <Metatags
            title={
              viewer.first_name + " " + viewer.last_name + " | " + (
                viewer.profile.title ?
                viewer.profile.title :
                "Nessun titolo presente"  
              )
            }

            description={viewer.profile.description.split(" ", 50).join(" ")}

            canonical={"https://buildyourpath.it/builders/" + viewer.username}

            image={viewer.profile.picture ? viewer.profile.picture : null}
          />

          <Header updateViewerByUsername={updateViewerByUsername} />

          <main>
            {props.redirect ? '' : <div className="main-container">
              <section className="bg--secondary space--sm lowPaddingTop">
                <div className="container">
                  <div className="row justify-content-center">
                    <Tabs
                      activeKey={activeTab}
                      onChange={setActiveTab}
                      type="card"
                      style={{ width: 100 + "%" }}
                    >
                      <TabPane tab="Anteprima del profilo" key="1">
                      <div
                        className="boxed boxed--small boxed--border"
                        style={{ borderTopLeftRadius: 0 }}
                      >
                        <div className={"col-lg-4"}>
                          <div
                            className="text-block text-center"
                            style={{ marginBottom: 0, paddingLeft: 20, paddingRight: 20 }}
                          >
                            <Avatar user={viewer} size={"large"} />

                            <span className="h5">
                              {viewer.first_name} {viewer.last_name}
                            </span>

                            <span className={"h7"}>
                              {viewer.profile.title ? viewer.profile.title : "Nessun titolo"}
                            </span>

                            <div className={"mt15 flex"}>
                              <div className={"auto flex"}>
                                {viewer.profile.linkedin && (
                                  <a href={viewer.profile.linkedin} target={"_blank"}>
                                    <img
                                      src={"/icons/linkedin.webp"}
                                      className={"icon clickable"}
                                    />
                                  </a>
                                )}
                                {viewer.profile.github && (
                                  <a href={viewer.profile.github} target={"_blank"}>
                                    <img
                                      src={"/icons/github.webp"}
                                      className={"icon clickable"}
                                    />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-8 bio">
                          <div className="text-block text-center description">
                            <b style={{ fontSize: 17 }}>Su di me</b>

                            <br />

                            {viewer.profile.description
                              ? viewer.profile.description
                              : "Nessuna descrizione disponibile"}
                          </div>
                        </div>
                      </div>
                      </TabPane>

                      {user && viewer.id == user.id && (
                        <TabPane tab="Impostazioni" key="2">
                          <div
                            className="boxed boxed--small boxed--border"
                            style={{ borderTopLeftRadius: 0 }}
                          >
                            <Patch
                              viewer={viewer}
                              setViewer={setViewer}
                              setActiveTab={setActiveTab}
                            />
                          </div>
                        </TabPane>
                      )}
                    </Tabs>

                    {activeTab === "1" && (
                      <div className="col-lg-12">
                        {viewer.posts.length > 0 && (
                          <div className="posts__head">
                            <div className="posts__topic title">Titolo</div>
                            <div className="posts__category">Categoria</div>
                            <div className="posts__users">Utenti</div>
                            <div className="posts__replies">Risposte</div>
                            <div className="posts__views">Visualizzazioni</div>
                          </div>
                        )}

                        {viewer.posts.map((post) => {
                          const index = viewer.posts.indexOf(post);

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
                              changeCategory={null}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>}
          </main>

          <Footer
            username={viewer.username}
            updateViewerByUsername={updateViewerByUsername}
          />
        </div>
      }
    </div>
  );
};

export async function getServerSideProps(request) {
  const profile = await endpoints.profile(request.params.username);
  let redirect = false;

  if (profile.status == 404) 
    redirect = true;

  return {
    props: {
      viewer: redirect ? null : profile.data,
      redirect: redirect
    },
  };
}

export default User;
