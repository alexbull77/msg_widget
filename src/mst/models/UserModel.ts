import {types} from "mobx-state-tree";
import {IUser} from "../types/types";
import { v4 as uuidv4 } from "uuid";

export const User: IUser = types
    .model('User', {
        id: types.optional(types.identifier, () => uuidv4()),
        username: types.string,
        firstName: 'John',
        secondName: 'Doe',
        email: '',
        password: '',
    })
    .actions(self => ({
            setInfo({id, username, email, password}) {
                    self.id = id;
                    self.username = username;
                    self.email = email;
                    self.password = password;
            }
    }))
