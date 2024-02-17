import { DATA } from "../../data/usersData";
import { SET_SELECTION } from "../constants";

const initialState = {
  users: DATA,
  selectedUsers: [],
  selectedCategories: DATA,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTION:
      // vérifie si la selection existe déjà
      const indexResult = state.selectedUsers.findIndex(
        (user) => user.id === action.userId
      );

      if (indexResult >= 0) {
        // user exists
        const newSelectedUsers = [...state.selectedUsers];
        // rechercher l'index en question
        newSelectedUsers.splice(indexResult, 1);
        // mise à jour du tableau selectedUsers
        return { ...state, selectedUsers: newSelectedUsers };
      } else {
        // doesn't exist
        const user = state.users.find((user) => user.id === action.userId);
        // déclarer newSelectedUsers ici
        const newSelectedUsers = [...state.selectedUsers, user];

        return { ...state, selectedUsers: newSelectedUsers };
      }

    default:
      return state;
  }
};

export default appReducer;
