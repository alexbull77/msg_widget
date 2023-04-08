import {User} from "../models/UserModel";
import {Instance, SnapshotIn, SnapshotOut} from "mobx-state-tree";
import {Message} from "../models/MessageModel";
import {MessagesStore} from "../store/LatestMessagesStore";


export interface IUser extends Instance<typeof User> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof User> {}
export interface IUserSnapshotOut extends SnapshotOut<typeof User> {}

export interface IMessage extends Instance<typeof Message> {}
export interface IMessageSnapshotIn extends SnapshotIn<typeof Message> {}
export interface IMessageSnapshotOut extends SnapshotOut<typeof Message> {}

export interface IMessagesStore extends Instance<typeof MessagesStore> {}
export interface IMessagesStoreSnapshotIn extends SnapshotIn<typeof MessagesStore> {}
export interface IMessagesStoreSnapshotOut extends SnapshotOut<typeof MessagesStore> {}

// export type UserType = Instance<typeof User>
// export type MessageType = Instance<typeof Message>
// export type MessagesStoreType = Instance<typeof MessagesStore>

