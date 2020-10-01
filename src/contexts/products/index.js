import React, {useState} from 'react';
import ProductsService from '../..//services/products';

const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoding] = useState(false);
    const [textSearch, settextSearch] = useState('');

    const search = (text) =>{
        setLoding(true);
        settextSearch(text);
        setProducts([]);
        ProductsService.search(text).suscribe(
            products => {
                setLoding(false);
                setProducts(products);
            },
            error => console.log(error)
        );
    };

    const state = {
        products,
        textSearch,
        loading,
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