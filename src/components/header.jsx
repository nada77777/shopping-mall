import React from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { useAuthContext } from '../context/auth_context';






const Header = (props) => {
    const { user, googleLogin, googleLogout } = useAuthContext();
    console.log('sssssssssssssssssssssssssssssssssssss', user);
    const loginClick = () => {
        user ? googleLogout() : googleLogin();
    };


    return (
        <header className='flex justify-between items-center px-2 py-3'>
            <div className='flex items-center'>
                <AiOutlineShopping className='text-red-400 text-5xl cursor-pointer' />
                <h1 className='text-red-400 font-semibold text-2xl cursor-pointer'>Shopping mall</h1>
            </div>
            <div className='flex items-center'>
                <p className='text-l pr-5 font-semibold cursor-pointer' >Products</p>
                {user && (<AiOutlineShoppingCart className='text-2xl cursor-pointer' />)}
                {user && user.isAdmin && (<BsPencilFill className='cursor-pointer mx-2' />)}

                {user && (<>
                    <img className='w-8 h-8 mx-2 rounded-full' alt='avatar_img' src={user.photoURL} />
                    <p className='font-semibold'>{user.displayName}</p>
                </>)}

                {/* {/* <p className='cursor-pointer' onClick={() => navigate('/new')}>연필</p> */}

                <button onClick={loginClick} className='border px-5 py-2 font-semibold bg-red-400 text-white ml-6 cursor-pointer'>{user ? 'Logout' : 'Login'}</button>
            </div>
        </header>
    );
};

export default Header;