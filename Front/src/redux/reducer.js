import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }

            case DELETE_FAVORITE:
                return{
                    ...state,
                    myFavorites: action.payload
                }

            case FILTER:
                if(action.payload === "Select") return {...state, allcharacters:[...state.myFavorites]}
                let arrFilter = [...state.myFavorites].filter(char => char.gender === action.payload)
                return{
                    ...state,
                    allcharacters: arrFilter
                }

            case ORDER:
                return{
                    ...state,
                    myFavorites:
                        action.payload === "Ascendente"
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
                }


        default:
            return {...state,}
    }
}


export default reducer;