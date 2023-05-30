function reducer(state = {}, action) {
  switch (action.type) {
    case "add":
      return {
        age: state.age + 1,
      };
    case "sub":
      return {
        age: state.age - 1,
      };

    default:
      return state;
  }
}

export default reducer;
