import {cast, getParentOfType, types} from "mobx-state-tree";
import {User} from "./UserModel";
import { v4 as uuidv4 } from "uuid";
import {MessagesStore} from "../store/LatestMessagesStore";

export const Message = types
    .model('User', {
        id: types.optional(types.identifier, () => uuidv4()),
        title: '',
        description: '',
        timeSent: types.string,
        user: types.safeReference(User),
        isRead: types.boolean,
    })
    .actions(self => ({
        toggle() {
            self.isRead = !self.isRead
            console.log('toggle')
        },

        delete() {
            //how to fix it?
            // getParent(self, 2).removeMessage(cast(self));
            getParentOfType(self, MessagesStore).removeMessage(cast(self))
        }
    }))

