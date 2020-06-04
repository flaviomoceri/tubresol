import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { Alert } from "antd";
import { Form, Input, Checkbox } from "antd";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../../controllers/endpoints";

import {
  UserOutlined,
  LockOutlined,
  AliwangwangOutlined
} from "@ant-design/icons";

const Registration = (props) => {
  const { visible, setVisible, } = props;

  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registration = async (values) => {
    setLoading(true);

    const names = values["full_name"].split(" ");

    values["first_name"] = names[0]; names.shift();

    values["last_name"] = names.join(" ");

    values["username"] = values["username"].toLowerCase();

    let request = await endpoints.registration(values);

    setLoading(false);
    
    if (request.status === 201) 
      setComplete(true);

    if (request.status === 400) {
      const error = request.data;

      let message = new String();

      if("email" in error) message = error.email;
      if("username" in error) message = error.username;
  
      setError(message);
    } 
  }

  return (
    <div>
      <Modal
        title="Diventa un builder"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        {complete ? (
          <Alert
            message="Benvenuto a bordo"
            description="Tra pochi secondi riceverai una e-mail di benvenuto contenente alcune informazioni molto importanti. Leggila attentamente, poi conferma la tua registrazione."
            type="success"
            showIcon
          />
        ) : loading ? (
          <div className={"center mb--30"}>
            <Spin size="large" />
          </div>
        ) : (

          <Form
            name="first-normal_login"
            className="login-form"
            onFinish={registration}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Inserisci il tuo username",
                },
                () => ({
                  validator(rule, value) {
                    if (!value.match("^[A-Za-z0-9]+$")) {
                      return Promise.reject("Il tuo username non può contenere spazi o caratteri speciali");
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input
                prefix={<AliwangwangOutlined className="site-form-item-icon" />}
                placeholder="Il tuo username"
              />
            </Form.Item>

            <hr/>

            <Form.Item
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Inserisci il tuo nome completo",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Il tuo nome e cognome"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Inserisci il tuo indirizzo e-mail",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Il tuo indirizzo e-mail"
              />
            </Form.Item>

            <hr/>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Inserisci la tua password" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Inserisci la tua password"
              />
            </Form.Item>

            <Form.Item
              name="confirmationPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Conferma la password inserita",
                },
                
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) 
                      return Promise.resolve();
                    
                    return Promise.reject("Le due password non corrispondono");
                  },
                })
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Conferma la password inserita"
              />
            </Form.Item>

            <Form.Item >
              <button
                className="mt10 redButton clickable"
                type="primary"
              >
                Iscriviti
              </button>
            </Form.Item>

            {error && (
              <Form.Item>
                <Alert
                  message="Qualcosa è andato storto"
                  description={error}
                  type="error"
                  onClick={() => setError(null)}
                  style={{cursor: "pointer"}}
                  showIcon
                />
              </Form.Item>
            )}
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Registration;