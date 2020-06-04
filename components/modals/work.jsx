import React, { useState, useEffect } from "react";
import { Alert, Checkbox, Form, Input, Modal, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import TextArea from "antd/lib/input/TextArea";
import Link from "next/link";

const Work = (props) => {
  return (
    <Modal
      title={"Pagina non ancora disponibile"}
      visible={props.visible}
      footer={null}
      closable={true}
      onCancel={() => props.setVisible(false)}
    >
      <Alert
        message="Ancora un attimo"
        description="Questa pagina non è ancora disponibile ma lo sarà presto. Siamo molto curiosi di scoprire come possiamo collaborare insieme."
        type="warning"
        showIcon
      />
    </Modal>
  );
};

export default Work;
