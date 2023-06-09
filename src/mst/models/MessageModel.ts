import { cast, getParent, getParentOfType, types } from 'mobx-state-tree'
import { User } from './UserModel'
import { v4 as uuidv4 } from 'uuid'
import { MessagesStore } from '../store/LatestMessagesStore'
import { IMessage, IMessageSnapshotOut, IMessagesStore, IUser } from '../types/types'

export const Message: IMessage = types
    .model('User', {
        id: types.optional(types.identifier, () => uuidv4()),
        title: '',
        description: '',
        timeSent: types.string,
        user: types.safeReference(types.late(() => User)),
        isRead: types.boolean,
    })

    .actions((self) => ({
        toggle() {
            self.isRead = !self.isRead
            console.log('toggle')
        },
    }))
    .actions((self: IMessage) => ({
        delete(): void {
            const parent: IMessagesStore = getParentOfType(self, MessagesStore)
            if (parent) {
                parent.removeMessage(self)
            }
        },
    }))
