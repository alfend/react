import React, { useState, useCallback } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList";
import MessageField from "./components/MessageField";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { AUTHORS } from "./utils/constants";

const initialChats = [
  {
    name: "Chat1",
    id: "chat1",
  },
  {
    name: "Chat2",
    id: "chat2",
  },
  {
    name: "Chat3",
    id: "chat3",
  },
];

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

export const Routes = () => {
  return (
      <Header />

      <Switch>
	  
		<Route exact path="/"  /> <ChatList /> </Route>
        <Route exact path="/profile" /> <Profile /> </Route>
        <Route exact path="/chat/:chatId" /> <MessageField /> </Route>
		<Route exact path="*" render={<div>This is my 404</div>} />
	
      </Switch>
  );
};
