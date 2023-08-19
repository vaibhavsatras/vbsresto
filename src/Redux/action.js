
export const ADD = (item)=>{

    return{
        type: 'ADD_CART',
        payload: item
    }
}


//Remove Action

export const REMOVE = (id)=>{

    return{
        type: 'REMOVE_CART',
        payload: id
    }
}

// Remove Indvidual Item

export const DELETE_ITEM = (delitem)=>{

    return{
        type: 'REMOVE_ITEM',
        payload: delitem
    }
}

