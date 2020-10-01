import React, {useContext, useState} from 'react';
import { Form, Input, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ProductsContext from '../../contexts/products';

import './styles.css';

export default function Search() {

    const productsContext = useContext(ProductsContext);
    const [searchText, setSearchText] = useState('');

    const search = () =>{
        productsContext.actions.search(searchText);
    }

    return (
        <section>
            <Form onSubmit={(event)=>event.preventDefault()}>
                <div className="search-container">
                    <InputGroup>
                        <Input 
                            className="search-input" name="searchText" placeholder="¿Qué estás buscando?" 
                            value={searchText}
                            onChange={(event)=>{
                                setSearchText(event.target.value);
                            }}
                            onKeyPress={(event)=>{
                                if(event.key === 'Enter'){
                                    search();
                                }
                            }}
                        />
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            color="#c2c2c2" className="search-icon" 
                            onClick={search} 
                            size="lg"
                        />    
                    </InputGroup>
                </div>
            </Form>
        </section>
    );
}