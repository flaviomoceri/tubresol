import React, { useState, useEffect } from "react";
import Link from "next/link";

import Registration from "./modals/registration";
import Login from "./modals/login";
import Work from "./modals/work";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../controllers/endpoints";

import classNames from "classnames";

import { useRouter } from "next/router";

import { Tooltip, Drawer } from "antd";

import Pulse from "./pulse";
import Forcer from "./modals/forcer";

const useUserState = createPersistedState("user");

const Header = (props) => {
  const router = useRouter();

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const [user, setUser] = useUserState(null);

  useEffect(() => {
    async function track() {
      if (user)
        await endpoints.log({
          url: router.pathname,
        });
    }

    track();
  }, []);

  const logout = () => router.push("/logout", undefined, { shallow: true });

  return (
    <header>


      <Drawer
        title="Navigazione"
        placement="right"
        closable={true}
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
      >
        <Link href={"/"}>
          <img
            src={"/images/logo.png"}
            className={"logo"}
            style={{ width: "95%", marginBottom: "1em" }}
          />
        </Link>
        {!user ? <>
            <p className={"bypText"}>
              Accedi a contenuti gratuiti e condividi la tua passione per il
              digitale e l'imprenditoria con altre persone come te{" "}
            </p>
            <div
              className={"redButton clickable"}
              onClick={() => {setIsRegistrationVisible(true); setIsDrawerVisible(false);}}
            >
              Diventa un Builder
            </div>
            <div
              className={"redButton outline mt10 clickable"}
              onClick={() => {setIsLoginVisible(true); setIsDrawerVisible(false);}}
            >
              Accedi
            </div></>
         :

             <div >
              {props.updateViewerByUsername ? (
                <Tooltip
                  title={"Vai al tuo profilo"}
                  onClick={() => props.updateViewerByUsername(user.username)}
                >
                  <div className={"redButton clickable"}>
                    Vai al tuo profilo
                  </div>
                </Tooltip>
              ) : (
                <Link
                  href={"/builders/[username]"}
                  as={`/builders/${user.username}`}
                >
                  <Tooltip 
                    title={"Vai al tuo profilo"}
                    onClick={() => setIsDrawerVisible(false)}
                  >
                    <div className={"redButton clickable mt20"} >
                      Vai al tuo profilo
                    </div>
                  </Tooltip>
                </Link>
              )}
              <Tooltip title={"Termina la sessione"}>
                <div
                  className={"redButton outline mt10"}
                  onClick={logout}
                >
                  Esci
                </div>
              </Tooltip>
            </div>


        }

        <div className={"fixedBottom"} onClick={() => setIsDrawerVisible(false)}>
          <Pulse maximumNumberOfAvatars={3} updateViewerByUsername={props.updateViewerByUsername} />
        </div>
      </Drawer>

      <Registration
        visible={isRegistrationVisible}
        setVisible={setIsRegistrationVisible}
      />

      <Login visible={isLoginVisible} setVisible={setIsLoginVisible} />

      <Work visible={isWorkVisible} setVisible={setIsWorkVisible} />

      <div className="header js-header js-dropdown">
        <div className="container">
          <div className="header__logo clickable">
            <Link href={"/"}>
              <img src={"/images/logo.png"} className={"logo"} />
            </Link>
          </div>

          <div
            className={"floatingMenu"}
            onClick={() => setIsDrawerVisible(true)}
          >
            <img src={"/icons/menu.svg"} className={"icon menu"} alt={"menu"} />
          </div>

          <div className="header__user borderRight">
            <Link href={"/crea"}>
              <div
                className={classNames({
                  "header__search-btn padding-left-235": true,
                  active: router.pathname == "/crea",
                })}
                data-dropdown-btn="search"
              >
                Crea un prodotto
                <i className="icon-Arrow_Below" />
              </div>
            </Link>

            <div className="header__search-btn" data-dropdown-btn="search" onClick={() => setIsWorkVisible(true)}>
              Lavora con noi
              <i className="icon-Arrow_Below" />
            </div>
          </div>

          {user ? (
            <div className="header__user">
              {props.updateViewerByUsername ? (
                <Tooltip
                  title={"Vai al tuo profilo"}
                  onClick={() => props.updateViewerByUsername(user.username)}
                >
                  <div className={"builderButton clickable"}>
                    Vai al tuo profilo
                  </div>
                </Tooltip>
              ) : (
                <Link
                  href={"/builders/[username]"}
                  as={`/builders/${user.username}`}
                >
                  <Tooltip title={"Vai al tuo profilo"}>
                    <div className={"builderButton clickable"}>
                      Vai al tuo profilo
                    </div>
                  </Tooltip>
                </Link>
              )}
              <Tooltip title={"Termina la sessione"}>
                <div
                  className={"builderButton blue clickable"}
                  onClick={logout}
                >
                  Esci
                </div>
              </Tooltip>
            </div>
          ) : (
            <div className="header__user">
              <div
                className={"builderButton clickable"}
                style={{
                  paddingLeft: 9,
                  paddingRight: 9,
                }}
                onClick={() => setIsRegistrationVisible(true)}
              >
                Diventa un Builder
              </div>

              <div
                className={"builderButton blue clickable"}
                onClick={() => setIsLoginVisible(true)}
              >
                Accedi
              </div>
            </div>
          )}
        </div>
      </div>

      {!props.hideAlertBar && <div className={"alertBar red mobile"} >
        <Link href={"/crea"}>
          <p>
            {" "}
            Hai una buona idea ma ti mancano le competenze tecniche per
            realizzarla? <b style={{ marginLeft: 3, cursor: "pointer" }}>Scopri di più</b>
          </p>
        </Link>
      </div>}

      <Forcer 
        setIsRegistrationVisible={setIsRegistrationVisible} setIsLoginVisible={setIsLoginVisible} 
        verification={props.verification}
      />
    </header>


  );
};

export default Header;
