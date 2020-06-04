import React, { useState, useEffect } from "react";
import { Alert, Checkbox, Form, Input, Modal, Spin } from "antd";

import Link from "next/link";

import createPersistedState from "use-persisted-state";

const useUserState = createPersistedState("user");

const Forcer = (props) => {
  const [user, setUser] = useUserState(null);
  const [isForcerVisible, setIsForcerVisible] = useState(false);

  useEffect(function () {
    let views = window.localStorage.getItem("views");

    if (user == null) {
      views++;

      if (views > 5)
        setIsForcerVisible(true);
    } 
    else views = 0;

    window.localStorage.setItem("views", views);
  }, []);

  return (
    <Modal
      title={"Ottieni l'accesso illimitato"}
      visible={isForcerVisible && user == false && props.verification == null}
      footer={null}
      closable={false}
    >
      <img
        src={"/images/logo.png"}
        className={"logo"}
        style={{ width: "95%", marginBottom: "1em" }}
      />

      <p className={"justify mb10"}>
        Sembra che tu stia leggendo molto, e questo ci rende molto felici.
        Speriamo che tu possa aver imparato qualcosa anche oggi e che i
        contenuti della nostra community ti siano utili. Ci piacerebbe che tu
        possa farne parte.
      </p>

      <div
        className={"redButton clickable"}
        onClick={() => {
          props.setIsRegistrationVisible(true);
        }}
      >
        Diventa un Builder
      </div>

      <div
        className={"redButton outline mt10 clickable"}
        onClick={() => {
          props.setIsLoginVisible(true);
        }}
      >
        Accedi
      </div>
    </Modal>
  );
};

export default Forcer;
