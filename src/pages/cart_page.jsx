import React from 'react';

import { useCartContext } from '../context/context';

const CartPage = (props) => {

    return (
        <>
            <h1 className='text-center font-bold text-lg py-5 border-b border-opacity-80'>내 장바구니</h1>

            <ul>

            </ul>
            : <h1 className='text-center font-bold text-lg py-28'>장바구니에 상품이 없습니다.</h1>
        </>
    );
};

export default CartPage;