import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Dante from "Dante2";
import ColorHash from "color-hash";

import Header from "../../components/header";
import Avatar from "../../components/avatar";
import Comment from "../../components/comment";
import Footer from "../../components/footer";

import Login from "../../components/modals/login";

import createPersistedState from "use-persisted-state";

import { Comment as Container } from "antd";

import validator from "validator";

import { Modal, Breadcrumb, Tooltip, PageHeader, Divider, Alert } from "antd";

import { useRouter, Router } from "next/router";

import { DOMAIN } from "../../controllers/middleware";

import * as endpoints from "../../controllers/endpoints";

import Metatags from "../../components/metatags";

const hash = new ColorHash();

const useUserState = createPersistedState("user");

const Post = (props) => {
  const router = useRouter();

  const [post, setPost] = useState(props.post);

  const [user, setUser] = useUserState(null);

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isEditorVisible, setIsEditorVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [content, setContent] = useState(null);

  const [newContent, setNewContent] = useState(
    post ? 
    (validator.isJSON(post.content) ? JSON.parse(post.content) : post.content) :
    new String()
  );

  const [comments, setComments] = useState(post ? post.comments : null);

  useEffect(function () {
    if (props.redirect) router.push("/errore");
  }, []);

  const publish = async () => {
    const request = await endpoints.create_comment(post.id, {
      content: JSON.stringify(content),
    });

    setComments([...comments, request.data]);

    setContent(null);

    setIsEditorVisible(false); setIsEditorVisible(true);
  };

  const remove = async () => {
    const request = await endpoints.remove_post(post.id);

    if (request.status == 204) router.push("/");
  };

  const update = async () => {
    const request = await endpoints.update_post(post.id, {
      content: JSON.stringify(newContent),
    });

    setIsEditing(false);
  };

  return (
    <div>
      {props.redirect == false &&
        <div>
          <Head>
            <meta name="robots" content="nofollow" />
          </Head>

          <Metatags
            title={post.title}

            description={
             post.raw.substring(0, 160) + ['...']
            }

            canonical={"https://buildyourpath.it/posts/" + post.slug}
          />

          <Header />

          <Login visible={isLoginVisible} setVisible={setIsLoginVisible} />

          <main className={""}>
              <div className="container">
                <div className="topics">
                  <div className={"row"}>
                  {post.moderate == false && (
                    <div>
                      <br />

                      <Alert
                        message="Questo post è in attesa di approvazione, attendi qualche minuto!"
                        description="Noi di Build-Your-Path teniamo molto ai contenuti pubblicati sulla nostra piattaforma, e per questo controlliamo manualmente ogni Post prima di renderlo pubblico. Per il momento questo contenuto è visibile solo sul profilo dell'autore."
                        type="warning"
                        showIcon
                      />

                      <br />
                    </div>
                  )}

                    <div className="topics__heading fluid">
                      <div className={"boxed boxed--border fluid"}>
                        <Breadcrumb className={"margin-bottom-10"}>
                          <Breadcrumb.Item>
                            <Link href={"/"}>
                              <a>Home</a>
                            </Link>
                          </Breadcrumb.Item>

                          <Breadcrumb.Item>
                            <Link href={"/?categoria=" + post.category.title}>
                              <a>{post.category.title}</a>
                            </Link>
                          </Breadcrumb.Item>

                          <Breadcrumb.Item className={"desktop"}>
                            <Link href={"/posts/[slug]"} as={`/posts/${post.slug}`}>
                              <a href={`/posts/${post.slug}`}>{post.title}</a>
                            </Link>
                          </Breadcrumb.Item>
                        </Breadcrumb>

                        <h2 className="topics__heading-title">{post.title}</h2>

                        <div className="topics__heading-info mt10">
                          <Link
                            href={"/builders/[username]"}
                            as={`/builders/${post.author.username}`}
                          >
                            <a className="category">
                              <Avatar user={post.author} />
                              <span style={{ marginLeft: 10 }}>
                                {post.author.first_name} {post.author.last_name}
                              </span>
                            </a>
                          </Link>
                          <Link href={"/?categoria=" + post.category.title}>
                            <a className="category">
                              <i className="bg-3ebafa" />
                              {post.category.title}
                            </a>
                          </Link>

                          <div className="tags">
                            {post.tags.map((tag) => {
                              const name = tag.tag;

                              return (
                                <a
                                  key={name}
                                  style={{
                                    backgroundColor: hash.hex(name),
                                  }}
                                >
                                  {name}
                                </a>
                              );
                            })}
                          </div>
                        </div>

                        <div className="mt20">
                          {typeof window !== "undefined" &&
                          validator.isJSON(post.content) ? (
                            <Dante
                              read_only={isEditing == false}
                              content={newContent}
                              onChange={(editor) => {
                                const output = editor.emitSerializedOutput();
                                setNewContent(output);
                              }}
                            />
                          ) : (
                            post.raw
                          )}
                        </div>

                        {user &&
                          post.author.id == user.id &&
                          (isEditing == false ? (
                            <div>
                              <span
                                className="builderButton clickable"
                                style={{ marginRight: 10 }}
                                onClick={() => setIsEditing(true)}
                              >
                                Modifica
                              </span>

                              <span
                                className="builderButton blue clickable hoverEffect"
                                onClick={remove}
                              >
                                Elimina
                              </span>
                            </div>
                          ) : (
                            <div>
                              <span
                                className="builderButton clickable"
                                onClick={update}
                                style={{ marginRight: 10 }}
                              >
                                Aggiorna
                              </span>

                              <span
                                className="builderButton blue clickable hoverEffect"
                                onClick={() => setIsEditing(false)}
                              >
                                Annulla
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <PageHeader
                      className="site-page-header"
                      title="Commenti"
                      subTitle="Sii rispettoso e costruttivo"
                      style={{ paddingBottom: 30 }}
                    />

                    {comments.map((comment) => (
                      <Comment key={comment.id} comment={comment} setIsLoginVisible={setIsLoginVisible}/>
                    ))}

                    {user && (
                      <Container
                        className={"boxed boxed--border"}
                        actions={[
                          <span
                            className="builderButton blue clickable hoverEffect"
                            onClick={() => publish()}
                          >
                            Pubblica questo commento
                          </span>,
                        ]}
                        author={
                          <Link
                            href={"/builders/[username]"}
                            as={`/builders/${user.username}`}
                          >
                            <a>
                              {user.first_name} {user.last_name}
                            </a>
                          </Link>
                        }
                        avatar={<Avatar user={user} />}
                        content={
                          typeof window !== "undefined" &&
                          isEditorVisible && (
                            <Dante
                              body_placeholder={"Scrivi qui il tuo commento..."}
                              content={content}
                              onChange={(editor) => {
                                const output = editor.emitSerializedOutput();
                                setContent(output);
                              }}
                            />
                          )
                        }
                        datetime={<span>Adesso</span>}
                      />
                    )}
                  </div>

                  {user == null && (
                    <div>
                      <div className={"center fluid"}>
                        <a
                          onClick={() => setIsLoginVisible(true)}
                          className={"clickable red"}
                        >
                          Accedi per commentare
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            <Footer slug={post.slug} />
          </main>
        </div>
      }
    </div>
  );
};

export async function getServerSideProps(request) {
  const post = await endpoints.post(request.params.slug);
  let redirect = false;

  if(post.status == 404)
    redirect = true;

  return {
    props: {
      post: redirect ? null : post.data,
      redirect: redirect,
    },
  };
}

export default Post;
