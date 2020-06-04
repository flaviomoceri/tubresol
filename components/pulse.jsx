import React, { useState, useEffect } from "react";

import Registration from "./modals/registration";
import Avatar from "./avatar";
import Link from "next/link";

import * as endpoints from "../controllers/endpoints";

import createPersistedState from "use-persisted-state";

const useUserState = createPersistedState("user");

const Pulse = (props) => {
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);

  const [user, setUser] = useUserState(null);
  const [analytics, setAnalytics] = useState(null);

  useEffect(function () {
    async function getAnalytics() {
      const request = await endpoints.analytics();
      
      if (props.maximumNumberOfAvatars) {
        const analytics = request.data;
        analytics.online = analytics.online.slice(0, props.maximumNumberOfAvatars + 1);
        setAnalytics(analytics);
      }
      else setAnalytics(request.data);
    }

    getAnalytics();
  }, []);

  return (
    <div>
      <Registration
        visible={isRegistrationVisible}
        setVisible={setIsRegistrationVisible}
      />

      {analytics && (
        <div>
          <div className="pulse">
            <div className="jsx-1318199533 dot"></div>
            {analytics.online.length == 1
              ? analytics.online.length + " utente è "
              : analytics.online.length + " utenti sono "}
            online in questo momento
            <br />
          </div>

          <div className="pulse mt10 avatars">
            {analytics.online.map((user) =>
              props.updateViewerByUsername ? (
                <a
                  key={user.id}
                  className={"clickable"}
                  onClick={() => props.updateViewerByUsername(user.username)}
                >
                  {" "}
                  <Avatar user={user} small={true}/>
                </a>
              ) : (
                <Link
                  href={"/builders/[username]"}
                  as={`/builders/${user.username}`}
                  key={user.id}
                >
                  <a
                    className={"clickable"}
                    href={`/builders/${user.username}`}
                  >
                    {" "}
                    <Avatar user={user} small={true}/>
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {user == null ? (
        <div className="pulse mb20 mt20">
          <a
            onClick={() => setIsRegistrationVisible(true)}
            className={"clickable red"}
          >
            Unisciti a loro
          </a>
        </div>
      ) :
        <div className="pulse mb20 mt20">

        </div>
      }
    </div>
  );
};

export default Pulse;
