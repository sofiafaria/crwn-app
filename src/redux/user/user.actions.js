import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

/**
 * Actions are functions that return an object with the type and the payload
 * 
 */