import React, { useContext } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Container, Col} from 'reactstrap';

import ProductsContext from '../../contexts/products';

import './styles.css';


const addHttpsToImageUrl = (url) =>{
    if(!url.includes('http')){
        url = `https://${url}`;
    }else if(!url.includes('https')){
        url = url.replace('http','https');
    }
    return url;
} 

const formarMoney = (money,minimumFractionDigits) =>{
    var locality = 'es-CL';
    return money.toLocaleString(locality , {minimumFractionDigits: minimumFractionDigits });
}

export default function Products() {
    const productsContext = useContext(ProductsContext);
    const products = productsContext.state.products;
    const loading = productsContext.state.loading;

    return (
        <section>
            <div className="products-result-title">
                Resultados para: <strong>{productsContext.state.textSearch}</strong>
            </div>
            <Container fluid className="products-container justify-content-center">
                {loading &&
                    <Col>
                        Cargando Productos....
                    </Col>
                }
                {products.map((product,index) => {
                    return (<>
                        <Col>
                            <Card className="products-card" key={product.id}>
                                <CardImg top width="100%" height={200} src={addHttpsToImageUrl(product.image)} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>
                                        <h3 className="brand">
                                            {product.brand}
                                            <span className="description">{product.description}</span>
                                        </h3>
                                    </CardTitle>
                                    <CardText>
                                        <div>
                                            <span class="price">$ {formarMoney(product.price)}</span>
                                            {product.percentage_discount > 0 &&
                                                <span class="discount">{product.percentage_discount}%</span>
                                            }                                        
                                        </div>
                                        {product.percentage_discount > 0 &&
                                            <div>
                                                <span class="previous-price">$ {formarMoney(product.previous_price)}</span>
                                            </div>
                                        }
                                    </CardText>
                                    <Button className="button-add">Agregar</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        {(index + 1) % 3 === 0 && <div class="w-100"></div>}
                    </>);
                })}
            </Container>
        </section>
    );
}