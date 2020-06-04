import React, { useState, useEffect } from "react";
import { Alert, Checkbox, Form, Input, Modal, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import TextArea from "antd/lib/input/TextArea";
import Link from "next/link";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../../controllers/endpoints";

const useUserState = createPersistedState("user");

const Build = (props) => {
  const [user, setUser] = useUserState(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (values) => {
    setLoading(true);

    const request = await endpoints.idea(values);

    setLoading(false);

    if (request.status == 201) setSubmitted(true);
  };

  return (
    <Modal
      title={"Candida il tuo progetto"}
      visible={props.isBuildVisible}
      footer={null}
      closable={true}
      onCancel={() => props.setIsBuildVisible(false)}
    >
      {submitted ? (
        <Alert
          message="Congratulazioni"
          description="La tua richiesta è stata inviata con successo. Sarai ricontattato al più presto per una valutazione preliminare."
          type="success"
          showIcon
        />
      ) : loading ? (
        <div className={"center"}>
          <Spin size="large" />
        </div>
      ) : (
        <Form name="normal_report" className="login-form" onFinish={submit}>
          {user ? (
            <Form.Item name="description">
              <TextArea
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="In cosa consiste la tua idea e perchè dovremmo sceglierti?"
                style={{
                  height: 210 + "px",
                }}
              />
            </Form.Item>
          ) : (
            <Alert
              message="Aspetta un attimo"
              description="Devi essere registrato prima di procedere con l'invio del tuo progetto"
              type="error"
              showIcon
            />
          )}

          {user && (
            <Form.Item>
              <button className="redButton clickable mt10" type="primary">
                Invia questo messaggio
              </button>
            </Form.Item>
          )}
        </Form>
      )}
    </Modal>
  );
};

export default Build;
