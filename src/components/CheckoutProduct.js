import { StarIcon } from '@heroicons/react/outline'
import React from 'react'
import Image from 'next/image'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'

function CheckoutProduct({ id, title, price, stars, description, category, image, prime }) {
    const dispatch = useDispatch()
    const handleAddToBasket=()=>{
        const product={
           id,
           title,
           price,
           stars,
           description,
           category,
           image,
           prime
        }
        dispatch(addToBasket(product))
    }
    
    const handleRemoveFromBasket = ()=>{
        dispatch(removeFromBasket({id}))
    }
    
    return (

        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(stars).fill().map(() => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <h4>{price}</h4>
                {prime &&
                    <div className="flex items-center space-x-2 ">
                        <img loading="lazy" src="https://links.papareact.com/fdw" className="w-12" alt="" objectFit="contain" />
                        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                    </div>
                }
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button mt-auto" onClick={handleAddToBasket }>Add to Basket</button>
                <button className="button mt-auto" onClick={handleRemoveFromBasket }>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct



