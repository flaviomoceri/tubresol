import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { Alert } from "antd";
import { Form, Input, Checkbox } from "antd";

import * as endpoints from "../../controllers/endpoints";

import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { useRouter } from "next/router";

const Recovery = (props) => {
  const router = useRouter();
  
  const { visible, setVisible } = props;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const recovery = async (values) => {
      const email = values.email;

      setLoading(true);

      const request = await endpoints.password(email);

      setLoading(false);

      setResult(request.status == 200 ? "success" : "error");
  }

  return (
    <div>
        <Modal
            title="Recupera la tua password"
            visible={visible}
            footer={null}
            onCancel={() => setVisible(false)}
        >
          {loading ? (
            <div className={"center mb--30"}>
              <Spin size="large" />
            </div>
          ) : (
            <Form name="normal_login" className="login-form" onFinish={recovery}>
              <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Inserisci il tuo indirizzo e-mail" }]}
              >
                  <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Inserisci il tuo indirizzo e-mail"
                  />
              </Form.Item>

              <Form.Item>
                  <button className="redButton clickable">Recupera</button>
              </Form.Item>

              { result &&
                <div>
                  <br/>

                  <Alert
                    message={
                      result == "success" ?
                      "Richiesta di recupero password avvenuta con successo" :
                      "Problemi riscontrati durante la tua richiesta di recupero password"
                    }

                    description={
                      result == "success" ?
                      "Abbiamo ricevuto la tua richiesta di recuperare la password che protegge il tuo profilo. Nella tua casella di posta troverai il link per poterla modificare." :
                      "Qualcosa è andato storto durante la validazione della tua richiesta, verifica di aver inserito un e-mail corretta e associata ad un account esistente."
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

export default Recovery;