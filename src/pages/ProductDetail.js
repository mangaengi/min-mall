import React, {useEffect, useState} from 'react'
import '../App.css'
import { useParams } from 'react-router-dom';
import Form from "react-bootstrap/Form/";
import {Row, Col, Button} from 'react-bootstrap';



const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductsDetail = async() => {
      
        // let url = `http://localhost:5000/products/${id}`
        let url =  `https://my-json-server.typicode.com/mangaengi/Giordano-mall/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data)
        setProduct(data)
    }

    useEffect(() => {
      getProductsDetail()
    }, [])
    return (
        <>
          <Row className='product-detail'>
              <Col className='productdetail-img'>
                <img src={product?.img} alt=""/>
              </Col>
              <Col className='detail-info'>
                <div className="new">
                  {product?.new === true?'[신상품]':''}
                </div>
                <div className="title">{product?.title}</div>
                <div className="price">{product?.price}</div>
                <div className="choice">{product?.choice===true?'Conscious Choice':''}</div>  
    
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
