import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Build from "../components/modals/build";

import * as endpoints from "../controllers/endpoints";

import createPersistedState from "use-persisted-state";

import { useRouter } from "next/router";
import Metatags from "../components/metatags";

const useUserState = createPersistedState("user");

const Create = (props) => {
  const router = useRouter();

  const [user, setUser] = useUserState(null);
  const [isBuildVisible, setIsBuildVisible] = useState(false);

  return (
    <div>
      <Metatags
        title={"Build Your Path - Crea un prodotto"}
        description={
          "Un modello alternativo di collaborazione nel quale investiamo nei progetti in cui crediamo facendoci carico dell'intero processo di sviluppo"
        }
        canonical={"https://buildyourpath.it/crea"}
      />
      <Header hideAlertBar={true} />

      <Build
        isBuildVisible={isBuildVisible}
        setIsBuildVisible={setIsBuildVisible}
      />

      <main>
        <section
          className="cover height-60 imagebg switchable siwtchable--switch"
          data-overlay={9}
        >
          <div
            className="background-image-holder"
            style={{ background: 'url("/images/landscape.jpg")', opacity: 1 }}
          >
            <img alt="background" src="/images/landscape.jpg" />
          </div>

          <div className="container pos-vertical-center">
            <div className="row justify-content-around">
              <div className="col-lg-6 col-md-4 col-12">
                <iframe
                  src="https://www.youtube.com/embed/6_jll1zjPHE"
                  frameBorder="0"
                  className={"video-cover border--round box-shadow-wide"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-lg-6 col-md-7">
                <div className="switchable__text">
                  <h4 className={"margin-bottom-10"}>
                    Tutto il supporto tecnico di cui hanno bisogno le tue idee
                  </h4>

                  <p className="lead">
                    Un modello alternativo di collaborazione nel quale
                    investiamo nei progetti in cui crediamo facendoci carico
                    dell'intero processo di sviluppo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="text-block">
                  <h4>Domande chieste di frequente</h4>
                </div>
              </div>

              <div className="col-lg-4 mb20">
                <div className="text-block">
                  <h5>A chi ci rivolgiamo?</h5>

                  <p>
                    A studenti, professionisti e imprenditori con una chiara
                    idea in mente in ambito tecnologico
                  </p>

                  <p>
                    Il nostro candidato ideale vuole creare un prodotto digitale
                    cui costi di sviluppo inferiori ai 100.000€
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mb20">
                <div className="text-block">
                  <h5>Ci sono delle limitazioni?</h5>

                  <p>
                    Non possiamo in alcun modo collaborare con progetti che
                    hanno come scopo l'emissione di un qualsiasi tipo di
                    criptovaluta o cui fine è il permettere lo la vendita,
                    l'acquista o la conservazione di questa tipologia di
                    strumenti
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="text-block">
                  <h5>Come funziona?</h5>

                  <p>
                    Avrai modo di confrontarti con Dario Moceri e alcuni ospiti
                    sulla tua idea tramite una videoconferenza dalla durata di
                    30 minuti, che sarà registrata e poi condivisa su YouTube,
                    LinkedIn ed altri canali
                  </p>

                  <p>
                    Se la tua è una buona idea stringeremo un accordo per
                    permetterti di realizzarla potendo contare su un team di
                    sviluppo che ha a cuore il tuo progetto
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="text-block">
                  <h5>Come faccio a non farmi rubare l'idea?</h5>

                  <p>
                    Crediamo che sia fondamentale discutere il più possibile di
                    un progetto prima di lanciarlo e che nella maggior parte dei
                    casi non ci sia nulla di cui preoccuparsi
                  </p>
                  <p>
                    Se credi di poter avere un vantaggio competitivo non
                    rivelando in anticipo la tua intuizione, faremo in modo di
                    valutarla nel rispetto della tua scelta e senza divulgare
                    alcuna informazione sensibile
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="text-block">
                  <h5>Come devo prepararmi?</h5>
                  <p>
                    Ai fini di facilitare l'incontro è consigliata la redazione
                    di una presentazione da mostrare durante la tua esposizione.
                    Tutti gli altri dettagli ti saranno comunicati via email.
                  </p>
                </div>
              </div>

              <div className={"center"}>
                <div
                  className={"redButton clickable"}
                  onClick={() => setIsBuildVisible(true)}
                >
                  Proponi la tua idea
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Create;
