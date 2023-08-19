const INIT_STATE = {

    carts: []
}

export const  cartreducer = (state=INIT_STATE,action)=>{

    switch(action.type)
    {
        case "ADD_CART":

            const ITEMINDEX = state.carts.findIndex((element)=>element.id === action.payload.id)
        
            if(ITEMINDEX >= 0)
            {
                state.carts[ITEMINDEX].qnty += 1
            }
            else
            {   
                const  temp = {...action.payload, qnty:1}
                return {
                    ...state,
                    carts:[...state.carts,temp]
                }
            }

        case 'REMOVE_CART':
            const DELETE_DATA = state.carts.filter((data)=>{

                return data.id !== action.payload

            }) 
            return {
                ...state,
                carts: DELETE_DATA
            }

        case 'REMOVE_ITEM':

            const DEL_ITEMINDEX = state.carts.findIndex((data)=>data.id === action.payload.id);

            if(state.carts[DEL_ITEMINDEX].qnty >= 1)
            {
                state.carts[DEL_ITEMINDEX].qnty -= 1;
                return{
                    ...state,
                    carts:[...state.carts]
                }
            }
            else if(state.carts[DEL_ITEMINDEX].qnty === 1)
            {
                const DELETE_DATA = state.carts.filter((data)=>{

                    return data.id !== action.payload
    
                }) 
                return {
                    ...state,
                    carts: DELETE_DATA
                }
    
            }

            default:
                return state;
    }
}
