import React, { use } from 'react';
import Product from './Product';

const Products = ({ productPromise }) => {
    const products = use(productPromise)
    console.log(products);


    return (
        <div className='container mx-auto my-10 '>
            <div className='text-center'>
                <h3 className='font-bold text-3xl mb-4'>Premium Digital Tools</h3>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
            </div>

            <div className='grid sm:grid-cols-2 Lg:grid-cols-3 gap-8 '>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;