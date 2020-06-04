import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Card } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Alert } from 'antd';
import { Divider } from 'antd';




import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
import Metatags from "../components/metatags";

const Flavio = (props) => {
  const { Meta } = Card;
  const [isFlavioVisible1, setIsFlavioVisible1] = useState(false);
  const [isFlavioVisible2, setIsFlavioVisible2] = useState(false);
  const [isFlavioVisible3, setIsFlavioVisible3] = useState(false);


  return (
      <div>

      <Header hideAlertBar={true} />
      <main>
          <div className={'container'}>
               <Row style={{marginTop:30}}>
      <Col span={8}><Card
    hoverable
    className={'flavio'}
    cover={<img alt="example" src={ isFlavioVisible1 ? "https://i.redd.it/alq6o2mxvat21.jpg"  : "https://realrapitaliano.com/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-18-at-14.16.04.jpeg"}/>}
  >
    <Meta title="Instagram photos" description="www.instagram.com" />
    <Button className={'buttonflavio'}type="primary" onClick={() => setIsFlavioVisible1(!isFlavioVisible1)}>Change</Button>
  </Card>
      </Col>

            <Col span={16}>

                {isFlavioVisible1 ?

              <div>
                 <h1 className= {'panetti'}>IL SIGNOR RONALDO </h1>

                  <Divider className={'divider'} style={{marginBottom:10}}>Life</Divider>
            <Card className={'panettitext'}>
    <p>Homyatol, il cui vero nome è Andrea Hakimi, è nato a Roma il 29 Agosto 1993. Fin da piccolo è sempre stato super simpatico e grazie al suo sarcasmo devastante ha sempre fatto ridere amici e conoscenti.

Come la maggior parte dei ragazzi, anche Andrea si appassiona ai videogiochi e verso i 14 anni inizia a nerdare pesantemente. Il 22 Giugno 2010 Homyatol apre il suo canale su Youtube e il 10 Dicembre carica il suo primissimo gameplay (clicca qui per vederlo). Questo era stato registrato con una telecamera puntata sul monitor perché al tempo non aveva ancora una scheda di acquisizione.

Inizialmente pubblica video registrati su Call Of Duty: Modern Warfare 2, una fottuta opera d’arte video ludica. In questi video non punta a far vedere quanto sia forte e skillato ma a sfottere gli altri creators che condividevano gameplay. In particolare prende in giro JustRohn, JackDiPicche e StrategicoCallOfDuty.
   Nel 2011 il canale di Homyatol inizia a ricevere sempre più attenzioni e, grazie alla serie di video intitolati YouPorn, le visualizzazioni e gli iscritti crescono di molto. La sua popolarità aumenta così tanto che Strategico stesso decide di realizzare un video insieme a lui.

Nell’estate dello stesso anno Homy ha un’idea geniale e apre un contest nel quale vince chi grida “Headshot Bitch” nei luoghi più assurdi. Grazie a questa trovata Homy diventa ufficialmente uno dei creators più folli e stravaganti della comunity italiana. </p>
            </Card></div>

                    : <div>
                        <h1 className= {'panetti'}>LA SIGNORA PANETTI </h1>
                           <Divider className={'divider'} style={{marginBottom:10}}>Life</Divider>

            <Card className={'panettitext'}>
    <p>Panetty, il cui vero nome è Simone Panetti, è nato a Roma tra il 1993 il 1995.

Fin da giovanissimo, Simone è sempre stato molto carismatico e in grado di intrattenere grandi gruppi di amici, ma soprattutto ha sempre fatto ridere tutti con le storie che raccontava, incredibili e al limite dell’assurdo.
   Panetty inizia a comparire online nel 2018, all’interno delle live di Homyatol, il quale in quel periodo aveva avviato un nuovo format, diventando il primo italiano a streammare la propria vita anche fuori di casa (clicca qui per vedere il primo episodio).

In queste live stream Homy, Simone Panetti e i loro soci, tra cui anche Luis, girano per le città con una cassa speaker dalla quale i fan, con le donazioni, possono far partire canzoni, audio o frasi scritte da loro.



In queste condizioni si creano situazioni assurde, in cui i ragazzi vengono anche cacciati dai locali, rischiano di essere picchiati da passanti particolarmente disturbati dal casino e, in alcune situazioni, vengono addirittura fermati dalla polizia.

All’interno di tutto sto casino, Panetty è uno dei ragazzi delle live che più fa ridere e che crea sempre situazioni assurde, spesso anche pesantemente ubriaco. E così i fan di Homy iniziano a chiedere sempre più di lui e a spronarlo ad aprire un suo canale personale di live stream. </p>
            </Card></div>}




            </Col>
        </Row>
          </div>

      </main>

      <Footer />
    </div>
  );
};

export default Flavio;
