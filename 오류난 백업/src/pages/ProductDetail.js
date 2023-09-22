import React, {useEffect, useState} from 'react'
import '../App.css'
import {useParams } from 'react-router-dom';
import {Form, Row, Col, Button} from 'react-bootstrap';



const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url =  `https://my-json-server.typicode.com/mangaengi/min-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
    return (
        <>
          <Row className='product-detail'>
              <Col className='productdetail-img'>
                <img src={products?.img} alt=""/>
              </Col>
              <Col className='detail-info'>
                <div className="new">
                  {products?.new === true?'[신상품]':''}
                </div>
                <div className="title">{products?.title}</div>
                <div className="price">{products?.price}</div>
    
                <Form.Select>
                  <option>Size</option>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                </Form.Select>
    
                <Button variant="warning">구매하기</Button>{' '}
              </Col>
          </Row>
        </>
      )
}

export default ProductDetail
