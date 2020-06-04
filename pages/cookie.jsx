import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import Metatags from "../components/metatags";

const Cookie = (props) => {
  return (
    <div>
      <Metatags
        title={"Cookie policy"}
        description={
          "Cookie policy di Build Your Path"
        }
        canonical={"https://buildyourpath.it/cookie"}
      />

      <Header hideAlertBar={true} />

      <main>
        <div className={"container"}>
          <div className="create">
            <div id="wbars" style={{}}>
              <div className="iub_content legal_pp">
                <div className="one_line_col">
                  <h1>
                    Cookie Policy di{" "}
                    <strong>Build Your Path - www.buildyourpath.it</strong>
                  </h1>
                  <p>
                    I Cookie o altri Identificatori sono costituiti da porzioni
                    di codice collocate sul dispositivo dell'Utente che
                    assistono il Titolare nell'erogazione del Servizio in base
                    alle finalità descritte.
                  </p>
                  <p>
                    Alcune delle finalità di utilizzo degli Identificatori
                    potrebbero, inoltre, necessitare del consenso dell’Utente.
                    Qualora sia già stato prestato, il consenso può essere
                    revocato liberamente in qualsiasi momento seguendo le
                    istruzioni contenute in questo documento.{" "}
                  </p>
                  <h2 style={{ marginTop: 15 }}>
                    Attività strettamente necessarie a garantire il
                    Funzionamento di questa Applicazione e la fornitura del
                    Servizio
                  </h2>
                  <p>
                    Questa Applicazione usa Cookie o altri Identificatori per
                    svolgere attività che sono strettamente necessarie a
                    garantire il funzionamento o la fornitura del Servizio e,
                    pertanto, non richiedono il consenso degli Utenti. Gli
                    Utenti possono disabilitare tali Identificatori modificando
                    le impostazioni del proprio browser o del proprio
                    dispositivo così come descritto più dettagliatamente nel
                    presente documento tuttavia ciò potrebbe influire
                    negativamente sulle funzioni operative di base o comportare
                    l'indisponibilità del Servizio.
                  </p>
                  <ul className="for_boxes"></ul>
                  <h2 style={{ marginTop: 15 }}>Altre Attività</h2>
                  <h2 style={{ marginTop: 15 }}>Esperienza migliorata</h2>
                  <p>
                    Questa Applicazione usa Cookie o altri Identificatori per
                    fornire una user experience personalizzata migliorando la
                    qualità della gestione delle impostazioni e consentendo
                    l'interazione con network e piattaforme esterne.
                  </p>
                  <ul className="for_boxes">
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2
                          style={{ marginTop: 15 }}
                          className="expand-click w_icon_24 policyicon_purpose_34778"
                        >
                          Commento dei contenuti
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "block" }}
                        >
                          <p>
                            I servizi di commento consentono agli Utenti di
                            formulare e rendere pubblici propri commenti
                            riguardanti il contenuto di questa Applicazione.
                            <br />
                            Gli Utenti, a seconda delle impostazioni decise dal
                            Titolare, possono lasciare il commento anche in
                            forma anonima. Nel caso tra i Dati Personali
                            rilasciati dall’Utente ci sia l’email, questa
                            potrebbe essere utilizzata per inviare notifiche di
                            commenti riguardanti lo stesso contenuto. Gli Utenti
                            sono responsabili del contenuto dei propri commenti.
                            <br />
                            Nel caso in cui sia installato un servizio di
                            commenti fornito da soggetti terzi, è possibile che,
                            anche nel caso in cui gli Utenti non utilizzino il
                            servizio di commento, lo stesso raccolga dati di
                            traffico relativi alle pagine in cui il servizio di
                            commento è installato.
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Sistema di commento gestito in modo diretto (Questa
                            Applicazione)
                          </h2>
                          <div className="wrap">
                            <p>
                              Questa Applicazione dispone di un proprio sistema
                              di commento dei contenuti.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie, Dati di utilizzo,
                            email e username.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2
                          style={{ marginTop: 15 }}
                          className="expand-click w_icon_24 policyicon_purpose_52764"
                        >
                          Interazione con social network e piattaforme esterne
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "block" }}
                        >
                          <p>
                            Questo tipo di servizi permette di effettuare
                            interazioni con i social network, o con altre
                            piattaforme esterne, direttamente dalle pagine di
                            questa Applicazione.
                            <br />
                            Le interazioni e le informazioni acquisite da questa
                            Applicazione sono in ogni caso soggette alle
                            impostazioni privacy dell’Utente relative ad ogni
                            social network.
                            <br />
                            Questo tipo di servizio potrebbe comunque
                            raccogliere dati sul traffico per le pagine dove il
                            servizio è installato, anche quando gli Utenti non
                            lo utilizzano.
                            <br />
                            Si raccomanda di disconnettersi dai rispettivi
                            servizi per assicurarsi che i dati elaborati su
                            questa Applicazione non vengano ricollegati al
                            profilo dell'Utente.
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Pulsante Tweet e widget sociali di Twitter (Twitter)
                          </h2>
                          <div className="wrap">
                            <p>
                              Il pulsante Tweet e i widget sociali di Twitter
                              sono servizi di interazione con il social network
                              Twitter, forniti da Twitter Inc.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie e Dati di utilizzo.
                          </p>
                          <p>
                            Luogo del trattamento: USA –
                            <a
                              href="https://twitter.com/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy
                            </a>
                            .
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Pulsante Mi Piace e widget sociali di Facebook
                            (Facebook, Inc.)
                          </h2>
                          <div className="wrap">
                            <p>
                              Il pulsante “Mi Piace” e i widget sociali di
                              Facebook sono servizi di interazione con il social
                              network Facebook, forniti da Facebook, Inc.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie e Dati di utilizzo.
                          </p>
                          <p>
                            Luogo del trattamento: USA –
                            <a
                              href="https://www.facebook.com/privacy/explanation"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy
                            </a>
                            .
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Pulsante +1 e widget sociali di Google+ (Google
                            Inc.)
                          </h2>
                          <div className="wrap">
                            <p>
                              Il pulsante +1 e i widget sociali di Google+ sono
                              servizi di interazione con il social network
                              Google+, forniti da Google Inc.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie e Dati di utilizzo.
                          </p>
                          <p>
                            Luogo del trattamento: USA –
                            <a
                              href="https://www.google.com/intl/policies/privacy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h2 style={{ marginTop: 15 }}>Misurazione</h2>
                  <p>
                    Questa Applicazione usa Cookie o altri Identificatori per
                    misurare il traffico e analizzare il comportamento degli
                    Utenti con l'obiettivo di migliorare il Servizio.
                  </p>
                  <ul className="for_boxes">
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2
                          style={{ marginTop: 15 }}
                          className="expand-click w_icon_24 policyicon_purpose_0"
                        >
                          Servizi di statistica anonimizzata
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "block" }}
                        >
                          <p>
                            I servizi contenuti nella presente sezione sono
                            servizi di terza parte che permettono al Titolare,
                            tramite l’uso di Cookie o altri Identificatori, di
                            gestire le statistiche in forma anonimizzata. A
                            seconda della legge applicabile, questi servizi
                            potrebbero non richiedere il consenso dell'Utente.
                            In tali casi gli Utenti possono disattivare gli
                            Identificatori modificando le impostazioni del loro
                            browser o dispositivo come descritto più
                            dettagliatamente nel presente documento.
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Google Analytics con IP anonimizzato (Google Inc.)
                          </h2>
                          <div className="wrap">
                            <p>
                              Google Analytics è un servizio di analisi web
                              fornito da Google Inc. (“Google”). Google utilizza
                              i Dati Personali raccolti allo scopo di tracciare
                              ed esaminare l’utilizzo di questa Applicazione,
                              compilare report e condividerli con gli altri
                              servizi sviluppati da Google.
                              <br />
                              Google potrebbe utilizzare i Dati Personali per
                              contestualizzare e personalizzare gli annunci del
                              proprio network pubblicitario.
                              <br />
                              Questa integrazione di Google Analytics rende
                              anonimo il tuo indirizzo IP. L'anonimizzazione
                              funziona abbreviando entro i confini degli stati
                              membri dell'Unione Europea o in altri Paesi
                              aderenti all'accordo sullo Spazio Economico
                              Europeo l'indirizzo IP degli Utenti. Solo in casi
                              eccezionali, l'indirizzo IP sarà inviato ai server
                              di Google ed abbreviato all'interno degli Stati
                              Uniti.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie e Dati di utilizzo.
                          </p>
                          <p>
                            Luogo del trattamento: USA –
                            <a
                              href="https://www.google.com/intl/it/policies/privacy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy
                            </a>{" "}
                            –{" "}
                            <a
                              href="https://tools.google.com/dlpage/gaoptout?hl=it"
                              target="_blank"
                            >
                              Opt Out
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2
                          style={{ marginTop: 15 }}
                          className="expand-click w_icon_24 policyicon_purpose_2619285"
                        >
                          Statistica
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "block" }}
                        >
                          <p>
                            I servizi contenuti nella presente sezione
                            permettono al Titolare del Trattamento di monitorare
                            e analizzare i dati di traffico e servono a tener
                            traccia del comportamento dell’Utente.
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Google Analytics (Google Inc.)
                          </h2>
                          <div className="wrap">
                            <p>
                              Google Analytics è un servizio di analisi web
                              fornito da Google Inc. (“Google”). Google utilizza
                              i Dati Personali raccolti allo scopo di tracciare
                              ed esaminare l’utilizzo di questa Applicazione,
                              compilare report e condividerli con gli altri
                              servizi sviluppati da Google.
                              <br />
                              Google potrebbe utilizzare i Dati Personali per
                              contestualizzare e personalizzare gli annunci del
                              proprio network pubblicitario.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie e Dati di utilizzo.
                          </p>
                          <p>
                            Luogo del trattamento: USA –
                            <a
                              href="https://www.google.com/intl/it/policies/privacy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy
                            </a>{" "}
                            –{" "}
                            <a
                              href="https://tools.google.com/dlpage/gaoptout?hl=it"
                              target="_blank"
                            >
                              Opt Out
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <br />
                  <h2 style={{ marginTop: 15 }}>Targeting e Pubblicità</h2>
                  <p>
                    Questa Applicazione usa Cookie o altri Identificatori per
                    fornire contenuti commerciali personalizzati in base al
                    comportamento dell'Utente e per gestire, fornire e tenere
                    traccia degli annunci pubblicitari.
                  </p>
                  <p>
                    Alcuni dei servizi usati dal Titolare aderiscono al{" "}
                    <a
                      rel="noopener nofollow"
                      target="_blank"
                      href="https://iabeurope.eu/transparency-consent-framework/"
                    >
                      Transparency and Consent Framework di IAB
                    </a>
                    , un’iniziativa che promuove, nel settore della pubblicità
                    digitale, pratiche responsabili in tema di privacy, fornendo
                    agli Utenti maggior trasparenza e controllo sul come i
                    propri dati vengano usati per finalità di tracciamento
                    pubblicitario. Gli Utenti possono, in qualsiasi momento,
                    personalizzare le proprie preferenze relative ai servizi
                    pubblicitari accedendo al pannello delle preferenze
                    pubblicitarie direttamente dall'informativa sui cookie
                    oppure tramite l'apposito link disponibile su questa
                    Applicazione.
                  </p>
                  <p>
                    Questa Applicazione aderisce al Transparency and Consent
                    Framework di IAB e ne rispetta le relative Specifiche e
                    Politiche. Questa Applicazione usa iubenda (numero
                    identificativo 123) come software per la gestione del
                    consenso (“Consent Management Platform”).
                  </p>
                  <ul className="for_boxes">
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2
                          style={{ marginTop: 15 }}
                          className="expand-click w_icon_24 policyicon_purpose_34939"
                        >
                          Pubblicità
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "block" }}
                        >
                          <p>
                            Questo tipo di servizi consentono di utilizzare i
                            Dati dell’Utente per finalità di comunicazione
                            commerciale in diverse forme pubblicitarie, quali il
                            banner, anche in relazione agli interessi
                            dell’Utente.
                            <br />
                            Ciò non significa che tutti i Dati Personali vengano
                            utilizzati per questa finalità. Dati e condizioni di
                            utilizzo sono indicati di seguito.
                            <br />
                            Alcuni dei servizi di seguito indicati potrebbero
                            utilizzare Cookie per identificare l’Utente o
                            utilizzare la tecnica del behavioral retargeting,
                            ossia visualizzare annunci pubblicitari
                            personalizzati in base agli interessi e al
                            comportamento dell’Utente, rilevati anche al di
                            fuori di questa Applicazione. Per avere maggiori
                            informazioni in merito, ti suggeriamo di verificare
                            le informative privacy dei rispettivi servizi.
                          </p>
                          <h2 style={{ marginTop: 15 }}>
                            Google AdSense (Google)
                          </h2>
                          <div className="wrap">
                            <p>
                              Google AdSense è un servizio di advertising
                              fornito da Google Inc. Questo servizio usa il
                              Cookie “Doubleclick”, che traccia l’utilizzo di
                              questa Applicazione ed il comportamento
                              dell’Utente in relazione agli annunci
                              pubblicitari, ai prodotti e ai servizi offerti.
                              <br />
                              L’Utente può decidere in qualsiasi momento di non
                              usare il Cookie Doubleclick provvedendo alla sua
                              disattivazione:{" "}
                              <a
                                href="https://www.google.com/settings/ads/onweb/optout"
                                target="_blank"
                                rel="noopener"
                              >
                                google.com/settings/ads/onweb/optout
                              </a>
                              .
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie e Dati di utilizzo.
                          </p>
                          <p>
                            Luogo del trattamento: USA –
                            <a
                              href="https://www.google.com/policies/technologies/ads/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy Policy
                            </a>{" "}
                            –{" "}
                            <a
                              href="https://www.google.com/settings/ads/onweb/optout"
                              target="_blank"
                              rel="noopener"
                            >
                              Opt Out
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h2 style={{ marginTop: 15 }} id="manage_cookies">
                    Come prestare o revocare il consenso
                  </h2>
                  <p>
                    Gli Utenti possono prestare o revocare il proprio consenso
                    all’uso dei Cookie e altri Identificatori impostando di
                    conseguenza le proprie preferenze all’interno
                    dell’infomativa sui cookie o aggiornando tali preferenze
                    tramite l’apposito widget per le impostazioni di consenso,
                    se disponibile.
                  </p>
                  <p>
                    In aggiunta, gli Utenti possono gestire le proprie
                    preferenze relative agli Identificatori direttamente dalle
                    impostazioni del proprio dispositivo e prevenire - per
                    esempio - l'accettazione di Identificatori di terze parti.
                    Tramite le impostazioni del browser o del dispositivo, è
                    inoltre possibile eliminare gli Identificatori salvati in
                    passato, inclusi quelli usati per memorizzare il consenso
                    iniziale prestato dall’Utente. Gli Utenti possono, trovare
                    informazioni su come gestire gli Identificatori con alcuni
                    dei browser più diffusi, ad esempio, ai seguenti indirizzi:{" "}
                    <a
                      rel="noopener nofollow"
                      target="_blank"
                      href="https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"
                    >
                      Google Chrome
                    </a>
                    ,{" "}
                    <a
                      rel="noopener nofollow"
                      target="_blank"
                      href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    >
                      Mozilla Firefox
                    </a>
                    ,{" "}
                    <a
                      rel="noopener nofollow"
                      target="_blank"
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/"
                    >
                      Apple Safari
                    </a>{" "}
                    e{" "}
                    <a
                      rel="noopener nofollow"
                      target="_blank"
                      href="http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies"
                    >
                      Microsoft Internet Explorer
                    </a>
                    .
                  </p>
                  <p>
                    Con riferimento agli Identificatori impiegati da terze
                    parti, gli Utenti possono gestire le proprie impostazioni e
                    revocare il proprio consenso visitando il relativo link di
                    opt out (qualora disponibile), utilizzando gli strumenti
                    descritti nella privacy policy della terza parte o
                    contattando direttamente la stessa.
                  </p>
                  <p>
                    Fermo restando quanto precede, si informano gli Utenti della
                    possibilità di avvalersi delle informazioni fornite da{" "}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="http://www.youronlinechoices.eu/"
                    >
                      YourOnlineChoices
                    </a>{" "}
                    (EU), the{" "}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://www.networkadvertising.org/understanding-digital-advertising"
                    >
                      Network Advertising Initiative
                    </a>{" "}
                    (USA) and the{" "}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://www.aboutads.info/consumers/"
                    >
                      Digital Advertising Alliance
                    </a>{" "}
                    (USA),{" "}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://youradchoices.ca/understanding-online-advertising/"
                    >
                      DAAC
                    </a>{" "}
                    (Canada),{" "}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="http://www.ddai.info/optout"
                    >
                      DDAI
                    </a>{" "}
                    (Giappone) o altri servizi analoghi. Con questi servizi è
                    possibile gestire le preferenze di tracciamento della
                    maggior parte degli strumenti pubblicitari. Il Titolare,
                    pertanto, consiglia agli Utenti di utilizzare tali risorse
                    in aggiunta alle informazioni fornite dal presente
                    documento.
                  </p>
                  <h2 style={{ marginTop: 15 }} id="owner_of_the_data">
                    Titolare del Trattamento dei Dati
                  </h2>
                  <p>
                    Dario Moceri
                    <br />
                    Via Siena, 19
                    <br />
                    Campobello di Mazara (TP)
                    <br />
                    91021
                    <br />
                    P.IVA 02709360818
                    <br />
                    CF MCRDRA99T06C286Y
                    <br />
                    dario.moceri1@widipec.it
                  </p>

                  <p>
                    Dal momento che l’uso di Cookie e altri Identificatori
                    operato da terze parti tramite i servizi utilizzati
                    all'interno di questa Applicazione non può essere
                    tecnicamente controllato dal Titolare, ogni riferimento
                    specifico ad Identificatori utilizzati da terze parti è da
                    considerarsi indicativo. Per ottenere informazioni complete,
                    l’Utente è invitato a consultare la privacy policy degli
                    eventuali servizi terzi elencati in questo documento.
                  </p>
                  <p>
                    Vista l'oggettiva complessità di identificazione delle
                    tecnologie basate sui Cookie e altri Identificatori, gli
                    Utenti sono invitati a contattare il Titolare qualora
                    volessero ricevere qualunque approfondimento relativo
                    all'utilizzo di tali Identificatori tramite questa
                    Applicazione.
                  </p>
                </div>
                <div className="one_line_col">
                  <div className="box_primary box_10 definitions expand collapsed">
                    <h2
                      style={{ marginTop: 15 }}
                      className="expand-click w_icon_24 icon_ribbon"
                    >
                      Definizioni e riferimenti legali
                    </h2>
                    <div
                      className="expand-content"
                      style={{ display: "block" }}
                    >
                      <h2 style={{ marginTop: 15 }}>Dati Personali (o Dati)</h2>
                      <p>
                        Costituisce dato personale qualunque informazione che,
                        direttamente o indirettamente, anche in collegamento con
                        qualsiasi altra informazione, ivi compreso un numero di
                        identificazione personale, renda identificata o
                        identificabile una persona fisica.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Dati di Utilizzo</h2>
                      <p>
                        Sono le informazioni raccolte automaticamente attraverso
                        questa Applicazione (anche da applicazioni di parti
                        terze integrate in questa Applicazione), tra cui: gli
                        indirizzi IP o i nomi a dominio dei computer utilizzati
                        dall’Utente che si connette con questa Applicazione, gli
                        indirizzi in notazione URI (Uniform Resource
                        Identifier), l’orario della richiesta, il metodo
                        utilizzato nell’inoltrare la richiesta al server, la
                        dimensione del file ottenuto in risposta, il codice
                        numerico indicante lo stato della risposta dal server
                        (buon fine, errore, ecc.) il paese di provenienza, le
                        caratteristiche del browser e del sistema operativo
                        utilizzati dal visitatore, le varie connotazioni
                        temporali della visita (ad esempio il tempo di
                        permanenza su ciascuna pagina) e i dettagli relativi
                        all’itinerario seguito all’interno dell’Applicazione,
                        con particolare riferimento alla sequenza delle pagine
                        consultate, ai parametri relativi al sistema operativo e
                        all’ambiente informatico dell’Utente.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Utente</h2>
                      <p>
                        L'individuo che utilizza questa Applicazione che, salvo
                        ove diversamente specificato, coincide con
                        l'Interessato.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Interessato</h2>
                      <p>
                        La persona fisica cui si riferiscono i Dati Personali.
                      </p>
                      <h2 style={{ marginTop: 15 }}>
                        Responsabile del Trattamento (o Responsabile)
                      </h2>
                      <p>
                        La persona fisica, giuridica, la pubblica
                        amministrazione e qualsiasi altro ente che tratta dati
                        personali per conto del Titolare, secondo quanto esposto
                        nella presente privacy policy.
                      </p>
                      <h2 style={{ marginTop: 15 }}>
                        Titolare del Trattamento (o Titolare)
                      </h2>
                      <p>
                        La persona fisica o giuridica, l'autorità pubblica, il
                        servizio o altro organismo che, singolarmente o insieme
                        ad altri, determina le finalità e i mezzi del
                        trattamento di dati personali e gli strumenti adottati,
                        ivi comprese le misure di sicurezza relative al
                        funzionamento ed alla fruizione di questa Applicazione.
                        Il Titolare del Trattamento, salvo quanto diversamente
                        specificato, è il titolare di questa Applicazione.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Questa Applicazione</h2>
                      <p>
                        Lo strumento hardware o software mediante il quale sono
                        raccolti e trattati i Dati Personali degli Utenti.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Servizio</h2>
                      <p>
                        Il Servizio fornito da questa Applicazione così come
                        definito nei relativi termini (se presenti) su questo
                        sito/applicazione.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Unione Europea (o UE)</h2>
                      <p>
                        Salvo ove diversamente specificato, ogni riferimento
                        all’Unione Europea contenuto in questo documento si
                        intende esteso a tutti gli attuali stati membri
                        dell’Unione Europea e dello Spazio Economico Europeo.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Cookie</h2>
                      <p>
                        I Cookie sono Identificatori che consistono in piccole
                        porzioni di dati conservate all'interno del dispositivo
                        dell'Utente.
                      </p>
                      <h2 style={{ marginTop: 15 }}>Identificatori</h2>
                      <p>
                        Qualsiasi tecnologia - compresi i Cookie - che permette
                        la conservazione di informazioni, o l’accesso ad
                        informazioni già salvate, sul dispositivo dell’Utente.
                      </p>
                      <hr />
                      <h2 style={{ marginTop: 15 }}>Riferimenti legali</h2>
                      <p>
                        La presente informativa privacy è redatta sulla base di
                        molteplici ordinamenti legislativi, inclusi gli artt. 13
                        e 14 del Regolamento (UE) 2016/679.
                      </p>
                      <p>
                        Ove non diversamente specificato, questa informativa
                        privacy riguarda esclusivamente questa Applicazione.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookie;
