import React from 'react';
import ProductCard from '../components/product_card';

const Products = (props) => {
    const data = [
        {
            id: 1,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 2,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 3,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 4,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 5,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 6,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 7,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 8,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 9,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 10,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 11,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
        {
            id: 12,
            imgPath: '/imgs/1.webp',
            name: 'GOLD COTTON TWEED 드레스',
            price: '120000',
            detail: '스트레치 비스코스 드레스 - 터틀넥 - 자카드 스트라이프 디테일',
            size: ['XS', 'S', 'L'],
            gender: '여성'
        },
    ];
    return (
        <section>
            <ul className='grid grid-cols-4'>
                {data.map((product) => <ProductCard key={product.id} product={product} />)}
            </ul>
        </section>
    );
};

export default Products;