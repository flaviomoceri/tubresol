import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { Alert } from "antd";
import { Form, Input, Checkbox } from "antd";

import { useRouter, Router } from "next/router";

import * as endpoints from "../../controllers/endpoints";

import {
  LockOutlined,
} from "@ant-design/icons";

const Password = (props) => {
  const router = useRouter();

  const [visible, setVisible] = useState(props.visible);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const password = async (values) => {
    setLoading(true);

    const request = await endpoints.reset(props.id, props.token, values);

    setLoading(false);

    setResult(request.status == 200 ? "success" : "error");
  };

  return (
    <div>
      <Modal
        title="Reimposta la tua password"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        {loading ? (
          <div className={"center mb--30"}>
            <Spin size="large" />
          </div>
        ) : (
          <Form name="normal_password" className="login-form" onFinish={password}>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Inserisci la nuova password" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Inserisci la tua password"
              />
            </Form.Item>

            <Form.Item
              name="confirmation"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Conferma la nuova password inserita",
                },
                
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) 
                      return Promise.resolve();

                    return Promise.reject("Le due password non corrispondono");
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Conferma la nuova password inserita"
              />
            </Form.Item>

            <Form.Item>
              <button
                className="redButton clickable mb--10"
                type="primary"
              >
                Cambia la tua password
              </button>
            </Form.Item>

            { result &&
                <div>
                  <br/>

                  <Alert
                    message={
                      result == "success" ?
                      "Reimpostazione della password avvenuta con successo!" :
                      "Qualcosa é andato storto durante la procedura di cambio password."
                    }

                    description={
                      result == "success" ?
                      "La tua richiesta di cambio password è stata elaborato e finalizzata, ora puoi eseguire il login utilizzando le nuove credenziali inserite." :
                      "Nessuna richiesta di cambio password effettuata per questo utente."
                    }

                    type={result}

                    style={{
                      cursor: "pointer"
                    }}

                    onClick={() => {
                      setResult(null);
                      setVisible(false);
                    }}

                    showIcon
                  />
                </div>
              } 
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Password;