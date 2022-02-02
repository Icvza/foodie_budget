export function userReducer (state = [], action) {
     switch(action.type){
          case 'FETCH_USER':
               return action.payload.payload
          case 'ADD_USER':
               return [...state, action ]
          case 'LOGGED_IN_STATUS':
               return [...state, action.payload]
          default:
               return state
     }
}