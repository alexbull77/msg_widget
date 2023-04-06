import {Message} from "../models/MessageModel";
import {applySnapshot, types} from "mobx-state-tree";
import {IMessageSnapshotIn, IMessageSnapshotOut, IUserSnapshotOut} from "../types/types";
import messages from "./data.json"
import users from "./users.json"
import {createContext, useContext} from "react";
import {User} from "../models/UserModel";


const MessagesStore = types
    .model('MessagesStore', {
        users: types.optional(types.array(types.safeReference(User)), []),
        messages: types.optional(types.array(types.safeReference(Message)), []),
    })
    .views(self => ({
        get latestMessagesForWidget() {
            const count: number = 6

            const lastMessages = self.messages.slice(0, count + 1)
            return this.sortForReadAndUnread(lastMessages)
        },

        sortForReadAndUnread(lastMessages: IMessageSnapshotOut[]) {
            return lastMessages.sort((a: IMessageSnapshotOut, b: IMessageSnapshotOut) => (
                a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1)
            )
        },

        findUserById(id: string) {
            return self.users.find((user: IUserSnapshotOut) => user.id === id)
        }
    }))
    .actions(self => ({
        fetchUsers () {
            // const _users: IMessageSnapshotIn[] = []
            users.map(user => {
                self.user.push(user)
            })
            // console.log(_users)
            // applySnapshot(self.users, _users)
            console.log(self.users)
        },

        //here needs to be an async function
        fetchMessages () {
            //here we somehow fetch data probably via graphql query
            const _messages: IMessageSnapshotIn[] = []
            messages.map((message) => {
                _messages.push({
                    ...message, user: self.findUserById(message.user_id)
                })
            })
            console.log(_messages)
            applySnapshot(self.messages, _messages)
        }
    }))

export const LatestMessagesStore = MessagesStore.create({})

export const ContextLatestMessagesStore = createContext(LatestMessagesStore)

export const useLatestMessagesStore = () => useContext(ContextLatestMessagesStore)