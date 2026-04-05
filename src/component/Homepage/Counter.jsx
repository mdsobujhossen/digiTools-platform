import React from 'react';

const Counter = () => {
    return (
        <div className='flex justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10'>
            <div className='grid sm:grid-cols-3'>
                <div className='text-white text-center '>
                    <p className='text-6xl font-bold'>50k</p>
                    <p className=''>Active user</p>
                </div>
                <div className='text-white text-center border-y-2 sm:border-y-0 smorder-x-2  sm:px-10'>
                    <p className='text-6xl font-bold'>50k</p>
                    <p className=''>Active user</p>
                </div>
                <div className='text-white text-center '>
                    <p className='text-6xl font-bold'>50k</p>
                    <p className=''>Active user</p>
                </div>

            </div>
        </div>
    );
};

export default Counter;