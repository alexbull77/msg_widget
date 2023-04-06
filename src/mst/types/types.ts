import {User} from "../models/UserModel";
import {Instance, SnapshotIn, SnapshotOut} from "mobx-state-tree";
import {Message} from "../models/MessageModel";


export interface IUser extends Instance<typeof User> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof User> {}
export interface IUserSnapshotOut extends SnapshotOut<typeof User> {}

export interface IMessage extends Instance<typeof Message> {}
export interface IMessageSnapshotIn extends SnapshotIn<typeof Message> {}
export interface IMessageSnapshotOut extends SnapshotOut<typeof Message> {}

