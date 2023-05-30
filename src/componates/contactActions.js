// contactActions.js

// Action types
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

// Action creators
export const deleteContact = (index) => {
  return {
    type: DELETE_CONTACT,
    payload: index,
  };
};

export const editContact = (index, updatedContact) => {
  return {
    type: EDIT_CONTACT,
    payload: { index, updatedContact },
  };
};
