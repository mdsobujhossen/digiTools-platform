import React from 'react';
import ProductFeatures from './ProductFeatures';

const Product = ({ product }) => {
    console.log(product);
    const {name, description, price, tag, features, icon } = product

    //     {
    //     "id": 4,
    //     "name": "Ultimate Job Pack",
    //     "description": "All-in-one package for job seekers.",
    //     "price": 49,
    //     "period": "one-time",
    //     "tag": "best seller",
    //     "tagType": "best-seller",
    //     "features": [
    //         "200+ templates",
    //         "ATS optimization",
    //         "Interview preparation guide",
    //         "Portfolio builder"
    //     ],
    //     "icon": "💼"
    // }

    return (
            <div className="card bg-base-200 shadow-sm">
                <div className="card-body relative">
                    <span className={`badge badge-soft border border-gray-300 rounded-full absolute top-4 right-4 font-medium ${tag === "best seller" ? "badge-warning": "badge-error"}`}>{tag}</span>
                    <div className="space-y-3">
                        <span>{icon}</span>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className='text-[#627382]'>{description}</p>
                        <span className="text-xl"><span className='text-2xl font-bold'>${price}</span>/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-1 text-xs">
                        
                        {
                            features.map((feature, i) => <ProductFeatures key={i} feature={feature} ></ProductFeatures>)
                        }
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
    );
};

export default Product;