import React, {useEffect, useState} from 'react'
import '../App.css'
import {useParams } from 'react-router-dom';
import {Form, Row, Col, Button} from 'react-bootstrap';


const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductsDetail = async() => {
    let url =  `https://my-json-server.typicode.com/mangaengi/min-mall/products/${id}`
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data)
  }

  useEffect(() => {
      getProductsDetail()
  }, [])
return (
  <>
      <Row className='product-detail'>
          <Col className='detail-img'>
              <img src={product?.img} alt="" />
          </Col>
          <Col className='detail-info'>
              <div className="title">{product?.title}</div>
              <div className="content">{product?.content}</div>
              <div className='user'>{product?.user}</div>
          </Col>
      </Row>
  </>
)
}

export default ProductDetail