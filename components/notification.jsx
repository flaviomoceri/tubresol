import React, { useState, useEffect } from "react";
import { Tooltip } from "antd";
import { useRouter } from "next/router";

import FadeIn from "react-fade-in";

import createPersistedState from "use-persisted-state";

import * as endpoints from "../controllers/endpoints";

import { DOMAIN } from "../controllers/middleware";
import Link from "next/link";

const useUserState = createPersistedState("user");

const Notification = (props) => {
  const router = useRouter();

  const { username, slug } = props;

  const [user, setUser] = useUserState(null);
  const [log, setLog] = useState(null);

  let last = null;

  useEffect(() => {
    const seconds = setInterval(() => setLog(null), 7000);

    return () => clearInterval(seconds);
  }, []);

  useEffect(() => {
    async function getPushes() {
      const path = router.pathname
        .replace("[username]", username || new String())
        .replace("[slug]", slug || new String());

      const request = await endpoints.logs(path);

      if (
        request.data == null ||
        request.data.id == last ||
        request.data.user.profile.picture == null ||
        (user && user.id == request.data.user.id)
      )
        setLog(null);
      else {
        last = request.data.id;
        if (request.data.user.first_name) setLog(request.data);
      }
    }

    const i1 = setTimeout(() => getPushes(), 2000);

    const i2 = setTimeout(() => getPushes(), 20000);

    return () => {clearTimeout(i1); clearTimeout(i2);}
  }, []);

  return (
    <div>
      {log && (
        <FadeIn className={"notificationByp"}>
          <div className="fomo-notification fomo-notification-font-lg fomo-notification-position-none fomo-notification-v2-classic fomo-hover-animation-float">
            <Link href={"/builders/[username]"}
                  as={`/builders/${log.user.username}`}>
            <div
              className="fomo-notification-container"
              style={{ display: "inline", cursor: "pointer" }}
              id={"fomo-notification-v2_classic"}
            >
              <div
                style={{ display: "inline" }}
                className="fomo-notification-image-wrapper"
              >
                <div className="fomo-notification-image-wrapper-inside">
                  <img
                    className="fomo-notification-image"
                    src={
                      log.user.profile.picture
                        ? DOMAIN + log.user.profile.picture
                        : "/fonts/icons/avatars/" +
                          log.user.username[0].toUpperCase() +
                          ".svg"
                    }
                  />
                </div>
              </div>

              <div
                style={{ display: "inline" }}
                className="fomo-notification-content-wrapper"
              >
                <p className="fomo-notification-content">
                  <strong className="text-capitalize">
                    {log.user.first_name}{" "}
                    {log.user.last_name.length > 6
                      ? log.user.last_name.toUpperCase()[0] + "."
                      : log.user.last_name}
                  </strong>{" "}
                  stava guardando questa pagina{" "}
                </p>

                <p className={"mb0"}>
                  <small>{log.timeago}</small>
                </p>

                <Tooltip title={"Nascondi notifica"}>
                  <p className={"icon little"} onClick={() => setLog(null)}>
                    Chiudi
                  </p>
                </Tooltip>
              </div>

              <span id="fomo-close" />
            </div>
              </Link>
          </div>
        </FadeIn>
      )}

      <br />
    </div>
  );
};

export default Notification;
