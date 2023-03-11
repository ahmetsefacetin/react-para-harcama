import React from 'react'

export default function BasketItem({ item }) {
    return (
        <>

            <li className='basket-item'>
                {item.title} X {item.amount}
            </li>

        </>
    )
}
