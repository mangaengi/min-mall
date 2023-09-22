import React, {useEffect, useState} from 'react'
import '../App.css'
import {useParams } from 'react-router-dom';
import {Form, Row, Col, Button} from 'react-bootstrap';


const ProductDetail = () => {
  const {id} = useParams();
  const [products, setProduct] = useState([null]);
  const getProductsDetail = async() => {
    let url = `https://my-json-server.typicode.com/mangaengi/min-mall/products/${id}`
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
              <img src={products?.img} alt="" />
          </Col>
          <Col className='detail-info'>
              <div className="title">{products?.title}</div>
              <div className="content">{products?.content}</div>
              <div className='user'>{products?.user}</div>
          </Col>
      </Row>
  </>
)
}

export default ProductDetail