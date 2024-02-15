import { DATA } from "../../data/usersData";

const initialState = {
  users: DATA,
  selectedUsers: [],
  selectedCategories: DATA,
};

const appReducer = (state = initialState, action) => {
  return state;
};

export default appReducer;
