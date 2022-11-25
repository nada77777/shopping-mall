import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartContext } from '../context/context';

const ProductDetail = (props) => {
    const [itemSize, setItemSize] = useState('XS');
    const product = useLocation().state.product;
    // const { name, price, imgPath, detail, gender, size } = product;
    const { category, description, id, image, options, price, title } = product
    const { cartItems, addCart } = useCartContext();

    const selectSize = (event) => {
        console.log(event.target.value);
        setItemSize(event.target.value);
    };

    const addItem = () => {
        const item = { ...product, options: itemSize };
        addCart(item);
    };

    return (
        <section className='flex px-10 py-10'>
            <img className='h-[720px] basis-1/2' alt='product_img' src={image} />
            <div className='basis-1/2 pl-8'>
                <h1 className='font-bold text-xl pb-5'>{title}</h1>
                <h1 className='font-bold text-xl border-b border-black pb-1'>￦{price}</h1>
                <p className='font-semibold text-xs opacity-80 py-5'>{description}</p>
                <div className='flex justify-between items-center pb-5'>
                    <p className=''>옵션</p>
                    <select onChange={selectSize} className='py-1 px-1 border border-black w-11/12 p-0 text-s font-semibold border-dashed'>
                        {options.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        {/* <option value='aa'>aa</option>
                    <option value='bb'>bb</option>
                    <option value='cc'>cc</option> */}
                    </select>
                </div>
                <button onClick={addItem} className='border w-full py-2 font-semibold bg-red-400 text-white'>장바구니에 추가</button>
            </div>
            {/* <button className='border border-black'>장바구니에 추가</button> */}

        </section>
    );
};

export default ProductDetail;

