import { StarIcon } from '@heroicons/react/outline'
import Image from "next/image"
// import React from 'react'

import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

function Products({id, title, price, description, category, image}) {
    // console.log(props)
    // const  = props
    console.log(title)
    const [stars] = useState(Math.floor(Math.random()*(5))+1)
    const [prime] = useState(Math.random()<0.5)
    const dispatch = useDispatch()
    const addItemToBasket =()=>{
        const product={
            id, title, price, description, category, image, stars, prime
        }
        dispatch(addToBasket(product))
    }
    return (
        <>
        {/* <h1>{category}</h1> */}
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
                <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            {/* <div> */}
                <Image 
                  src={image}
                  height={200}
                  width={200}
                  objectFit="contain"
                  alt=""
                  />
            {/* </div> */}
            {/* <div> */}
                <h4 className="my-3">{title}</h4>
            {/* </div> */}
            <div className="flex">
                { Array(stars).fill().map(()=>(
                     <StarIcon className="h-5 text-yellow-500" />
                ))}
            </div>
            
                <p className="text-xs my-2 line-clamp-2">{description}</p>
            
            <div className="mb-5"> 
                <p>{price}</p>
            </div>
            {prime&&
            <div className="flex items-center space-x-2 -mt-5">
                <Image src="https://links.papareact.com/fdw" width={50} height={100} alt="" objectFit="contain"/>
                <p className="text-xs text-gray-500">Free Next-day Delivery</p>
            </div>
}
                <button className="mt-auto button" onClick={addItemToBasket}>Add to Basket</button>
            
        </div>
        </>
    )
}

export default Products
