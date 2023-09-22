import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`)
  }

  return (
    <div className='product-list'>
        <div className="product-img"><img src={item?.img} alt="" /></div>
        <div className="title">{item?.title}</div>
        <div className="price">{item?.price}</div>      
    </div>
  )
}

export default ProductCard
