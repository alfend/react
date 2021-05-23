import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Form } from "../Form";
import { AUTHORS } from "../../utils/constants";
import { usePrev } from "../../utils/hooks";
import { Message } from "../Message";
import { ChatList } from "../ChatList";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, addMessageWithThunk } from "../../store/messages/actions";

const initialMessages = {
  chat1: [
    { author: AUTHORS.HUMAN, text: "hi1" },
    { author: AUTHORS.BOT, text: "hi" },
  ],
  chat2: [
    { author: AUTHORS.HUMAN, text: "hi2" },
    { author: AUTHORS.HUMAN, text: "hi" },
  ],
  chat3: [],
};

const MessageField = () => {
  const messages = useSelector(state => state.messages.messagesList);
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleAddMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithThunk(newMessage, chatId));
    },
    [chatId, dispatch]
  );


  if (!chatId || !messages[chatId]) {
    return <Redirect to="/" />;
  }

  return (
    <div className="message-field">
      <ChatList />
      <div>
        {messages[chatId].map((message, i) => (
          <Message text={message.text} author={message.author} key={i} />
        ))}
        <Form onAddMessage={handleAddMessage} />
      </div>
    </div>
  );
};


export default MessageField;
