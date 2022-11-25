import React from 'react';
import { ImBin2 } from 'react-icons/im';


const CartItem = () => {

    return (
        //border-gray-800 border
        <li className='flex justify-around items-center  px-3 py-3'>
            <img className='max-w-xs max-h-80 rounded-md' alt='product_img' />
            <div className='w-full pl-5'>
                <h1>title</h1>
                <h1>option</h1>
                <h1>price</h1>
            </div>
            <div className='flex items-center'>
                <button className='border border-emerald-900 w-5 h-5 font-bold flex items-center justify-center'>-</button>
                <p className='mx-1'>0</p>
                <button className='border border-emerald-900 w-5 h-5 font-bold flex items-center justify-center'>+</button>
                <ImBin2 className='ml-1' />
            </div>
        </li>
    );
};

export default CartItem;