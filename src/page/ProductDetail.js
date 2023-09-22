import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../App.css'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductsDetail = async() => {
        let url=`https://my-json-server.typicode.com/heeyoung0/10000recipe/products/${id}`
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