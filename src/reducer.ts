const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "Increment": {
      return { ...state, count: state?.count + 1 };
    }
  }
}

export {reducer, initialState}