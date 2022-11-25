import React from 'react';

const NewProduct = (props) => {

    return (
        <section className='px-12 py-12'>
            <h1 className='text-center text-2xl pb-10 font-extrabold'>새로운 제품 등록</h1>
            {/* {file && <img alt='img' src={URL.createObjectURL(file)} />} */}
            <form className='flex flex-col'>
                <input name='file' className='border my-2 px-2 py-2 border-slate-800  border-opacity-80' type="file" accept='image/*' />
                <input name='name' className='border my-2 px-2 py-2 border-slate-800  border-opacity-80' type="text" placeholder='제품명' />
                <input name='price' className='border my-2 px-2 py-2 border-slate-800  border-opacity-80' type="number" placeholder='가격' />
                <input name='kind' className='border my-2 px-2 py-2 border-slate-800  border-opacity-80' type="text" placeholder='카테고리' />
                <input name='dep' className='border my-2 px-2 py-2 border-slate-800  border-opacity-80' type="text" placeholder='제품 설명' />
                <input name='size' className='border my-2 px-2 py-2 border-slate-800  border-opacity-80' type="text" placeholder='제품 사이즈' />
                <button className='border px-5 py-3 font-semibold bg-red-400 text-white cursor-pointer'>제품 등록하기</button>
            </form>
        </section>
    );
};

export default NewProduct;