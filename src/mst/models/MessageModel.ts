import {types} from "mobx-state-tree";
import {User} from "./UserModel";
import { v4 as uuidv4 } from "uuid";
import {IUserSnapshotOut} from "../types/types";

export const Message = types
    .model('User', {
        id: types.optional(types.identifier, () => uuidv4()),
        title: '',
        description: '',
        timeSent: types.string,
        //will possibly implement this
        user: types.safeReference(<IUserSnapshotOut>User),
        isRead: types.boolean,
        // userId: types.identifier
    })

