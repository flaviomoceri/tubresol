import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { Alert } from "antd";
import { Form, Input, Checkbox } from "antd";

import Recovery from "./recovery";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../../controllers/endpoints";

import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

const useUserState = createPersistedState("user");

const Login = (props) => {
  const { visible, setVisible } = props;

  const [isRecoveryVisible, setIsRecoveryVisible] = useState(false);

  const [user, setUser] = useUserState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (values) => {
    setLoading(true);
    values['username'] = values['username'].toLowerCase();
    const request = await endpoints.login(values);

    setLoading(false);

    if (request.status === 200) {
      setVisible(false);

      localStorage.setItem('access-token', request.data['access']);
      
      if(values.remember)
        localStorage.setItem('refresh-token', request.data['refresh']);

      const user = await endpoints.user();

      setUser(user.data);
    }

    if (request.status === 403 || request.status === 401)
      setError("Le credenziali inserite non corrispondono a nessun utente registrato");
  };

  return (
    <div>
      <Recovery
        visible={isRecoveryVisible}
        setVisible={setIsRecoveryVisible}
      />

      <Modal
        title="Accedi al tuo account"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        {loading ? (
          <div className={"center mb--30"}>
            <Spin size="large" />
          </div>
        ) : (
          <Form name="normal_login" className="login-form" onFinish={login}>
            <Form.Item
              name="username"

              rules={[
                {
                  required: true,
                  message: "Inserisci il tuo username o l'indirizzo e-mail",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Inserisci il tuo username"
              />
            </Form.Item>

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

            <Form.Item>
              <button
                className="redButton clickable mb--10"
                type="primary"
              >
                Accedi
              </button>
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Rimani collegato</Checkbox>
              </Form.Item>

              <a
                className="login-form-forgot"
                onClick={() => {
                  setIsRecoveryVisible(true);
                  setVisible(false);
                }}
              >
                Recupera la password
              </a>
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

export default Login;