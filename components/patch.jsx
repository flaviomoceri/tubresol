import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";

import Avatar from "./avatar";

import FormData from "form-data";

import { Form, Input, Alert, Upload, Spin } from "antd";

import classNames from "classnames";

import Head from "next/head";

import * as endpoints from "../controllers/endpoints";

import createPersistedState from "use-persisted-state";

import {
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import TextArea from "antd/lib/input/TextArea";
import { DOMAIN } from "../controllers/middleware";

const useUserState = createPersistedState("user");

const Patch = (props) => {
  const { 
    viewer, setViewer, 
    setActiveTab 
  } = props;

  const router = useRouter();
  
  const [user, setUser] = useUserState(null);
  const [base64Preview, setBase64Preview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const patch = async (values) => {
    const request = await endpoints.patch(values);

    if (request.status == 202) {
      setUser(request.data);
      setViewer(request.data);
      setActiveTab("1");
    }

    if (request.status == 400) {
      const error = request.data;

      let message = new String();

      if ("title" in error)
        message = `Il titolo non può superare i 50 caratteri di lunghezza`;

      if ("description" in error)
        message = `La descrizione non può superare i 2500 caratteri di lunghezza`;

      if ("github" in error)
        message = `Il link dell'account Github non corrisponde a un profilo valido`;

      if ("linkedin" in error)
        message = `Il link dell'account Linkedin non corrisponde a un profilo valido`;

      if ("telephone" in error)
        message = `Il formato del numero di telefono non è corretto`;

      setError(message);
    }
  };

  const getBase64 = (image, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(image);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) 
      setError("Sembra che tu stia cercando di caricare un tipo di foto non supportato.");

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) 
      setError("Questa immagine è troppo pesante! Per favore assicurati che la dimensione totale non superi i 2MB.");

    return isJpgOrPng && isLt2M;
  };


  const handlePictureChange = async (info) => {
    if (info.file.status === "uploading") 
      setIsLoading(true);

    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, async (image) => {
        setIsLoading(false); setBase64Preview(image);

        const data = new FormData();

        data.append("picture", info.file.originFileObj);
        
        const request = await endpoints.patch(data);

        if (request.status == 202) { 
          setUser(request.data);
          setViewer(request.data);
        }
      });
    } 
  };

  return (
    <Form className="login-form" onFinish={patch}>
      {error && (
        <div>
          <Form.Item>
            <Alert
              message="Qualcosa è andato storto"
              description={error ? error : null}
              type="error"
              onClick={() => setError(null)}
              style={{ cursor: "pointer" }}
              showIcon
            />
          </Form.Item>

          <br />
        </div>
      )}

      <div className={"col-lg-12"}>
        <div className={"col-lg-10"}>
          <Form.Item name="title" initialValue={user.profile.title}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Il tuo ruolo preferito (ad esempio Sviluppatore Python presso Build Your Path)"
            />
          </Form.Item>

          <Form.Item name="description" initialValue={user.profile.description}>
            <TextArea
              placeholder="Una breve presentazione per permettere al tuo prossimo cliente, investitore o datore di lavoro di farsi subito un'idea su di te"
              style={{
                height: 120 + "px",
                width: "100%",
                padding: 10,
                paddingLeft: 13,
                paddingRight: 13,
                fontSize: 14,
              }}
            />
          </Form.Item>
        </div>
        <div className={"col-lg-2"}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handlePictureChange}
          >
            {isLoading ? (
              <Spin />
            ) : base64Preview ? (
              <div className="avatar fluid">
                <img
                  src={base64Preview}
                  className="avatarImg"
                  style={{ width: 150, height: 150 }}
                />
              </div>
            ) : (
              <Avatar user={user} fluid={true} />
            )}
          </Upload>
        </div>
      </div>

      <div className={"col-lg-12"}>
        <hr />

        <Form.Item name="telephone" initialValue={user.profile.telephone}>
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Il tuo numero di telefono (Es. +39 123 456 7890)"
          />
        </Form.Item>

        <Form.Item name="github" initialValue={user.profile.github}>
          <Input
            prefix={<GithubOutlined className="site-form-item-icon" />}
            placeholder="Il link del tuo account di Github"
          />
        </Form.Item>

        <Form.Item
          name="linkedin"
          initialValue={user.profile.linkedin}
          style={{ marginBottom: 0 }}
        >
          <Input
            prefix={<LinkedinOutlined className="site-form-item-icon" />}
            placeholder="Il link del tuo account di Linkedin"
          />
        </Form.Item>

        <br />

        <Form.Item style={{ marginBottom: 0 }}>
          <button className="redButton clickable width" type="primary">
            Aggiorna il tuo profilo
          </button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Patch;
