import React, {useEffect, useState} from "react";
import Notification from "./notification";
import Forcer from "./modals/forcer";
import Pulse from "./pulse";
import Link from "next/link";

const Footer = (props) => (
  <footer>

    <Notification 
      username={props.username} 
      slug={props.slug}
    />

    <Pulse updateViewerByUsername={props.updateViewerByUsername}/>

    <div className="footer js-dropdown">
      <div className="container">
        <div className="footer__logo">
          <div className={"centered"}>
            <img src="/images/logo.png" alt="Build your path" />
          </div>
        </div>

        <div className="footer__nav">
          <div className="footer__bline">
            <ul className="footer__menu">
              <li className="footer__copyright">
                <span>© 2020 | Build Your Path - P.IVA 02709360818</span>
                <span><Link href={'/privacy'}><b className={'clickable dark'}>Privacy policy</b></Link> - <Link href={'/cookie'}><b className={'clickable dark'}>Cookie policy</b></Link></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
