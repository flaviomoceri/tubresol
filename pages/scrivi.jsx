import React, { useState, useEffect } from "react";
import Dante from "Dante2";
import Link from "next/link";

import Head from "next/head";

import classNames from "classnames";

import Header from "../components/header";
import Footer from "../components/footer";
import Post from "../components/post";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../controllers/endpoints";

import { Tooltip, Alert } from "antd";

import { useRouter } from "next/router";
import Metatags from "../components/metatags";

const useUserState = createPersistedState("user");

const Write = (props) => {
  const router = useRouter();

  const [user, setUser] = useUserState(null);

  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [category, setCategory] = useState(props.categories[0].title);
  const [tags, setTags] = useState(null);

  const [error, setError] = useState(null);

  useEffect(function() {
    if(user == null)
        router.push("/");
  }, []);

  const create = async () => {
    const body = {
      title: title,
      content: JSON.stringify(content),
      category: category,
      tags: tags ? tags.toLowerCase().split(",") : null
    };

    const request = await endpoints.create_post(body);

    if(request.status == 201) {
      const post = request.data;
      router.push("/posts/" + post.slug);
    }

    if (request.status === 400) {
      const error = request.data;

      let message = new String();

      if("title" in error) message = `Il titolo del Post non può essere vuoto e non può superare i 255 caratteri`;
      if("content" in error) message = `Il contenuto del Post non può essere vuoto e non può superare i 5000 caratteri`;
      if("category" in error) message = `Deve essere selezionata una categoria di appartenenza`;
      if("tags" in error) message = `Il formato dei tags non è correto, riprovare`;
  
      setError(message);
    } 
  };

  return (
    <div>
      <Metatags
        title={"Build Your Path - Crea un nuovo post"}
        description={
          "Hai qualcosa da raccontare? Non vediamo l'ora di leggere la tua storia"
        }
        canonical={"https://buildyourpath.it/scrivi"}
      />

      <Header/>

      <main>
      <div className={"container"}>
          <div className="create">
            <div className="create__head">
              <div className="create__title">
                <img src="fonts/icons/main/topic.svg" alt="New topic" />
                Crea un nuovo post
              </div>

              <span>Dai il meglio di te</span>
            </div>

            <div className="row noMargin">
              <div className={"col-md-12"}>
                <div className="create__section create__textarea">
                  {typeof window !== "undefined" && (
                    <Dante
                      body_placeholder={"Scrivi qui la tua storia..."}
                      content={content}
                      onChange={editor => {
                        const output = editor.emitSerializedOutput();
                        setContent(output);
                      }}
                    />
                  )}
                </div>
              </div>

              <div className={"col-md-12"}>
                <div className="create__section">
                  <label className="create__label" htmlFor="title">
                    Titolo del post
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Ho avuto un'idea per..."
                    onChange={event => setTitle(event.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="create__section">
                  <label className="create__label" htmlFor="category">
                    Categoria
                  </label>

                  <label className="custom-select">
                    <select 
                      id="category"
                      onChange={event => setCategory(event.target.value)}
                    >
                      {props.categories.map(category => (
                        <option 
                          key={category.title}
                          value={category.title}
                        >
                            {category.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="create__section">
                  <label className="create__label" htmlFor="tags">
                    Tags
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="tags"
                    placeholder="Es. blockchain, covid"
                    onChange={event => setTags(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="create__footer">
              <a
                className="create__btn-create btn btn--type-02 redButton"
                style={{color: 'white', border:'0px'}}
                onClick={() => create(null)}
              >
                Pubblica il post
              </a>
            </div>

            {error && (
              <div>
                <br/>

                <Alert
                  message="Qualcosa è andato storto"
                  description={error}
                  type="error"
                  onClick={() => setError(null)}
                  style={{cursor: "pointer"}}
                  showIcon
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const categories = await endpoints.categories();
  const tags = await endpoints.tags();

  return {
    props: {
      categories: categories.data,
      tags: tags.data,
    },
  };
}

export default Write;