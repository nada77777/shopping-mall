import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = (props) => {
    const product = useLocation().state.product;
    const { name, price, imgPath, detail, gender, size } = product;
    console.log(size);
    console.log(product);
    return (
        <section className='flex justify-between'>
            <img className='h-[720px]' alt='product_img' src={imgPath} />
            <div>
                <h1 className='font-bold text-xl'>{name}</h1>
                <h1 className='font-bold text-xl border-b border-black'>￦{price}</h1>
                <p className='font-semibold text-xs opacity-80'>{detail}</p>
                <div className='flex'>
                    <p>옵션</p>
                    <select className='py-1 border border-black w-full p-0 text-xs max-h-6'>
                        {size.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        {/* <option value='aa'>aa</option>
                    <option value='bb'>bb</option>
                    <option value='cc'>cc</option> */}
                    </select>
                </div>
            </div>
            {/* <button className='border border-black'>장바구니에 추가</button> */}

        </section>
    );
};

export default ProductDetail;

