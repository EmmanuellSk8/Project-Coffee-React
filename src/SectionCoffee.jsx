import './index.css'
import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';

export default function SectionCoffee() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
                console.log(data)
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (

        <section className='w-full justify-center flex mt-24 mb-52'>
            <div className="w-[1200px] justify-center flex flex-wrap gap-15">

                {data.map((item) => (
                    <article className='hover:scale-105 duration-300 ease-in-out' key={item.id}>


                        <p class="cursor-pointer bg-yellow-600 w-fit px-3 py-1 font-bold rounded-3xl text-sm text-[#302522] absolute z-10 m-2">
                            Popular
                        </p>

                        <img className='rounded-3xl mb-2 cursor-pointer' src={item.image} alt="IMG" />


                        <div className='flex justify-between mb-3 px-2'>
                            <h3>{item.name}</h3>
                            <p className='bg-[#BEE3CC] text-[#111315] py-0.5 px-2 rounded-lg font-semibold text-sm'>{item.price}</p>
                        </div>
                        <p className='flex gap-1'>
                            <StarIcon />
                            {item.rating}
                            <p className='text-[#4D5562]'>({item.votes} votes)</p>
                        </p>
                    </article>
                ))}

            </div>
        </section>
    )
}