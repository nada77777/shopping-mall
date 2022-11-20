import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, price, gender, imgPath } = product;
    const navigate = useNavigate();
    const toDetailPage = () => {
        navigate('/productDetail', { state: { product } });
    };
    return (
        <li onClick={toDetailPage} className='mx-1 my-1 rounded-lg shadow-2xl overflow-hidden'>
            <img alt='product item' src={imgPath} />
            <div className='px-2 py-2'>
                <div className='flex justify-between'>
                    <p>{name}</p>
                    <p>￦{price}</p>
                </div>
                <p>{gender}</p>
            </div>
        </li>
    );
};

export default ProductCard;