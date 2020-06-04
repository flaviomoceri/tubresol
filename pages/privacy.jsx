import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import Metatags from "../components/metatags";

const Privacy = (props) => {
  return (
    <div>
      <Metatags
        title={"Privacy policy"}
        description={
          "Privacy policy di Build Your Path"
        }
        canonical={"https://buildyourpath.it/privacy"}
      />

      <Header hideAlertBar={true} />

      <main>
        <div className={"container"}>
          <div className="create">
            <div id="wbars" style={{ marginTop: 10 }}>
              <div className="iub_content legal_pp">
                <div className="iub_header">
                  <h1>
                    Privacy Policy di{" "}
                    <strong>Build Your Path - www.buildyourpath.it</strong>
                  </h1>
                  <p>
                    Questa Applicazione raccoglie alcuni Dati Personali dei
                    propri Utenti. <br />
                    Questo documento può essere stampato utilizzando il comando
                    di stampa presente nelle impostazioni di qualsiasi browser.
                  </p>
                </div>
                <div className="one_line_col">
                  <h2 id="owner_of_the_data">
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
                </div>
                <div className="one_line_col">
                  <h2 id="types_of_data">Tipologie di Dati raccolti</h2>
                  <p>
                    Fra i Dati Personali raccolti da questa Applicazione, in
                    modo autonomo o tramite terze parti, ci sono: Cookie; Dati
                    di utilizzo; email; username; sesso; foto;
                    password; professione; nome.
                  </p>
                  <p>
                    Dettagli completi su ciascuna tipologia di dati raccolti
                    sono forniti nelle sezioni dedicate di questa privacy policy
                    o mediante specifici testi informativi visualizzati prima
                    della raccolta dei dati stessi. I Dati Personali possono
                    essere liberamente forniti dall'Utente o, nel caso di Dati
                    di Utilizzo, raccolti automaticamente durante l'uso di
                    questa Applicazione. Se non diversamente specificato, tutti
                    i Dati richiesti da questa Applicazione sono obbligatori. Se
                    l’Utente rifiuta di comunicarli, potrebbe essere impossibile
                    per questa Applicazione fornire il Servizio. Nei casi in cui
                    questa Applicazione indichi alcuni Dati come facoltativi,
                    gli Utenti sono liberi di astenersi dal comunicare tali
                    Dati, senza che ciò abbia alcuna conseguenza sulla
                    disponibilità del Servizio o sulla sua operatività. Gli
                    Utenti che dovessero avere dubbi su quali Dati siano
                    obbligatori, sono incoraggiati a contattare il Titolare.
                    L’eventuale utilizzo di Cookie - o di altri strumenti di
                    tracciamento - da parte di questa Applicazione o dei
                    titolari dei servizi terzi utilizzati da questa
                    Applicazione, ove non diversamente precisato, ha la finalità
                    di fornire il Servizio richiesto dall'Utente, oltre alle
                    ulteriori finalità descritte nel presente documento e nella
                    Cookie Policy, se disponibile.
                  </p>
                  <p>
                    L'Utente si assume la responsabilità dei Dati Personali di
                    terzi ottenuti, pubblicati o condivisi mediante questa
                    Applicazione e garantisce di avere il diritto di comunicarli
                    o diffonderli, liberando il Titolare da qualsiasi
                    responsabilità verso terzi.
                  </p>
                </div>
                <div className="one_line_col">
                  <h2 id="place_of_processing">
                    Modalità e luogo del trattamento dei Dati raccolti
                  </h2>
                  <h2>Modalità di trattamento</h2>
                  <p>
                    Il Titolare adotta le opportune misure di sicurezza volte ad
                    impedire l’accesso, la divulgazione, la modifica o la
                    distruzione non autorizzate dei Dati Personali. Il
                    trattamento viene effettuato mediante strumenti informatici
                    e/o telematici, con modalità organizzative e con logiche
                    strettamente correlate alle finalità indicate. Oltre al
                    Titolare, in alcuni casi, potrebbero avere accesso ai Dati
                    altri soggetti coinvolti nell’organizzazione di questa
                    Applicazione (personale amministrativo, commerciale,
                    marketing, legali, amministratori di sistema) ovvero
                    soggetti esterni (come fornitori di servizi tecnici terzi,
                    corrieri postali, hosting provider, società informatiche,
                    agenzie di comunicazione) nominati anche, se necessario,
                    Responsabili del Trattamento da parte del Titolare. L’elenco
                    aggiornato dei Responsabili potrà sempre essere richiesto al
                    Titolare del Trattamento.
                  </p>
                  <h2>Base giuridica del trattamento</h2>
                  <p>
                    Il Titolare tratta Dati Personali relativi all’Utente in
                    caso sussista una delle seguenti condizioni:
                  </p>
                  <ul>
                    <li>
                      l’Utente ha prestato il consenso per una o più finalità
                      specifiche; Nota: in alcuni ordinamenti il Titolare può
                      essere autorizzato a trattare Dati Personali senza che
                      debba sussistere il consenso dell’Utente o un’altra delle
                      basi giuridiche specificate di seguito, fino a quando
                      l’Utente non si opponga (“opt-out”) a tale trattamento.
                      Ciò non è tuttavia applicabile qualora il trattamento di
                      Dati Personali sia regolato dalla legislazione europea in
                      materia di protezione dei Dati Personali;
                    </li>
                    <li>
                      il trattamento è necessario all'esecuzione di un contratto
                      con l’Utente e/o all'esecuzione di misure precontrattuali;
                    </li>
                    <li>
                      il trattamento è necessario per adempiere un obbligo
                      legale al quale è soggetto il Titolare;
                    </li>
                    <li>
                      il trattamento è necessario per l'esecuzione di un compito
                      di interesse pubblico o per l'esercizio di pubblici poteri
                      di cui è investito il Titolare;
                    </li>
                    <li>
                      il trattamento è necessario per il perseguimento del
                      legittimo interesse del Titolare o di terzi.
                    </li>
                  </ul>
                  <p>
                    È comunque sempre possibile richiedere al Titolare di
                    chiarire la concreta base giuridica di ciascun trattamento
                    ed in particolare di specificare se il trattamento sia
                    basato sulla legge, previsto da un contratto o necessario
                    per concludere un contratto.
                  </p>
                  <h2>Luogo</h2>
                  <p>
                    I Dati sono trattati presso le sedi operative del Titolare
                    ed in ogni altro luogo in cui le parti coinvolte nel
                    trattamento siano localizzate. Per ulteriori informazioni,
                    contatta il Titolare. I Dati Personali dell’Utente
                    potrebbero essere trasferiti in un paese diverso da quello
                    in cui l’Utente si trova. Per ottenere ulteriori
                    informazioni sul luogo del trattamento l’Utente può fare
                    riferimento alla sezione relativa ai dettagli sul
                    trattamento dei Dati Personali.
                  </p>
                  <p>
                    L’Utente ha diritto a ottenere informazioni in merito alla
                    base giuridica del trasferimento di Dati al di fuori
                    dell’Unione Europea o ad un’organizzazione internazionale di
                    diritto internazionale pubblico o costituita da due o più
                    paesi, come ad esempio l’ONU, nonché in merito alle misure
                    di sicurezza adottate dal Titolare per proteggere i Dati.
                    L’Utente può verificare se abbia luogo uno dei trasferimenti
                    appena descritti esaminando la sezione di questo documento
                    relativa ai dettagli sul trattamento di Dati Personali o
                    chiedere informazioni al Titolare contattandolo agli estremi
                    riportati in apertura.
                  </p>
                  <h2>Periodo di conservazione</h2>
                  <p>
                    I Dati sono trattati e conservati per il tempo richiesto
                    dalle finalità per le quali sono stati raccolti.
                  </p>
                  <p>Pertanto:</p>
                  <ul>
                    <li>
                      I Dati Personali raccolti per scopi collegati
                      all’esecuzione di un contratto tra il Titolare e l’Utente
                      saranno trattenuti sino a quando sia completata
                      l’esecuzione di tale contratto.
                    </li>
                    <li>
                      I Dati Personali raccolti per finalità riconducibili
                      all’interesse legittimo del Titolare saranno trattenuti
                      sino al soddisfacimento di tale interesse. L’Utente può
                      ottenere ulteriori informazioni in merito all’interesse
                      legittimo perseguito dal Titolare nelle relative sezioni
                      di questo documento o contattando il Titolare.
                    </li>
                  </ul>
                  <p>
                    Quando il trattamento è basato sul consenso dell’Utente, il
                    Titolare può conservare i Dati Personali più a lungo sino a
                    quando detto consenso non venga revocato. Inoltre, il
                    Titolare potrebbe essere obbligato a conservare i Dati
                    Personali per un periodo più lungo in ottemperanza ad un
                    obbligo di legge o per ordine di un’autorità. Al termine del
                    periodo di conservazione i Dati Personali saranno
                    cancellati. Pertanto, allo spirare di tale termine il
                    diritto di accesso, cancellazione, rettificazione ed il
                    diritto alla portabilità dei Dati non potranno più essere
                    esercitati.
                  </p>
                </div>
                <div className="one_line_col">
                  <h2 id="use_collected_data">
                    Finalità del Trattamento dei Dati raccolti
                  </h2>
                  <p>
                    I Dati dell’Utente sono raccolti per consentire al Titolare
                    di fornire il Servizio, adempiere agli obblighi di legge,
                    rispondere a richieste o azioni esecutive, tutelare i propri
                    diritti ed interessi (o quelli di Utenti o di terze parti),
                    individuare eventuali attività dolose o fraudolente, nonché
                    per le seguenti finalità: Interazione con social network e
                    piattaforme esterne, Commento dei contenuti, Registrazione
                    ed autenticazione, Pubblicità, Contattare l'Utente, Accesso
                    agli account su servizi terzi, Statistica e Visualizzazione
                    di contenuti da piattaforme esterne.
                  </p>
                  <p>
                    Per ottenere informazioni dettagliate sulle finalità del
                    trattamento e sui Dati Personali trattati per ciascuna
                    finalità, l’Utente può fare riferimento alla sezione
                    “Informazioni dettagliate sul trattamento dei Dati
                    Personali”.
                  </p>
                </div>

                <div className="one_line_col">
                  <h2 id="data_processing_detailed_info">
                    Dettagli sul trattamento dei Dati Personali
                  </h2>
                  <p>
                    I Dati Personali sono raccolti per le seguenti finalità ed
                    utilizzando i seguenti servizi:
                  </p>
                  <ul className="for_boxes">
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2 className="expand-click w_icon_24 policyicon_purpose_34778">
                          Commento dei contenuti
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "none" }}
                        >
                          <p>
                            I servizi di commento consentono agli Utenti di
                            formulare e rendere pubblici propri commenti
                            riguardanti il contenuto di questa Applicazione. Gli
                            Utenti, a seconda delle impostazioni decise dal
                            Titolare, possono lasciare il commento anche in
                            forma anonima. Nel caso tra i Dati Personali
                            rilasciati dall’Utente ci sia l’email, questa
                            potrebbe essere utilizzata per inviare notifiche di
                            commenti riguardanti lo stesso contenuto. Gli Utenti
                            sono responsabili del contenuto dei propri commenti.
                            Nel caso in cui sia installato un servizio di
                            commenti fornito da soggetti terzi, è possibile che,
                            anche nel caso in cui gli Utenti non utilizzino il
                            servizio di commento, lo stesso raccolga dati di
                            traffico relativi alle pagine in cui il servizio di
                            commento è installato.
                          </p>
                          <h2>
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
                            Dati Personali trattati: Cookie; Dati di utilizzo;
                            email; username.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2 className="expand-click w_icon_24 policyicon_purpose_399739">
                          Contattare l'Utente
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "none" }}
                        >
                          <h2>Modulo di contatto (Questa Applicazione)</h2>
                          <div className="wrap">
                            <p>
                              L’Utente, compilando con i propri Dati il modulo
                              di contatto, acconsente al loro utilizzo per
                              rispondere alle richieste di informazioni, di
                              preventivo, o di qualunque altra natura indicata
                              dall’intestazione del modulo.
                            </p>
                          </div>
                          <p>Dati Personali trattati: email; nome.</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2 className="expand-click w_icon_24 policyicon_purpose_34938">
                          Registrazione ed autenticazione
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "none" }}
                        >
                          <p>
                            Con la registrazione o l’autenticazione l’Utente
                            consente all’Applicazione di indentificarlo e di
                            dargli accesso a servizi dedicati. A seconda di
                            quanto indicato di seguito, i servizi di
                            registrazione e di autenticazione potrebbero essere
                            forniti con l’ausilio di terze parti. Qualora questo
                            avvenga, questa applicazione potrà accedere ad
                            alcuni Dati conservati dal servizio terzo usato per
                            la registrazione o l’identificazione.
                          </p>
                          <h2>Registrazione diretta (Questa Applicazione)</h2>
                          <div className="wrap">
                            <p>
                              L’Utente si registra compilando il modulo di
                              registrazione e fornendo direttamente a questa
                              Applicazione i propri Dati Personali.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: email;
                            password; professione; foto; nome; cognome;
                            username.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="box_primary box_10 expand collapsed">
                        <h2 className="expand-click w_icon_24 policyicon_purpose_2619285">
                          Statistica
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "none" }}
                        >
                          <p>
                            I servizi contenuti nella presente sezione
                            permettono al Titolare del Trattamento di monitorare
                            e analizzare i dati di traffico e servono a tener
                            traccia del comportamento dell’Utente.
                          </p>
                          <h2>Google Analytics (Google Inc.)</h2>
                          <div className="wrap">
                            <p>
                              Google Analytics è un servizio di analisi web
                              fornito da Google Inc. (“Google”). Google utilizza
                              i Dati Personali raccolti allo scopo di tracciare
                              ed esaminare l’utilizzo di questa Applicazione,
                              compilare report e condividerli con gli altri
                              servizi sviluppati da Google. Google potrebbe
                              utilizzare i Dati Personali per contestualizzare e
                              personalizzare gli annunci del proprio network
                              pubblicitario.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie; Dati di utilizzo.
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
                          <h2>
                            Google Analytics con IP anonimizzato (Google Inc.)
                          </h2>
                          <div className="wrap">
                            <p>
                              Google Analytics è un servizio di analisi web
                              fornito da Google Inc. (“Google”). Google utilizza
                              i Dati Personali raccolti allo scopo di tracciare
                              ed esaminare l’utilizzo di questa Applicazione,
                              compilare report e condividerli con gli altri
                              servizi sviluppati da Google. Google potrebbe
                              utilizzare i Dati Personali per contestualizzare e
                              personalizzare gli annunci del proprio network
                              pubblicitario. Questa integrazione di Google
                              Analytics rende anonimo il tuo indirizzo IP.
                              L'anonimizzazione funziona abbreviando entro i
                              confini degli stati membri dell'Unione Europea o
                              in altri Paesi aderenti all'accordo sullo Spazio
                              Economico Europeo l'indirizzo IP degli Utenti.
                              Solo in casi eccezionali, l'indirizzo IP sarà
                              inviato ai server di Google ed abbreviato
                              all'interno degli Stati Uniti.
                            </p>
                          </div>
                          <p>
                            Dati Personali trattati: Cookie; Dati di utilizzo.
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
                        <h2 className="expand-click w_icon_24 policyicon_purpose_6959657">
                          Visualizzazione di contenuti da piattaforme esterne
                        </h2>
                        <div
                          className="expand-content"
                          style={{ display: "none" }}
                        >
                          <p>
                            Questo tipo di servizi permette di visualizzare
                            contenuti ospitati su piattaforme esterne
                            direttamente dalle pagine di questa Applicazione e
                            di interagire con essi. Questo tipo di servizio
                            potrebbe comunque raccogliere dati sul traffico web
                            relativo alle pagine dove il servizio è installato,
                            anche quando gli utenti non lo utilizzano.
                          </p>
                          <h2>Font Awesome (Fonticons, Inc. )</h2>
                          <div className="wrap">
                            <p>
                              Font Awesome è un servizio di visualizzazione di
                              stili di carattere gestito da Fonticons, Inc. che
                              permette a questa Applicazione di integrare tali
                              contenuti all’interno delle proprie pagine.
                            </p>
                          </div>
                          <p>Dati Personali trattati: Dati di utilizzo.</p>
                          <p>
                            Luogo del trattamento: Stati Uniti –
                            <a
                              href="https://fontawesome.com/privacy"
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
                </div>

                <div className="one_line_col">
                  <h2 id="rights_subjects">Diritti dell’Utente</h2>
                  <p>
                    Gli Utenti possono esercitare determinati diritti con
                    riferimento ai Dati trattati dal Titolare.
                  </p>
                  <p>In particolare, l’Utente ha il diritto di:</p>
                  <ul>
                    <li>
                      <b>revocare il consenso in ogni momento.</b> L’Utente può
                      revocare il consenso al trattamento dei propri Dati
                      Personali precedentemente espresso.
                    </li>
                    <li>
                      <b>opporsi al trattamento dei propri Dati.</b> L’Utente
                      può opporsi al trattamento dei propri Dati quando esso
                      avviene su una base giuridica diversa dal consenso.
                      Ulteriori dettagli sul diritto di opposizione sono
                      indicati nella sezione sottostante.
                    </li>
                    <li>
                      <b>accedere ai propri Dati.</b> L’Utente ha diritto ad
                      ottenere informazioni sui Dati trattati dal Titolare, su
                      determinati aspetti del trattamento ed a ricevere una
                      copia dei Dati trattati.
                    </li>
                    <li>
                      <b>verificare e chiedere la rettificazione.</b> L’Utente
                      può verificare la correttezza dei propri Dati e
                      richiederne l’aggiornamento o la correzione.
                    </li>
                    <li>
                      <b>ottenere la limitazione del trattamento.</b> Quando
                      ricorrono determinate condizioni, l’Utente può richiedere
                      la limitazione del trattamento dei propri Dati. In tal
                      caso il Titolare non tratterà i Dati per alcun altro scopo
                      se non la loro conservazione.
                    </li>
                    <li>
                      <b>
                        ottenere la cancellazione o rimozione dei propri Dati
                        Personali.
                      </b>{" "}
                      Quando ricorrono determinate condizioni, l’Utente può
                      richiedere la cancellazione dei propri Dati da parte del
                      Titolare.
                    </li>
                    <li>
                      <b>
                        ricevere i propri Dati o farli trasferire ad altro
                        titolare.
                      </b>{" "}
                      L’Utente ha diritto di ricevere i propri Dati in formato
                      strutturato, di uso comune e leggibile da dispositivo
                      automatico e, ove tecnicamente fattibile, di ottenerne il
                      trasferimento senza ostacoli ad un altro titolare. Questa
                      disposizione è applicabile quando i Dati sono trattati con
                      strumenti automatizzati ed il trattamento è basato sul
                      consenso dell’Utente, su un contratto di cui l’Utente è
                      parte o su misure contrattuali ad esso connesse.
                    </li>
                    <li>
                      <b>proporre reclamo.</b> L’Utente può proporre un reclamo
                      all’autorità di controllo della protezione dei dati
                      personali competente o agire in sede giudiziale.
                    </li>
                  </ul>
                  <h2>Dettagli sul diritto di opposizione</h2>
                  <p>
                    Quando i Dati Personali sono trattati nell’interesse
                    pubblico, nell’esercizio di pubblici poteri di cui è
                    investito il Titolare oppure per perseguire un interesse
                    legittimo del Titolare, gli Utenti hanno diritto ad opporsi
                    al trattamento per motivi connessi alla loro situazione
                    particolare.
                  </p>
                  <p>
                    Si fa presente agli Utenti che, ove i loro Dati fossero
                    trattati con finalità di marketing diretto, possono opporsi
                    al trattamento senza fornire alcuna motivazione. Per
                    scoprire se il Titolare tratti dati con finalità di
                    marketing diretto gli Utenti possono fare riferimento alle
                    rispettive sezioni di questo documento.
                  </p>
                  <h2>Come esercitare i diritti</h2>
                  <p>
                    Per esercitare i diritti dell’Utente, gli Utenti possono
                    indirizzare una richiesta agli estremi di contatto del
                    Titolare indicati in questo documento. Le richieste sono
                    depositate a titolo gratuito e evase dal Titolare nel più
                    breve tempo possibile, in ogni caso entro un mese.
                  </p>
                </div>
                <div className="one_line_col">
                  <h2 id="cookie_policy">Cookie Policy</h2>
                  <p>
                    Questa Applicazione fa utilizzo di Cookie e altri
                    Identificatori. Per saperne di più, l’Utente può consultare
                    la{" "}
                    <Link href={"/cookie"}>

                      <a
                        href="/cookie"
                        title="Cookie Policy"
                        className="show_comp_link iframe-preserve an-preserve"
                      >
                        Cookie Policy
                      </a>
                    </Link>.

                  </p>
                </div>
                <div className="one_line_col">
                  <h2 id="further_data_processing_info">
                    Ulteriori informazioni sul trattamento
                  </h2>
                  <h2>Difesa in giudizio</h2>
                  <p>
                    I Dati Personali dell’Utente possono essere utilizzati da
                    parte del Titolare in giudizio o nelle fasi preparatorie
                    alla sua eventuale instaurazione per la difesa da abusi
                    nell'utilizzo di questa Applicazione o dei Servizi connessi
                    da parte dell’Utente. L’Utente dichiara di essere
                    consapevole che il Titolare potrebbe essere obbligato a
                    rivelare i Dati per ordine delle autorità pubbliche.
                  </p>
                  <h2>Informative specifiche</h2>
                  <p>
                    Su richiesta dell’Utente, in aggiunta alle informazioni
                    contenute in questa privacy policy, questa Applicazione
                    potrebbe fornire all'Utente delle informative aggiuntive e
                    contestuali riguardanti Servizi specifici, o la raccolta ed
                    il trattamento di Dati Personali.
                  </p>
                  <h2>Log di sistema e manutenzione</h2>
                  <p>
                    Per necessità legate al funzionamento ed alla manutenzione,
                    questa Applicazione e gli eventuali servizi terzi da essa
                    utilizzati potrebbero raccogliere log di sistema, ossia file
                    che registrano le interazioni e che possono contenere anche
                    Dati Personali, quali l’indirizzo IP Utente.
                  </p>
                  <h2>Informazioni non contenute in questa policy</h2>
                  <p>
                    Ulteriori informazioni in relazione al trattamento dei Dati
                    Personali potranno essere richieste in qualsiasi momento al
                    Titolare del Trattamento utilizzando gli estremi di
                    contatto.
                  </p>
                  <h2>Risposta alle richieste “Do Not Track”</h2>
                  <p>
                    Questa Applicazione non supporta le richieste “Do Not
                    Track”. Per scoprire se gli eventuali servizi di terze parti
                    utilizzati le supportino, l'Utente è invitato a consultare
                    le rispettive privacy policy.
                  </p>
                  <h2>Modifiche a questa privacy policy</h2>
                  <p>
                    Il Titolare del Trattamento si riserva il diritto di
                    apportare modifiche alla presente privacy policy in
                    qualunque momento notificandolo agli Utenti su questa pagina
                    e, se possibile, su questa Applicazione nonché, qualora
                    tecnicamente e legalmente fattibile, inviando una notifica
                    agli Utenti attraverso uno degli estremi di contatto di cui
                    è in possesso. Si prega dunque di consultare con frequenza
                    questa pagina, facendo riferimento alla data di ultima
                    modifica indicata in fondo.Qualora le modifiche interessino
                    trattamenti la cui base giuridica è il consenso, il Titolare
                    provvederà a raccogliere nuovamente il consenso dell’Utente,
                    se necessario.
                  </p>
                </div>
                <div className="one_line_col">
                  <div className="box_primary box_10 definitions expand collapsed">
                    <h2
                      id="definitions_and_legal_references"
                      className="expand-click w_icon_24 icon_ribbon"
                    >
                      Definizioni e riferimenti legali
                    </h2>
                    <div className="expand-content" style={{ display: "block" }}>
                      <h2>Dati Personali (o Dati)</h2>
                      <p>
                        Costituisce dato personale qualunque informazione che,
                        direttamente o indirettamente, anche in collegamento con
                        qualsiasi altra informazione, ivi compreso un numero di
                        identificazione personale, renda identificata o
                        identificabile una persona fisica.
                      </p>
                      <h2>Dati di Utilizzo</h2>
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
                      <h2>Utente</h2>
                      <p>
                        L'individuo che utilizza questa Applicazione che, salvo
                        ove diversamente specificato, coincide con
                        l'Interessato.
                      </p>
                      <h2>Interessato</h2>
                      <p>
                        La persona fisica cui si riferiscono i Dati Personali.
                      </p>
                      <h2>Responsabile del Trattamento (o Responsabile)</h2>
                      <p>
                        La persona fisica, giuridica, la pubblica
                        amministrazione e qualsiasi altro ente che tratta dati
                        personali per conto del Titolare, secondo quanto esposto
                        nella presente privacy policy.
                      </p>
                      <h2>Titolare del Trattamento (o Titolare)</h2>
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
                      <h2>Questa Applicazione</h2>
                      <p>
                        Lo strumento hardware o software mediante il quale sono
                        raccolti e trattati i Dati Personali degli Utenti.
                      </p>
                      <h2>Servizio</h2>
                      <p>
                        Il Servizio fornito da questa Applicazione così come
                        definito nei relativi termini (se presenti) su questo
                        sito/applicazione.
                      </p>
                      <h2>Unione Europea (o UE)</h2>
                      <p>
                        Salvo ove diversamente specificato, ogni riferimento
                        all’Unione Europea contenuto in questo documento si
                        intende esteso a tutti gli attuali stati membri
                        dell’Unione Europea e dello Spazio Economico Europeo.
                      </p>
                      <h2>Cookie</h2>
                      <p>
                        Piccola porzione di dati conservata all'interno del
                        dispositivo dell'Utente.
                      </p>
                      <hr />
                      <h2>Riferimenti legali</h2>
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

export default Privacy;
