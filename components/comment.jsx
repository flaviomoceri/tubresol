import React, { useState } from "react";
import Link from "next/link";
import Dante from "Dante2";

import Avatar from "./avatar";

import Report from "./modals/report";

import validator from 'validator';

import createPersistedState from "use-persisted-state";

import { Tooltip, Comment as Container, Popconfirm } from "antd";

import * as endpoints from "../controllers/endpoints";

import {
  DislikeOutlined,
  LikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";

const useUserState = createPersistedState("user");

const Comment = (props) => {
  const [user, setUser] = useUserState(null);
  const [comment, setComment] = useState(props.comment);
  const [isReportVisible, setIsReportVisible] = useState(false);

  const findUserInList = (user, list) => {
    if (user == null) return null;

    for (const element of list) if (element.id == user.id) return element;

    return null;
  };

  const like = async () => {
    const request = await endpoints.like(null, comment.id);

    if (request.status == 204) {
      const update = JSON.parse(JSON.stringify(comment));

      const liker = findUserInList(user, update.likes);

      if (liker) update.likes.pop(user);

      if (liker == null) update.likes.push(user);

      update.dislikes.pop(user);

      setComment(update);
    }
  };

  const dislike = async () => {
    const request = await endpoints.dislike(null, comment.id);

    if (request.status == 204) {
      const update = JSON.parse(JSON.stringify(comment));

      const disliker = findUserInList(user, update.dislikes);

      if (disliker) update.dislikes.pop(user);

      if (disliker == null) update.dislikes.push(user);

      update.likes.pop(user);

      setComment(update);
    }
  };

  const remove = async () => {
      const request = await endpoints.remove_comment(comment.id);

      if(request.status == 204)
        setComment(null);
  };

  return (
      comment && <Container
        className={'boxed boxed--border'}
        actions={[
          <span
            key="comment-basic-like"
            onClick={() => {
              if (user) return like();
              else props.setIsLoginVisible(true);
            }}
          >
            <Tooltip title="Mi piace">
              {comment.likes && findUserInList(user, comment.likes) ?
                ( <LikeFilled /> ) : 
                ( <LikeOutlined /> )}
            </Tooltip>

            <span className="comment-action">{comment.likes.length}</span>
          </span>,

          <span
            key=' key="comment-basic-dislike"'
            onClick={() => {
              if (user) return dislike();
              else props.setIsLoginVisible(true);
            }}
          >
            <Tooltip title="Non mi piace">
              {comment.dislikes && findUserInList(user, comment.dislikes) ?
                ( <DislikeFilled /> ) : 
                ( <DislikeOutlined /> )}
            </Tooltip>

            <span className="comment-action">{comment.dislikes.length}</span>
          </span>,

          <span key="comment-basic-reply-to">
            { user && comment.author.id == user.id &&
               <Popconfirm
                title="Sei sicuro di voler cancellare questo commento?"
                onConfirm={remove}
                placement={'bottom'}
                okText="Si"
                icon={null}
                cancelText="No"
              >
                <small>Elimina questo commento  </small>
              </Popconfirm>
            }
          </span>,

          <span key="comment-basic-reply-to">
            { user && comment.author.id != user.id &&
              <small onClick={() => setIsReportVisible(true)}>
                Segnala ai moderatori
              </small>
            }
          </span>,
        ]}

        author={
          <Link href={"/builders/[username]"} as={`/builders/${comment.author.username}`}>
            <a>{comment.author.first_name + " " + comment.author.last_name}</a>
          </Link>
        }

        avatar={<Avatar user={comment.author} />}

        content={
          typeof window !== "undefined" && validator.isJSON(comment.content) ? (
            <Dante read_only={true} content={JSON.parse(comment.content)} />
          ) : (
            comment.raw
          )
        }

        datetime={<span>{comment.timeago}</span>}
      >
        <Report visible={isReportVisible} setVisible={setIsReportVisible} comment={comment} />
      </Container>
  );
};

export default Comment;
