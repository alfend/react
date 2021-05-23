import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const persistConfig = {
  key: "gbMessenger",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
  })
);


export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
