import { types } from 'mobx-state-tree'
import { v4 as uuidv4 } from 'uuid'
import { IUser } from '../types/types'

export const User: IUser = types.model('User', {
    id: types.optional(types.identifier, () => uuidv4()),
    username: '',
    firstName: 'John',
    secondName: 'Doe',
    email: '',
    password: '',
})
