const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async(req, res)=>{
    const {items, email} = req.body
    
    const transformedItems= items.map(item=>({
        description:item.description,
        quantity:1,
        price_data:{
            currency:'inr',
            unit_price = item.price*100,
            product_data:{
            name:item.title,
            image:[item.image]
        },
    },
    }))

    const session= stripe.checkout.sessions.create({
        
    })
}