import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Mini from '../Components/Mimi/Mini';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {data_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = data_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Mini product = {product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
