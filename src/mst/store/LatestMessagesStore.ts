import { Message } from "../models/MessageModel";
import { applySnapshot, destroy, types } from "mobx-state-tree";
import {
  IMessage,
  IMessageSnapshotIn,
  IMessageSnapshotOut,
  IUser,
  IUserSnapshotIn,
  IUserSnapshotOut,
} from "../types/types";
import messages from "../../data/messages.json";
import users from "../../data/users.json";
import { createContext, useContext } from "react";
import { User } from "../models/UserModel";

export const MessagesStore = types
  .model("MessagesStore", {
    // probably need to use an array of safe references cuz we already have users in other stores
    users: types.optional(types.array(User), []),
    messages: types.optional(types.array(Message), []),
  })
  .views((self) => ({
    findUserById(id: string) {
      return self.users.find((user: IUser) => user.id === id);
    },

    isEmpty() {
      return !self.messages.length;
    },
  }))
  .actions((self) => ({
    fetchUsers() {
      console.log(users);
      const _users: IUserSnapshotIn[] = [];
      users.map((user) => {
        _users.push(user);
      });
      // console.log(_users)
      applySnapshot(self.users, _users);
      console.log("Fetching Users...");
    },

    //here needs to be an async function
    fetchMessages() {
      //here we somehow fetch data probably via graphql query
      const _messages: IMessageSnapshotIn[] = [];
      messages.map((message) => {
        _messages.push({
          timeSent: message.time,
          description: message.description,
          isRead: message.read,
          user: self.findUserById(message.user_id),
        });
      });
      applySnapshot(self.messages, _messages);
      console.log("Fetching Messages...");
    },

    removeMessage(message: IMessage) {
      destroy(message);
    },

    sortForReadAndUnread() {
      console.log("Sorting messages...");
      return self.messages.sort((a, b) =>
        a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1
      );
    },
  }))
  .views((self) => ({
    getLatestMessagesForWidget(count: number) {
      self.sortForReadAndUnread();
      return self.messages.slice(0, count);
    },
  }));

export const LatestMessagesStore = MessagesStore.create({});

export const ContextLatestMessagesStore = createContext(LatestMessagesStore);

export const useLatestMessagesStore = () =>
  useContext(ContextLatestMessagesStore);
