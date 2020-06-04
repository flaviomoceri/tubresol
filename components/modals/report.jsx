import React, { useState } from "react";
import { Modal, Spin } from "antd";
import { Alert } from "antd";
import { Form, Input, Checkbox } from "antd";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../../controllers/endpoints";

import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const Report = (props) => {
  const { 
    visible, setVisible, 
    post, comment } = props;

  const [loading, setLoading] = useState(false);

  const report = async (values) => {
    setLoading(true);

    const request = await endpoints.report(null, comment.id, values);

    setLoading(false);

    if (request.status === 201)
      setVisible(false);
  }

  return (
    <div>
      <Modal
        title="Segnala questo contenuto"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        {loading ? (
          <div className={"center"}>
            <Spin size="large" />
          </div>
        ) : (
          <Form name="normal_report" className="login-form" onFinish={report}>
            <Form.Item
              name="subject"

              rules={[
                {
                  required: true,
                  message: "Inserisci il motivo della segnalazione",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Inserisci il motivo della segnalazione"
              />
            </Form.Item>

            <Form.Item name="description">
              <TextArea
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Inserisci una descrizione riguardante la segnalazione (Facoltativo)"
                style={{
                  height: 110 + "px"
                }}
              />
            </Form.Item>

            <Form.Item>
              <button
                className="redButton clickable"
                type="primary"
              >
                Segnala questo contenuto
              </button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Report;