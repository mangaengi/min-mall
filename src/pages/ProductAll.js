import React from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'

const ProductAll = () => {
    const productList = useSelector(state=>state.product.productList)
    return (
        <Container>
            <Row>
                {
                    productList.map((menu ,idx) =>(
                        <Col lg={3} key={idx}>
                            <ProductCard item={menu} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductAll
