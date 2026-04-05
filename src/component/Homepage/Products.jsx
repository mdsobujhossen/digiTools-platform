import React, { use, useState } from 'react';
import Product from './Product';

const Products = ({ productPromise }) => {
    const products = use(productPromise)
    const [tab, setTab] = useState("products")
    const [cart, setCart] = useState([])


    return (
        <div className='container mx-auto my-10 '>
            <div className='text-center'>
                <h3 className='font-bold text-3xl mb-4'>Premium Digital Tools</h3>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.</p>
            </div>
            
            <div>
                <div className='flex justify-center items-center mt-8 gap-2'>
                    <button onClick={() => {setTab("products")}} className={`btn ${tab === "products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} rounded-full`}>Products</button>

                    <button onClick={() => {setTab("cart")}} className={`btn ${tab === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} rounded-full`}>carts()</button>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 my-10'>
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        cart={cart}
                        setCart={setCart}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;