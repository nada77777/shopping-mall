import React from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
const Header = (props) => {
    return (
        <header className='flex justify-between items-center bg-slate-400'>
            <div className='flex items-center'>
                <AiOutlineShopping />
                <h1>Shopping mall</h1>
            </div>
            <div className='flex items-center'>
                <p>Products</p>
                <AiOutlineShoppingCart />
                <button>Login</button>
            </div>
        </header>
    );
};

export default Header;