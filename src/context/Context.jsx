import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getData } from "../api";

export const theme = createContext();

export const Context = ({children}) => {
    const [search, setSearch] = useState('');
    const [productList, setProductList] = useState([]);

    const initialState = {
        products: [],
        cart: [],
      };

    const reducer = (state, action) => {
        switch(action.type) {
            case "get-products":
                return {...state, products: action.payload};
            case "add-cart":
                // return {...state, cart: [...state.cart,{...action.payload}]}
                const item = action.payload;
                const filter = state.cart.find(c => c.id === item.id);
                if(filter) {
                    return {...state, cart: [...state.cart.map(c => c.id === item.id ? {...item, qty: 1} : {...c})]}
                }else {
                    return {...state, cart: [...state.cart, {...item, qty: 1}]}
                }
            case "clear":
                return {...state, cart: []};
            case "delete":
                return {...state, cart: [...state.cart.filter(c=> c.id !== action.payload.id)]}
            default: 
                return state;
        }
    }

    
    
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(Array.isArray(state.cart));

    const getProduct = async() => {
        const data = await getData('/products');
        setProductList(data)
    }

    useEffect(() => {getProduct()}, [])
    useEffect(() => {
        dispatch({type:"get-products", payload: productList});
        const filterproduct = productList.filter(pd => pd.title.toLowerCase().includes(search.toLocaleLowerCase()))
        dispatch({type:"get-products", payload: filterproduct});
    }, [productList, search])

    const data = {state, search, setSearch, dispatch}
    return (
        <theme.Provider value={data}>
            {children}
        </theme.Provider>
    )
}

export const useStateContext = () => useContext(theme);