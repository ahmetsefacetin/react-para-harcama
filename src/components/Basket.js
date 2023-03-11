import React from 'react'
import BasketItem from './BasketItem'

export default function Basket({ basket, total, resetBasket }) {

    function moneyFormat(money) {
        return money.toLocaleString()
    }

    return (
        <div className="basket-container container">
            <h3>Alışveriş Detayları</h3>

            <ul>
                {basket.map(item => (
                    <BasketItem item={item} />
                ))}
            </ul>

            <div className='total'>
                Toplam: ${moneyFormat(total)}5
            </div>
            
            <button className="basket-reset-btn" onClick={resetBasket}>Sepeti Sıfırla</button>
        </div>
    )
}
