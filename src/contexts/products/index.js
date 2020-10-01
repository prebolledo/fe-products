import React, {useState} from 'react';
import ProductsService from '../..//services/products';

const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [textSearch, settextSearch] = useState('');

    const search = (text) =>{
        settextSearch(text);
        setProducts([]);
        ProductsService.search(text).suscribe(setProducts,(error)=>{
            console.log(error);
        });
    };

    const state = {
        products,
        textSearch,
    };

    const actions = {
        search,
    };

    return (
        <ProductsContext.Provider value={{state, actions}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;