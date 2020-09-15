//reducer的作用:返回新的状态
import { FETCH_POSTS, NEW_POST } from '../actions/type';



const initalState = {
    items: [],
    item: {}
}


export default function(state = initalState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}