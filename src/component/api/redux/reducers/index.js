const INITIAL_STATE = {
     data:""
}

export const reducer = (state = INITIAL_STATE, action) => {


     switch (action.type) {
          case "GET_DATA":
               return { ...state, data: action.payload}
          default:
               break;
     }
}