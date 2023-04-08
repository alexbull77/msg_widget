import {types} from "mobx-state-tree";
import {IUser} from "../types/types";
import { v4 as uuidv4 } from "uuid";

export const User = types
    .model('User', {
        id: types.optional(types.identifier, () => uuidv4()),
        username: '',
        firstName: 'John',
        secondName: 'Doe',
        email: '',
        password: '',
    })
