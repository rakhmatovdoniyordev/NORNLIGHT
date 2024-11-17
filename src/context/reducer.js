export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist: [],
    cart: [],
}

export const reducer = (state, action)=> {
    let result = state
    switch(action.type){
        case "ADD__WISHLIST":
            let index = state.wishlist.findIndex(pro => pro.id === action.payload.id)
            if(index < 0){
                result = {...state, wishlist: [...state.wishlist, action.payload]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }else{
                result = {...state, wishlist: state.wishlist.filter(pro => pro.id !== action.payload.id)}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "ADD__CART":
            let cartIndex = state.cart?.findIndex(pro => pro.id === action.payload.id)
            if(cartIndex < 0){
                result = {...state, cart: [...state.cart, {...action.payload, amount: 1}]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
            else{
                result = {...state, cart: state.cart?.map((pro, inx) => (
                    cartIndex === inx ? {...pro, amount: pro.amount + 1} : pro
                ))}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "CLEAR__CART":
            result = {...state, cart: []}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "REMOVE__CART":
            result = {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "DEC_CART":
            let decIndex = state.cart?.findIndex(pro => pro.id === action.payload.id)
            result = {...state, cart: state.cart?.map((pro, inx) => (
                decIndex === inx ? {...pro, amount: pro.amount - 1} : pro
            ))}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        default:
            return state
    }
}